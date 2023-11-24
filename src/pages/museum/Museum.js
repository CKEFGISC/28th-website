import SectionTitle from "../../utils/SectionTitle";
import "./Museum.scss";

function Up(props) {
  return (<sup><small>{props.children}</small></sup>)
}

function MuseumItem(props) {
  return (
    <div className="museum-item">
      <img src={props.imgSrc} alt={props.imgAlt || ""} width="420px"></img>
      <div className="vertical-line"></div>
      <div>
        {props.children}
      </div>
    </div>
  )
}

function TitleLink(props) {
  return (
    <a href={props.url} target="_blank">
      <h4>{props.children}&nbsp;&nbsp;<i class="fa-solid fa-arrow-up-right-from-square fa-xs"></i></h4>
    </a>
  )
}

export default function Museum() {
  return (<>
    <section id="title-bar">歷屆博物館</section>
    <section id="museum">
      <SectionTitle>歷屆社網</SectionTitle>
      <div className="container">
        <MuseumItem imgSrc="/images/museum/27th_website.png" alt="27th website">
          <TitleLink url="https://27th.ckefgisc.org/">27<Up>th</Up> 社網</TitleLink>
          <p>
            建北電資以往皆有架設網站作為招生及宣傳用途。但是自從建電社辦的伺服器被學校沒收之後，一直以來都找不到一個良好的網站架設環境，也沒有一個地方讓學術們統一放置教材供學弟妹使用。
          </p>
          <p>
            因此，在一三接幹了之後，一二學術長檸檬便一直希望繼任的鹽亞倫可以將他們沒有做出的社網完成。
            於是鹽亞倫便找了溫室菜以及北資學術長嗯嗯，嘗試從頭寫出一個網站，並且透過 Github Pages 進行架設。
          </p>
        </MuseumItem>
        <MuseumItem imgSrc="/images/museum/28th_website.png" alt="28th website">
          <TitleLink url="/">28<Up>th</Up> 社網</TitleLink>
          <p>
            鹽亞倫大電神架好了 27<Up>th</Up> 社網，好強。接著換 28<Up>th</Up> 上幹了，某晴星星決定重頭寫自己的社網。
          </p>
          <p>
            雖然有學長姊的範本可以借鑑，不過因為他是笨，花了大半個暑假也沒有什麼進度。
            不過在某一天意外學會了 <a href="https://react.dev/" target="_blank">React</a> 之後，事情變得不同了。
            有了進階網頁框架的強大功能，晴只需要把六哥寫好的前端網頁做成模板整理，接上 Router！於是 28<Up>th</Up> 社網就這麼誕生了……
          </p>
        </MuseumItem>
        <SectionTitle>其他網站</SectionTitle>
        <MuseumItem imgSrc="/images/museum/ckeisc_history_website.png" alt="History of CKEISC website">
          <TitleLink url="https://history.ckeisc.org/">建電社史追溯網</TitleLink>
          <p>
            建國中學電子計算機研習社創社至今已過了43個年頭，今日的電研社在建中仍占有一席之地。然而，我們的社史已經在過去二十年間顛沛流離的社辦交換中遺失了，可憐的電研社至 2022 年前都沒有留下什麼整理過的社團歷史。
          </p>
          <p>
            直到 2023 年，終於在建電中出現了願意整理這些資料的一群人，開始挖掘往年的資料。透過學長姐的幫助，終於在雜亂的資料中整理出頭緒，建電的歷史正重新被寫下。
          </p>
        </MuseumItem>
        <MuseumItem imgSrc="/images/museum/iscoj.png" alt="History of CKEISC website">
          <TitleLink url="https://iscoj.fg.tp.edu.tw/">ISCOJ</TitleLink>
          <p>
            建北電資的社員非常喜歡寫演算法題目，理所當然地我們有自己的線上評測系統，稱作 ISCOJ。不過 <a href="https://fgiscoj.fg.tp.edu.tw/" target="_blank">舊的 OJ</a> 實在太難用了，於是今年 AaW 和世宗架好了新的 OJ。
          </p>
          <p>
            此 OJ 架設於北一女的伺服器。因為使用 <a href="https://tioj.ck.tp.edu.tw/" target="_blank">TIOJ</a> 模板，外觀不是特別漂亮，可能還有改進的空間……
          </p>
        </MuseumItem>
      </div>
    </section>
  </>);
}
