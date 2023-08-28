import React from "react";
import "./Courses.scss";
import Loading from "../../utils/Loading";
import Course from "./components/Course";
import descriptionPath from "./description.md";

function handle(textContent, setText) {
  setText(textContent);
}

export default function Courses() {
  const [ text, setText ] = React.useState();

  React.useEffect(() => {
    fetch(descriptionPath)
      .then(response => response.text())
      .then(textContent => handle(textContent, setText));
  });

  return (<>
    <section id="title-bar">
      課程介紹
    </section>
    <div className="container py-5">
      {text ? (
        <Course 
          title="遊戲設計"
          src="https://slides.com/star_huey/game/"
          content={text.split("<%-== next ==-%>")[2]}
        />
      ) : (
        <Loading />
      )}
    </div>
  </>);
}