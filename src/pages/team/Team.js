import "./Team.scss";
import Person from "./components/Person";

export default function Team() {
  function onSwitch() {
    if (document.querySelector("input#is-fgisc").checked) {
      document.querySelector("#team-ckeisc")?.classList?.add("shift-left");
      document.querySelector("#team-fgisc")?.classList?.add("shift-left");
    } else {
      document.querySelector("#team-ckeisc")?.classList?.remove("shift-left");
      document.querySelector("#team-fgisc")?.classList?.remove("shift-left");
    }
  }

  return (<>
    <section id="title-bar">
      幹部介紹
    </section>
    <section id="team-switcher">
      <div className="d-flex flex-column align-items-center">
        <label className="team-toggle-switch nolabel" onClick={null}>
          <input type="checkbox" id="is-fgisc" onChange={onSwitch} />
          <a href="#/team" className="switch-rect">&#8203;</a>
          <span>
            <span className="left-span">建電</span>
            <span className="right-span">北資</span>
          </span>
        </label>
      </div>
    </section>
    <div className="team-section-anchor">
      <section id="team-ckeisc">
        <div className="container d-flex flex-column align-items-center">
          <Person
            role="社長"
            name="水獺"
            tags={[ "會考 36 分大電神", "吉他人", "真心話大冒險追到女友" ]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            imgSrc="/images/team/water_lai.png"
          />
        </div>
      </section>
      <section id="team-fgisc" className="shift-right">
        <div className="container">
          北資在這
        </div>
      </section>
    </div>
  </>);
}