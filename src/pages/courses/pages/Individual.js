import React from "react";

import CourseDetails from "../components/CourseDetails";

import longDescriptionPath from "../descriptions/long.md";
import Loading from "../../../utils/Loading";

function setContent(index, view, textContent, setText) {
  var  
    titles = {
      "algorithm": "演算法",
    },
    imgSrcs = {
      "algorithm": null,
    }

  setText(<CourseDetails
    title={titles[view]}
    imgSrc={imgSrcs[view]}
    content={textContent.split("<%-== next ==-%>")[index]}
  />);
}

export default function CourseIndividual(props) {
  const [text, setText] = React.useState();

  React.useEffect(() => {
    fetch(longDescriptionPath)
      .then(response => response.text())
      .then(textContent => setContent(props.index, props.view, textContent, setText));
  });

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