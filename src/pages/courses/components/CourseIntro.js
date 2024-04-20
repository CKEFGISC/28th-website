import Markdown from "../../../utils/Remarkable";

export default function CourseIntro(props) {
  return (
    <div className="d-flex course mb-5 fade-in hiding">
      <img
        src={props.imgSrc}
        alt={props.title}
      />
      <span className="description" style={{ marginLeft: "20px" }}>
        <Markdown content={props.content} />
        <a href={"#/courses" + props.href ?? ""}>
          {props.href ? <button className={`btn btn-${props.btnColor || "primary"} mt-2`} src="?alt=2">
            查看更多&nbsp;
            <i className="fa-solid fa-arrow-right-long"></i>
          </button> : ""}
        </a>
      </span>
    </div>
  );
}