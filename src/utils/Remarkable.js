import ReactRemarkable from "react-remarkable";
import $ from "jquery";

import "./Remarkable.scss";

function allAnchorTargetBlank() {
  $(".markdown a").attr("target", "_blank");
}

export default function Markdown(props) {
  return (
    <div className="markdown" onClick={allAnchorTargetBlank}>
      <ReactRemarkable
        source={props.content || props.children}
        options={{
          html: true,               // Enable HTML tags in source
          xhtmlOut: true,           // Use "/" to close single tags (<br />)
          breaks: false,            // Convert "\n" in paragraphs into <br>
          langPrefix: "language-",  // CSS language prefix for fenced blocks
        }}
        container="div"
      />
    </div>
  );
}