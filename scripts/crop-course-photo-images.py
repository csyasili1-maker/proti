from __future__ import annotations

import json
import sys
from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "images" / "courses"
TARGET_SIZE = (800, 500)


def load_courses() -> list[dict]:
    # Read the generated sitemap-adjacent data through a tiny JSON dump from Node would
    # be overkill here; the course file format has stable slug fields.
    import re

    text = (ROOT / "src" / "mocks" / "coursesData.ts").read_text(encoding="utf-8")
    slugs = re.findall(r'slug:\s*"([^"]+)"', text)
    titles = re.findall(r'title:\s*"([^"]+)"', text)
    return [{"slug": slug, "title": title} for slug, title in zip(slugs, titles)]


def crop_cell(sheet: Image.Image, index: int) -> Image.Image:
    cols = rows = 4
    width, height = sheet.size
    cell_w = width / cols
    cell_h = height / rows
    col = index % cols
    row = index // cols

    # Trim a small gutter from each panel so contact-sheet dividers do not appear.
    gutter_x = cell_w * 0.035
    gutter_y = cell_h * 0.035
    box = (
        int(col * cell_w + gutter_x),
        int(row * cell_h + gutter_y),
        int((col + 1) * cell_w - gutter_x),
        int((row + 1) * cell_h - gutter_y),
    )
    panel = sheet.crop(box)
    return ImageOps.fit(panel, TARGET_SIZE, method=Image.Resampling.LANCZOS, centering=(0.5, 0.48))


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage: python scripts/crop-course-photo-images.py <sheet1.png> [sheet2.png ...]", file=sys.stderr)
        return 2

    sheet_paths = [Path(arg) for arg in sys.argv[1:]]
    missing = [str(path) for path in sheet_paths if not path.exists()]
    if missing:
        print(json.dumps({"missingSheets": missing}, indent=2), file=sys.stderr)
        return 1

    courses = load_courses()
    capacity = len(sheet_paths) * 16
    if capacity < len(courses):
        print(json.dumps({"error": "not enough sheet panels", "courses": len(courses), "capacity": capacity}, indent=2), file=sys.stderr)
        return 1

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    sheets = [Image.open(path).convert("RGB") for path in sheet_paths]

    for course_index, course in enumerate(courses):
        sheet = sheets[course_index // 16]
        panel_index = course_index % 16
        photo = crop_cell(sheet, panel_index)
        out_path = OUT_DIR / f"{course['slug']}.jpg"
        photo.save(out_path, quality=82, optimize=True, progressive=True)

    print(json.dumps({"generated": len(courses), "outDir": str(OUT_DIR)}, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
