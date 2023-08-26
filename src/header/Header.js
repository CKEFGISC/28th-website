import "./Header.scss";

import Icon from "./components/Icon";
import NavLink from "./components/NavLink";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid d-flex">
            <a className="navbar-brand" href="/">
              <Icon />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <NavLink href="/news">公告</NavLink>
                <NavLink href="/courses">課程介紹</NavLink>
                <NavLink href="/events">活動介紹</NavLink>
                <NavLink href="https://iscoj.fg.tp.edu.tw/" 
                  target="_blank" rel="noreferrer">ISCOJ</NavLink>
                <NavLink href="/museum">歷屆博物館</NavLink>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
