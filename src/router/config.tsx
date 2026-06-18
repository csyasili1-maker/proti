import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const NotFound = lazy(() => import("../pages/NotFound"));
const Home = lazy(() => import("../pages/home/page"));
const ServicesPage = lazy(() => import("../pages/services/page"));
const CareerSuccessServicesPage = lazy(() => import("../pages/career-success-services/page"));
const CareerPlacementSupportPage = lazy(() => import("../pages/career-placement-support/page"));
const CorporateTrainingSolutionsPage = lazy(() => import("../pages/corporate-training-solutions/page"));
const CoursesPage = lazy(() => import("../pages/courses/page"));
const AboutPage = lazy(() => import("../pages/about/page"));
const ContactPage = lazy(() => import("../pages/contact/page"));
const ProgramsPage = lazy(() => import("../pages/programs/page"));
const QATestingPage = lazy(() => import("../pages/qa-testing/page"));
const CourseDetailPage = lazy(() => import("../pages/course-detail/page"));
const BlogPage = lazy(() => import("../pages/blog/page"));
const BlogDetailPage = lazy(() => import("../pages/blog/detail"));
const PrivacyPolicyPage = lazy(() => import("../pages/privacy-policy/page"));
const TermsConditionsPage = lazy(() => import("../pages/terms-conditions/page"));
const CertificationsPage = lazy(() => import("../pages/certifications/page"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/courses",
    element: <CoursesPage />,
  },
  {
    path: "/courses/:slug",
    element: <CourseDetailPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/career-success-services",
    element: <CareerSuccessServicesPage />,
  },
  {
    path: "/career-placement-support",
    element: <CareerPlacementSupportPage />,
  },
  {
    path: "/corporate-training-solutions",
    element: <CorporateTrainingSolutionsPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/programs",
    element: <ProgramsPage />,
  },
  {
    path: "/certifications",
    element: <CertificationsPage />,
  },
  {
    path: "/course/qa-testing",
    element: <QATestingPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicyPage />,
  },
  {
    path: "/terms-conditions",
    element: <TermsConditionsPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/blog/:slug",
    element: <BlogDetailPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
