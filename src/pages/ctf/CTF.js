import { useParams } from "react-router-dom";
import $ from "jquery";

import "./CTF.scss";

export default function CTF() {
  const { id } = useParams();

  function getFlagById() {
    switch (id) {
      case "lIA0zmzYSbgSlBUzwjo7hr5y": // footer
        return "Ck3F6i$C-Ma2E024-[0]{lOL-FlaG5-4rE-h4RD-7o-fiNd-R!ght}";

      case "chRDQdoVAx4J3sEYt7qPTICe": // bclai
        return "Ck3F6i$C-Ma2E024-[1]{MInEcrAF7-iS-a-c0o1-6AMe-t0-pl@y}";

      case "aiDWsN87hztRkXrKDW1RKZts": // algorithm title
        return "Ck3F6i$C-Ma2E024-[2]{whY-aRE-y0U-$O-d1AN-?-1-Io5E-4lL}";

      case "wbCHG99tMIHxQGMRovgnJ8lI": // fgisc star
        return "Ck3F6i$C-Ma2E024-[3]{h3Lp-OuR-c1u8-6R0W-!t'$-aLl-ON-u}";

      case "IBWKIRrBsCoDkNuXE99MvG5j": // museum title bar
        return "Ck3F6i$C-Ma2E024-[4]{Do-U-Kn0w-WH0-cODEd-th3-wEB$!tE$}";

      case "fAWd2Lwy5A8k1SERUPeNk4qq": // spring journey
        return "Ck3F6i$C-Ma2E024-[5]{iT's-nOt-$1mpL3-to-h0st-an-eV3n7}";

      case "7NhfAxSmXieV6B9ofXHsI2zV": // site map section title
        return "Ck3F6i$C-Ma2E024-[6]{s1T3-M@P-!$-us3le5s-JU57-1iKE-ME}";

      case "i4eG2HliYKoCtGlUXvw0SPcP": // cloudo
        return "Ck3F6i$C-Ma2E024-[7]{d0N't-KnOW-@NyTH1ng-5o-doN.T-4$k}";

      case "38z3z6iMwv2OvM2CEeBeZJeK": // club friend news
        return "Ck3F6i$C-Ma2E024-[8]{h3y-U-D0n't-Ev3n-caRE-48OUt-nEw$}";
        
      case "8LtypldESoQjkZ1OMjp0AMfG": // intro "28"
        return "Ck3F6i$C-Ma2E024-[9]{WaT-h0w-i-7HoU6HT-lt$-ImPoSsIBle}";
        
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
