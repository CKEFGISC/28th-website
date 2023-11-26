import { useParams } from "react-router-dom";
import $ from "jquery";

import "./CTF.scss";

export default function CTF() {
  const { id } = useParams();

  function getFlagById() {
    switch (id) {
      case "lIA0zmzYSbgSlBUzwjo7hr5y": // footer
        return "Ck3F6i$C-Ma2E024-[0]{lOL-FlaG5-4rE-h4RD-7o-fiNd-R!ght}"

      case "chRDQdoVAx4J3sEYt7qPTICe":
        return "Ck3F6i$C-Ma2E024-[1]{MInEcrAF7-iS-a-c0o1-6AMe-t0-pl@y}";

      case "aiDWsN87hztRkXrKDW1RKZts":
        return "";

      case "wbCHG99tMIHxQGMRovgnJ8lI":
        return "";

      case "IBWKIRrBsCoDkNuXE99MvG5j":
        return "";

      case "fAWd2Lwy5A8k1SERUPeNk4qq":
        return "";

      case "7NhfAxSmXieV6B9ofXHsI2zV":
        return "";

      case "i4eG2HliYKoCtGlUXvw0SPcP":
        return "";

      case "38z3z6iMwv2OvM2CEeBeZJeK":
        return "";
        
      case "8LtypldESoQjkZ1OMjp0AMfG":
        return "";
        
      default:
        return null;
    }
  }

  const result = getFlagById(id);

  function copyToClipboard(ev, selector) {
    /** @type {JQuery} */
    const thisElement = $(ev.target);
    if (thisElement.hasClass("just-clicked")) return;

    thisElement
      .addClass("just-clicked")
      .removeClass(["fa-regular", "fa-clone"])
      .addClass(["fa-solid", "fa-check"]);

    setTimeout(() => {
      thisElement
        .removeClass("just-clicked")
        .addClass(["fa-regular", "fa-clone"])
        .removeClass(["fa-solid", "fa-check"])
    }, 600);

    navigator.clipboard.writeText($(selector).text());
  }

  return (<>
    <section id="ctf">
      {result ? (
        <div className="container d-flex flex-column align-items-center" style={{ fontSize: "1.2em" }}>
          <h2 className="mt-3 mb-4">你找到了一個旗幟！</h2>
          <div className="markdown"><h3><pre><code>
            <div className="d-flex">
              <span className="flag">{result}</span>
              <i class="copy-icon fa-regular fa-clone" onClick={(ev) => copyToClipboard(ev, `.flag`)}></i>
            </div>
          </code></pre></h3></div>
          <div>
            如果你不知道這是什麼，可以參考
            <a href="https://iscoj.fg.tp.edu.tw/problems/4548" target="_blank" rel="noreferrer"><u>這裡</u></a>
          </div>
        </div>
      ) : (
        <div className="container d-flex flex-column align-items-center" style={{ fontSize: "1.2em" }}>
          <h2 className="mt-3 mb-4">這裡什麼都沒有？</h2>
          <div>
            如果你迷路了，可以回到
            <a href="/#/"><u>首頁</u></a>
          </div>
        </div>
      )}
    </section>
  </>)
}
