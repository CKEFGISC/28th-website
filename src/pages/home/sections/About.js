import React from "react";
import rehypeRaw from "rehype-raw";

import ReactMarkdown from "react-markdown";
import SectionTitle from "../../../utils/SectionTitle";

import contentPath from "./About.md";

export default function About() {
  const [text, setText] = React.useState();

  fetch(contentPath)
    .then(response => response.text())
    .then(textContent => setText(textContent));

  return (
    <section id="about">
      <div className="container">
        <SectionTitle>關於我們</SectionTitle>
        <div className="text-paragraph">
          <ReactMarkdown children={text || "Loading..."} rehypePlugins={[ rehypeRaw ]}></ReactMarkdown>
        </div>
      </div>
    </section>
  );
}