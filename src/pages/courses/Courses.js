import React from "react";
import { useSearchParams } from "react-router-dom";

import "./Courses.scss";

import CourseList from "./pages/List";
import CourseIndividual from "./pages/Individual";

export default function Courses() {
  const [ searchParams ] = useSearchParams();
  const view = searchParams.get("view");

  if (!view) {
    return (<CourseList />);
  }

  const index = [ "web", "python", "game_design", "blender", "algorithm" ].indexOf(view);

  if (index === -1) {
    window.location.replace("#/courses");
    return (<></>);
  }

  return (<CourseIndividual index={index} view={view} />);
}
