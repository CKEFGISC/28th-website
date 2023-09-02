import ReactRemarkable from "react-remarkable";

import "./Remarkable.scss";

export default function Markdown(props) {
  return (
    <div className="markdown">
      <ReactRemarkable
        source={props.content || props.children}
        options={{
          html: true,               // Enable HTML tags in source
          xhtmlOut: true,           // Use "/" to close single tags (<br />)
          breaks: false,            // Convert "\n" in paragraphs into <br>
          langPrefix: "prettyprint language-",  // CSS language prefix for fenced blocks
        }}
        container="div"
      />
    </div>
  );
}