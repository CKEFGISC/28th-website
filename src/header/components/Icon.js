import "./Icon.scss";

export default function Icon() {
  return (
    <div className="icon px-0">
      <div className="icon-image">
        <img
          src="/images/ckeisc_mouse.png"
          alt="CKEISC Mouse"
          className="icon-image"
        />
        <img
          src="/images/x.png"
          alt="x"
          className="icon-image"
        />
        <img
          src="/images/fgisc_star.png"
          alt="FGISC Star"
          className="icon-image"
        />
      </div>
      <div className="icon-text">
        <span>&nbsp;CKE</span>
        <span className="hover-to-show long">ISC 43<sup><small>rd</small></sup> x&nbsp;</span>
        <span>FGISC&nbsp;</span>
        <span className="hover-to-show">37<sup><small>th</small></sup></span>
        <span className="hover-to-hide">28<sup><small>th</small></sup></span>
      </div>
    </div>
  );
}
