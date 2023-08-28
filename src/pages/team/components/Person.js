import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

function Tag(props) {
  return (
    <span style={{
      background: "var(--color-white-soft)",
      padding: "2px",
      borderRadius: "3px",
      display: "inline-block"
    }}>#{props.children}</span>
  );
}

export default function Person(props) {
  let { imgSrc, role, name, tags, description } = props;
  tags = tags.split(/,/g).map((t, i) => t.trim());

  return (
    <div className="person d-flex mb-5">
      <img 
        src={imgSrc} 
        alt={name} 
        width="250"
        height="250"
        style={{ borderRadius: "20px", flexShrink: 0 }} 
      />
      <span style={{ marginLeft: "20px", maxWidth: "50vw" }}>
        <h4 style={{ marginBottom: "0.5rem" }}>{role}&nbsp;─&nbsp;</h4>
        <h2 style={{ marginBottom: "1rem", marginLeft: "30px" }}>{name}</h2>

        <p className="person-tags">
          {tags.map((tag, i) => (<React.Fragment key={`tag-${i}`}>
            <Tag>{tag}</Tag>
            {i + 1 !== tags.length ? <>,&nbsp;&nbsp;</> : ""}
          </React.Fragment>))}
        </p>

        <ReactMarkdown
          children={description} 
          rehypePlugins={[ rehypeRaw ]}
        />
      </span>
    </div>
  );
}