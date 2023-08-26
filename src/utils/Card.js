export default function Card(props) {
  var buttonClassNames = `btn btn-${props.btnColor || "primary"}`;
  return (
    <div className="col-md-3">
      <a href={props.href}>
        <div className="card">
          <img src={props.imgSrc} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <span className={buttonClassNames}>點此查看</span>
          </div>
        </div>
      </a>
    </div>
  );
}