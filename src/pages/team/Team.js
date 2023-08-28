import Placeholder from "../../utils/Placeholder";
import "./Team.scss";
import Person from "./components/Person";

const BIG_NUMBER = "702979273748788561023828811632351765619418948204951716751044859391766269368417321919644936546061555949748712368781837277474634386402739118846583336337409363900865145594901041246645007199701717682294346964373698129456438546974895533606498957350545832328822294619399692278455262677156168521453671056689920172508533965738965776865773493799207379975906523643632030667992549526575726490217019336849105209266570856929710749483766339143690775407360908876679537050518650063688496786612362800231159815021852348938112947088118678895212639723353322971464522519415278509139608178459623135858561642681375378649993609916088857044885371359176262330047471990021291305961537286123217309528106262800249359576151834525163980064241960106138688756979662768735425368971367758215635783919275006972684312967333219427914808733022808966392989004913181682388838421646536264059803755258490775930855944613760430345879936328260776197273459692909323539077478614534088537502503803233941869002613478333268861721561220521991447559265604693470416474715326202780671526614137008595862618877231367641294457955994930586773196867172422446111564270457526946306317811584571392287543486005773380446187469510215292589111006438756458781648770050294171508655742716072153351946773889761554571968018125177125174760771196165927659922851601398501233834044825534552406485559380063201254686606005563001130030104365934523061909623343181912714637523625885723065775302054126813534059811972779461353200373503409446676099840440743823444770374964508867267345343203118298108532764115480073686373157276194373127894846041616661712482403271032950371289231851877623552279164147958451508850501208440907527029199188694281279980724221338019868720040353053898971061770257377492597505130740826683549121909708212742713649245878255704147406938172379181900575836057029729265870386237447910610481828904113864779086903420491786086040411369478482707097933440540064723271248161532362985248103112419716549790338590707595044318140376317549911070671513410960937987053882932994534631832954355575085969907033551391003675238403600979317232391983227260453339997398309511027861889157686989412741522784918669820741662171384098605405816227272845739385631850926669596020723363559106667584527091246073521329099386677848729962177976264110553479157982064223790453598800263074185608195268493017982137017065549620396283318273888501737943";

function Up(props) {
  return (<sup><small>{props.children}</small></sup>)
}

export default function Team() {
  function setAnchorHeightBy(selector) {
    let anchorElement = document.querySelector(".team-section-anchor");
    let referenceElement = document.querySelector(selector);
    if (!anchorElement || !referenceElement) return;

    anchorElement.style["height"] 
      = referenceElement.getBoundingClientRect().height + "px";
  }

  function onSwitch() {
    function setClass(selector, method, className) {
      document.querySelectorAll(selector).forEach(element => {
        element.classList[method](className);
      });
    }

    // let    addClass = (selector, className) => setClass(selector, "add",    className);
    // let removeClass = (selector, className) => setClass(selector, "remove", className);

    let forceClass = (selector, className, exist) => 
      setClass(selector, exist ? "add" : "remove", className);

    let isFgisc = document.querySelector("input#is-fgisc").checked;

    forceClass("#team-ckeisc, #team-fgisc", "shift-left", isFgisc);
    // forceClass("#team-ckeisc", "no-height", isFgisc);

    setAnchorHeightBy(isFgisc ? "#team-fgisc" : "#team-ckeisc");
  }

  function onAnchorAppear() {
    onSwitch();
    window.addEventListener("resize", onSwitch);
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
    <div className="team-section-anchor" onLoad={onAnchorAppear}>
      <section id="team-ckeisc">
        <div className="container d-flex flex-column align-items-center">
          <Person
            role="社長"
            name="水獺"
            tags="會考 36 分大電神, 吉他人, 真心話大冒險追到女友"
            description={Placeholder()}
            imgSrc="/images/team/ckeisc/water_lai.png"
          />
          <Person
            role="副社長"
            name="柴柴"
            tags="柴犬, 腳受傷, 阿貝"
            description={Placeholder()}
            imgSrc="/images/team/ckeisc/a_bei.png"
          />
          <Person
            role="副社長"
            name="Cc"
            tags="Fifa 狂人, 說話超直白, 奇怪冷知識"
            description={Placeholder()}
            imgSrc="/images/team/ckeisc/ci_ci.png"
          />
          <Person
            role="學術長"
            name={<span title={BIG_NUMBER}>807<Up>807</Up></span>}
            tags="好毒瘤, 椒麻雞器人, 上機考破臺"
            description={Placeholder()}
            imgSrc="/images/team/ckeisc/big_number.png"
          />
          <Person
            role="學術"
            name="世宗"
            tags="免修仔, 新竹競走代表隊, 團購訂單"
            description={Placeholder()}
            imgSrc="/images/team/ckeisc/little_tsai.png"
          />
          <Person
            role="學術"
            name="佑佑"
            tags="甲甲, 米哈遊, 雲玩家"
            description={Placeholder()}
            imgSrc="/images/team/ckeisc/yo_yo.png"
          />
          <Person
            role="學術"
            name="黑黑"
            tags="嘿黑黑, 阿宅"
            description={Placeholder()}
            imgSrc="/images/team/ckeisc/black_black.png"
          />
          <Person
            role="學術"
            name="YK"
            tags="說話的藝術, 善用工具, 摩根勒菲"
            description={Placeholder()}
            imgSrc="/images/team/ckeisc/mo_gain.png"
          />
          <Person
            role="學術"
            name="Jimmy"
            tags="AI 大佬, Jimmy Face, Jimmy Flower"
            description={Placeholder()}
            imgSrc="/images/team/ckeisc/jimmy_flower.png"
          />
          <Person
            role="學術 & 網管"
            name="晴"
            tags="晴鏡之好, 表符狂人, 我哪有差, JavaScript, 2000 行 C++, Rickroll 專家"
            description={Placeholder()}
            imgSrc="/images/team/ckeisc/star_huey.png"
          />
          <Person
            role="網管"
            name="六哥"
            tags="陳亮延, 吉他人, 偽德文班"
            description={Placeholder()}
            imgSrc="/images/team/ckeisc/six_bro.png"
          />
          <Person
            role="美宣"
            name="Secant"
            tags="超強美宣, 正割函數, 悠遊卡加值機"
            description={Placeholder()}
            imgSrc="/images/team/ckeisc/triangle_math.png"
          />
          <Person
            role="美宣 & 公關"
            name="李曄"
            tags="迷因人, 強悍的臂力, 活動道具破壞者"
            description={Placeholder()}
            imgSrc="/images/team/ckeisc/lee_ya.png"
          />
          <Person
            role="公關"
            name="小毅"
            tags="美食社, 大暖男"
            description={Placeholder()}
            imgSrc="/images/team/ckeisc/little_yee.png"
          />
          <Person
            role="總務"
            name="准哥"
            tags="專情男人, 打地鼠網頁遊戲, 皮卡丘打排球"
            description={Placeholder()}
            imgSrc="/images/team/ckeisc/volleyball_winner.png"
          />
          <Person
            role="衛生"
            name="無尾熊"
            tags="爆肝王, 咖啡因成癮, 迷因梗大師"
            description={Placeholder()}
            imgSrc="/images/team/ckeisc/no_tail.png"
          />
          <Person
            role="外務"
            name="志摩"
            tags="隱性電電, 醜照大師"
            description={Placeholder()}
            imgSrc="/images/team/ckeisc/j_mo.png"
          />
        </div>
      </section>
      <section id="team-fgisc">
        <div className="container">
          <Person
            role="社長"
            name="鈉粒"
            tags="瘋癲, 超大貓派, 熱情"
            description={Placeholder()}
            imgSrc="/images/team/fgisc/na_li.jpeg"
          />
          <Person
            role="副社長"
            name="七芒星"
            tags="溫柔學姊 ⊙﹏⊙, 周邊, 水巷茶弄"
            description={Placeholder()}
            imgSrc="/images/team/fgisc/mitis_sister.jpg"
          />
          <Person
            role="學術長"
            name="企鵝"
            tags="企鵝為甚麼不會飛, python大師, 超級冷靜"
            description={Placeholder()}
            imgSrc="/images/team/fgisc/chi_goose.png"
          />
          <Person
            role="學術"
            name="小卡"
            tags="食研社社長, 氣質, 抹茶！手搖飲！"
            description={Placeholder()}
            imgSrc="/images/team/fgisc/little_ca.jpg"
          />
          <Person
            role="學術"
            name="沛沛"
            tags="武俠粉, 文靜, 去自習室不預約"
            description={Placeholder()}
            imgSrc="/images/team/fgisc/pay_pay.jpg"
          />
          <Person
            role="學術 & 文書"
            name="月"
            tags="時瘋時靜, 街舞, CriminalzCrew/LesTwins"
            description={Placeholder()}
            imgSrc="/images/team/fgisc/moon_g.jpg"
          />
          <Person
            role="文書長"
            name="鏡"
            tags="晴鏡之好, 畫畫大神, 秒回"
            description={Placeholder()}
            imgSrc="/images/team/fgisc/little_mirror.jpeg"
          />
          <Person
            role="文書"
            name="烤企鵝"
            tags="改名, 蒸煮炒炸企鵝, 本名難唸"
            description={Placeholder()}
            imgSrc="/images/team/fgisc/fried_pen.jpg"
          />
          <Person
            role="公關長"
            name="芸"
            tags="超瘦, 大吃貨, 咪"
            description={Placeholder()}
            imgSrc="/images/team/fgisc/grass_cloud.jpg"
          />
          <Person
            role="公關"
            name="鳳梨"
            tags="傳說成癮者, 滷肉飯, 社牛"
            description={Placeholder()}
            imgSrc="/images/team/fgisc/air_pineapple.jpeg"
          />
          <Person
            role="總務"
            name="祖先"
            tags="霸氣的綽號, 不吃水果, 運動健將"
            description={Placeholder()}
            imgSrc="/images/team/fgisc/group_primis.png"
          />
        </div>
      </section>
    </div>
  </>);
}