import ReactMarkdown from "react-markdown";

import Slides from "./Slides";

export default function Course(props) {
  return (
    <div className="d-flex course">
      <Slides title={props.title} src={props.src} />
      <span className="description" style={{ marginLeft: "20px" }}>
        <ReactMarkdown children={props.content} />
      </span>
    </div>
  );
}