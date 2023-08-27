import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import "./News.scss"; 

import Loading from "../../utils/Loading";

import contentPath from "./content.md";

function handle(textContent, setText) {
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

    var content = lines.slice(1).join("\n");

    news.push(<React.Fragment key={`news-${i}`}>
        <div className="accordion-item" key="123">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#news-${i}`}>
              <h4 className="m-1">
                <span className="opacity-50">{`#${i}`}</span>&nbsp;{title}
              </h4>
            </button>
          </h2>
          <div id={`news-${i}`} className="accordion-collapse collapse" data-bs-parent="#news-accordion">
            <div className="accordion-body">
              {content ? (
                <ReactMarkdown children={content} rehypePlugins={[rehypeRaw]} />
              ) : (
                <p><i>This field is empty...</i></p>
              )}
            </div>
          </div>
        </div>
    </React.Fragment>);
  }

  setText(news);
}

export default function News() {
  const [text, setText] = React.useState();

  React.useEffect(() => {
    fetch(contentPath)
      .then(response => response.text())
      .then(textContent => handle(textContent, setText));
  }, []);

  return (<>
    <section id="title-bar">最新消息</section>
    <section id="news">
      <div className="container">
        <div className="accordion" id="news-accordion">
          {text || <Loading />}
        </div>
      </div>
    </section>
  </>);
}