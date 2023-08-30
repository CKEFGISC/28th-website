import ReactMarkdown from "react-markdown";

export default function CourseDetails(props) {
  return (
    <div className="d-flex course mb-5">
      <img
        src={props.imgSrc || "/images/courses/404.png"}
        alt={props.title}
      />
      <span className="description" style={{ marginLeft: "20px" }}>
        <ReactMarkdown children={props.content} />
      </span>
    </div>
  );
}