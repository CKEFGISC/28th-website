import React from "react";

import CourseDetails from "../components/CourseDetails";

import longDescriptionPath from "../descriptions/long.md";

import Loading from "../../../utils/Loading";
import Placeholder from "../../../utils/Placeholder";
import { switchPageAnimation } from "../../../utils/Page";

function setContent(index, view, textContent, setText) {
  var theContent = textContent.split("<%-== next ==-%>")[index];
  var 
    titles = {
      "web": "網頁",
      "python": "Python",
      "game_design": "遊戲設計",
      "blender": "Blender",
      "algorithm": "演算法",
    },
    imgSrcs = {
      "web": "/images/courses/web.avif",
      "python": "/images/courses/python.jpg",
      "game_design": "/images/courses/game_design.webp",
      "blender": "/images/courses/blender.jpg",
      "algorithm": "/images/courses/algorithm.jpg"
    }

  setText(<CourseDetails
    title={titles[view]}
    imgSrc={imgSrcs[view]}
    content={theContent.includes("%UNDONE%") ? `# ${titles[view]}\n\n` + Placeholder() : theContent}
  />);
}

export default function CourseIndividual(props) {
  const [text, setText] = React.useState();

  React.useEffect(() => {
    switchPageAnimation();

    fetch(longDescriptionPath)
      .then(response => response.text())
      .then(textContent => setContent(props.index, props.view, textContent, setText));
  }, [ props ]);

  return (<>
    <section id="title-bar">
      課程介紹
    </section>
    <section id="individual-course">
      <div className="container">
        {text ?? (<Loading />)}
      </div>
    </section>
  </>);
}