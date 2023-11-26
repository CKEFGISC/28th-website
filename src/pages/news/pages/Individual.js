import React from "react";
import { useParams } from "react-router-dom";

import "../News.scss"; 

import Loading from "../../../utils/Loading";
import Markdown from "../../../utils/Remarkable";
import { switchPageAnimation } from "../../../utils/Page";

import contentPath from "../content.md";

function handle(textContent, index, setText) {
  var rawNews = textContent.split("<%-== next ==-%>");

  setText(rawNews[parseInt(index)] ? (
    <Markdown content={rawNews[parseInt(index)]} />
  ) : (
    <div style={{ width: "100%", display: "flex", justifyContent: "center", fontSize: "1.2em" }}><p><i>News not found.</i></p></div>
  ));
}

export default function NewsIndividual() {
  const { id: newsId } = useParams();

  const [text, setText] = React.useState();

  React.useEffect(() => {
    switchPageAnimation();

    fetch(contentPath)
      .then(response => response.text())
      .then(textContent => handle(textContent, newsId, setText));
  }, [ newsId ]);

  return (<>
    <section id="title-bar">最新消息</section>
    <section id="individual-news">
      <div className="container">
        <div className="news-section">
          {text || <Loading />}
        </div>
      </div>
    </section>
  </>);
}