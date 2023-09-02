import React from "react";

import "./About.scss";

import SectionTitle from "../../../utils/SectionTitle";
import Loading from "../../../utils/Loading";
import Markdown from "../../../utils/Remarkable";

import contentPath from "./about.md";

export default function About() {
  const [ text, setText ] = React.useState();

  React.useEffect(() => {
    fetch(contentPath)
      .then(response => response.text())
      .then(textContent => setText(textContent));
  }, []);

  return (
    <section id="about">
      <div className="container">
        <SectionTitle>關於我們</SectionTitle>
        <div className="text-paragraph">
          {text ? (
            <Markdown content={text} />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </section>
  );
}