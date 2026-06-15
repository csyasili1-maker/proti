import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ServicesPage from "../pages/services/page";
import CareerSuccessServicesPage from "../pages/career-success-services/page";
import CareerPlacementSupportPage from "../pages/career-placement-support/page";
import CorporateTrainingSolutionsPage from "../pages/corporate-training-solutions/page";
import CoursesPage from "../pages/courses/page";
import ComingSoon from "../pages/ComingSoon/page";
import AboutPage from "../pages/about/page";
import ContactPage from "../pages/contact/page";
import ProgramsPage from "../pages/programs/page";
import QATestingPage from "../pages/qa-testing/page";
import CourseDetailPage from "../pages/course-detail/page";
import PrivacyPolicyPage from "../pages/privacy-policy/page";
import TermsConditionsPage from "../pages/terms-conditions/page";
import CertificationsPage from "../pages/certifications/page";

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
    element: <ComingSoon />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
