import ReactMarkdown from "react-markdown";

export default function CourseIntro(props) {
  return (
    <div className="d-flex course mb-5">
      {/* <Slides title={props.title} src={props.src} /> */}
      <img 
        src={props.imgSrc} 
        alt={props.title} 
      />
      <span className="description" style={{ marginLeft: "20px" }}>
        <ReactMarkdown children={props.content} />
        <button className={`btn btn-${props.btnColor || "primary"} mt-2`} src="?alt=2">
          查看更多&nbsp;
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </span>
    </div>
  );
}