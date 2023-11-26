import React from "react";
import {
  createHashRouter,
  RouterProvider
} from "react-router-dom";

import Page, { ErrorPage } from "./utils/Page";

import Home from "./pages/home/Home";
import Events from "./pages/events/Events";
import Museum from "./pages/museum/Museum";
import Team from "./pages/team/Team";
import CTF from "./pages/ctf/CTF";
import CourseList from "./pages/courses/pages/List";
import CourseIndividual from "./pages/courses/pages/Individual";
import NewsList from "./pages/news/pages/List";
import NewsIndividual from "./pages/news/pages/Individual";

const router = createHashRouter([
  { path: "/", element: (<Page title="首頁"><Home /></Page>), errorElement: (<ErrorPage />) },
  { path: "/events", element: (<Page title="活動"><Events /></Page>) },
  { path: "/courses", element: (<Page title="課程"><CourseList /></Page>) },
  { path: "/courses/:id", element: (<Page title="課程"><CourseIndividual /></Page>) },
  { path: "/museum", element: (<Page title="博物館"><Museum /></Page>) },
  { path: "/news", element: (<Page title="公告"><NewsList /></Page>) },
  { path: "/news/:id", element: (<Page title="公告"><NewsIndividual /></Page>) },
  { path: "/team", element: (<Page title="幹部"><Team /></Page>) },
  { path: "/ctf/:id", element: (<Page title="旗幟"><CTF /></Page>) }
]);

export default function Main() {
  return (
    <RouterProvider router={router} />
  );
}