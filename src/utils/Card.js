import Scroll from "../utils/Scroll";

function InnerCard(props) {
  return (
    <div className="card">
      <img src={props.imgSrc} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <span className={`btn btn-${props.btnColor || "primary"}`}>點此查看</span>
      </div>
    </div>
  );
}

export default function Card(props) {
  return (
    <div className="col-md-3">
      {props.useScroll ? (
        <Scroll to={props.to}>
          <InnerCard {...props} />
        </Scroll>
      ) : (
        <a href={props.href}>
          <InnerCard {...props} />
        </a>
      )}
    </div>
  );
}