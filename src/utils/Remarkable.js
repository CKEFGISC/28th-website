import { Remarkable } from "remarkable";
import rkatex from "remarkable-katex";

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

  return <div className="markdown" dangerouslySetInnerHTML={{ __html: md.render(content) }} ></div>
}
