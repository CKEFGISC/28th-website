export default function Brand(props) {
  var iconClassName = 
    `footer-brand-icon fa-${props.brandSeries ?? "brands"} fa-${props.brandName} fa-${props.brandSize ?? "xl"}`;
  return (
    <a className="clean-link" title={props.title}
      href={props.href} target="_blank" rel="noreferrer">
      <div className="circle footer-brand-circle">
        <i className={iconClassName}></i>
      </div>
    </a>
  );
}