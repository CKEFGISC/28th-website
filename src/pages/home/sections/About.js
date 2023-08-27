import React from "react";
import rehypeRaw from "rehype-raw";

import ReactMarkdown from "react-markdown";
import SectionTitle from "../../../utils/SectionTitle";

import contentPath from "./about.md";
import Loading from "../../../utils/Loading";

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
            <ReactMarkdown children={text} rehypePlugins={[ rehypeRaw ]} />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </section>
  );
}