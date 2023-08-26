import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Page from "./Page";
import ErrorPage from "./PageError";

import Home from "./pages/home/Home";

var pages = [
  { path: "/", element: (<Page title="首頁"><Home /></Page>) }
];

for (let i in pages)
  pages[i].errorElement = (<ErrorPage />);

const router = createBrowserRouter(pages);

export default function Main() {
  return (
    <RouterProvider router={router} />
  );
}