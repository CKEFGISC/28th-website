import OffLink from "./components/OffLink"; 
import "./OffCanvas.scss";

function Up(props) {
  return (<sup><small>{props.children}</small></sup>);
}

export default function Offcanvas() {
  return (
    <div className="offcanvas offcanvas-end" tabIndex={-1} 
      id="offcanvas" aria-labelledby="offcanvasLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasLabel">
          CKEFGISC 28<Up>th</Up>
        </h5>
        <button type="button" className="btn-close offcanvas-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body thin-scrollbar">
        <ul className="navbar-nav">
          <OffLink href="#/news">公告</OffLink>
          <OffLink href="#/team">幹部</OffLink>
          <OffLink href="#/courses">課程</OffLink>
          <OffLink href="#/events">活動</OffLink>
          <OffLink href="#/museum">歷屆</OffLink>
          <OffLink href="https://iscoj.fg.tp.edu.tw/"
            target="_blank" rel="noreferrer">ISCOJ</OffLink>
        </ul>
      </div>
    </div>
  );
}