import React from "react";

import CourseDetails from "../components/CourseDetails";

import longDescriptionPath from "../descriptions/long.md";
import Loading from "../../../utils/Loading";

export default function CourseIndividual(props) {
  const [text, setText] = React.useState();

  React.useEffect(() => {
    fetch(longDescriptionPath)
      .then(response => response.text())
      .then(textContent => setText(textContent));
  });

  return (<>
    <section id="title-bar">
      課程介紹
    </section>
    {text ? (<>
      <CourseDetails
        title={text.split("<%-== next ==-%>")[props.index].split(/\r\n|\r|\n/g).filter(l => l)[0].slice(2)}
        imgSrc="/images/courses/algorithm.jpg"
        content={text.split("<%-== next ==-%>")[props.index]}
        href="?view=algorithm"
      />
    </>) : (<Loading />)}
  </>);
}