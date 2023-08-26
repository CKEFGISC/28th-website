import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Page from "./Page";
import ErrorPage from "./PageError";

import Home from "./pages/home/Home";
import Events from "./pages/events/Events";
import Courses from "./pages/courses/Courses";

const router = createBrowserRouter([
  { path: "/",       element: (<Page title="首頁"><Home /></Page>), errorElement: (<ErrorPage />) },
  { path: "/events", element: (<Page title="活動"><Events /></Page>) },
  { path: "/courses", element: (<Page title="活動"><Courses /></Page>) }
]);

export default function Main() {
  return (
    <RouterProvider router={router} />
  );
}