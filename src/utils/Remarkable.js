import { Remarkable } from "remarkable";
import rkatex from "remarkable-katex";
import $ from "jquery"

import React from "react";
import "./Remarkable.scss";

var md = new Remarkable({
  html: true,               // Enable HTML tags in source
  xhtmlOut: true,           // Use "/" to close single tags (<br />)
  breaks: false,            // Convert "\n" in paragraphs into <br>
  langPrefix: "language-",  // CSS language prefix for fenced blocks
});
md.use(rkatex);

export default function Markdown(props) {
  const content = props.content || props.source || props.children || "";

  React.useEffect(() => {
    $(() => {
      $(".markdown").find("a").attr("target", "_blank").attr("rel", "noreferrer");
    });
  }, []);

  return props.inline ? (
    <span
      className="markdown inline" 
      style={{ display: "inline-block" }}
      dangerouslySetInnerHTML={{ __html: md.render(content) }}
    ></span>
  ) : (
    <div 
      className="markdown" 
      dangerouslySetInnerHTML={{ __html: md.render(content) }}
    ></div>
  );
}
