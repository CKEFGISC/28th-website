import React from "react";

import "../News.scss"; 

import Loading from "../../../utils/Loading";
import { switchPageAnimation } from "../../../utils/Page";

import contentPath from "../content.md";
import { useNavigate } from "react-router-dom";
import Markdown from "../../../utils/Remarkable";

function handle(textContent, setText, goTo) {
  var rawNews = textContent.split("<%-== next ==-%>");

  var news = [];
  for (let i = rawNews.length - 1; i >=0; --i) {
    var lines = rawNews[i].trim().split(/\r\n|\r|\n/g);

    var title = lines[0];
    if (title.startsWith("# ")) 
      title = title.slice(2);
    else {
      title = "Untitled"
      lines.unshift("# Untitled");
    }

    news.push(<React.Fragment key={`news-${i}`}>
      <h3 style={{ cursor: "pointer" }} onClick={() => goTo(`${i}`)}>
        <span className="opacity-50">{`#${i}`}</span>&nbsp;<Markdown content={title} inline={true} />
      </h3>
      <hr />
    </React.Fragment>);
  }

  setText(news);
}

function PageItem(props) {
  return (
    <li className="page-item" style={{ cursor: "pointer" }}>
      <span className="page-link">
        <span>{props.children}</span>
      </span>
    </li>
  )
}

export default function NewsList() {
  const goTo = useNavigate();

  const [text, setText] = React.useState();

  React.useEffect(() => {
    switchPageAnimation();

    fetch(contentPath)
      .then(response => response.text())
      .then(textContent => handle(textContent, setText, goTo));
  }, [ goTo ]);

  return (<>
    <section id="title-bar">最新消息</section>
    <section id="list-news">
      <div className="container">
        <div className="news-list">
          {text || <><Loading /><div style={{ height: "100dvh" }}></div></>}
        </div>
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <PageItem>&laquo;</PageItem>
              <PageItem>1</PageItem>
              <PageItem>&raquo;</PageItem>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  </>);
}
