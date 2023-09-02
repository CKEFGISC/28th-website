import "./Header.scss";

import Icon from "./components/Icon";
import NavLink from "./components/NavLink";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid d-flex">
            <Icon />

            <button
              className="navbar-toggler"
              type="button"
              aria-expanded="false"
              aria-label="Toggle Sidebar Navigation"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas"
              aria-controls="offcanvas"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <NavLink href="#/news">公告</NavLink>
                <NavLink href="#/team">幹部</NavLink>
                <NavLink href="#/courses">課程</NavLink>
                <NavLink href="#/events">活動</NavLink>
                <NavLink href="#/museum">歷屆</NavLink>
                <NavLink href="https://iscoj.fg.tp.edu.tw/"
                  target="_blank" rel="noreferrer">ISCOJ</NavLink>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
