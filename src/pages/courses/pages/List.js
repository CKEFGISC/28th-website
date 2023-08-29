import React from "react";

import Loading from "../../../utils/Loading";
import SectionTitle from "../../../utils/SectionTitle";

import CourseIntro from "../components/CourseIntro";

import shortDescriptionPath from "../descriptions/short.md";

export default function CourseList() {
  const [ text, setText ] = React.useState();

  React.useEffect(() => {
    fetch(shortDescriptionPath)
      .then(response => response.text())
      .then(textContent => setText(textContent));
  });

  return (<>
    <section id="title-bar">
      課程介紹
    </section>
    <section id="courses">
      <SectionTitle>112 上</SectionTitle>
      <div className="container py-1">
        {text ? (<>
          <CourseIntro
            title="網頁"
            imgSrc="/images/courses/web.avif"
            content={text.split("<%-== next ==-%>")[0]}
            btnColor="crimson"
            href="?view=web"
          />
          <CourseIntro
            title="Python"
            imgSrc="/images/courses/python.jpg"
            content={text.split("<%-== next ==-%>")[1]}
            btnColor="gamboge"
            href="?view=python"
          />
          <CourseIntro
            title="遊戲設計"
            imgSrc="/images/courses/game_design.webp"
            content={text.split("<%-== next ==-%>")[2]}
            btnColor="success"
            href="?view=game_design"
          />
          <CourseIntro
            title="Blender"
            imgSrc="/images/courses/blender.jpg"
            content={text.split("<%-== next ==-%>")[3]}
            btnColor="iris"
            href="?view=blender"
          />
          <CourseIntro
            title="演算法"
            imgSrc="/images/courses/algorithm.jpg"
            content={text.split("<%-== next ==-%>")[4]}
            btnColor="orchid"
            href="?view=algorithm"
          />
        </>) : (
          <Loading />
        )}
      </div>
    </section>
  </>);
}