import SectionTitle from "../../../utils/SectionTitle";
import EventIntro from "../components/EventIntro";
export default function Alive() {
  return (
    <section id="alive" className="events-page-section">
      <div className="container">
        <SectionTitle>現存活動</SectionTitle>
        <EventIntro
          imgSrc="/images/events/spring.jpg"
          imgText="2023 聯合春遊"
          title="春遊"
          time="四～五月"
          description="建北電資聯合春遊，簡稱春遊。這個活動是高一學弟妹的第一個任務，除了體驗幹部生活，也能與同屆增進感情。"
          onClick={() => window.location.assign("/#/ctf/fAWd2Lwy5A8k1SERUPeNk4qq")}
        />
        <EventIntro
          imgSrc="/images/events/exhibition.jpg"
          imgText="2023 聯合社展"
          title="社展"
          time="六月"
          description="展中，我們將展現我們社團的學術力，發揮學術性社團的專長！"
        />
        <EventIntro
          imgSrc="/images/events/tea.jpg"
          imgText="2023 聯合茶會"
          title="茶會"
          time="七月"
          description="建北電資聯合交接茶會。茶會中，我們廣邀各校資訊性社團的同學來參加。這也是建北電資主要的外交活動。除了社交外，這也是正式的幹部交接儀式，新的幹部上任了，也是學長姊們幹部生涯的尾聲。歡迎大家一起來見證幹部的世代交替！"
        />
        <EventIntro
          imgSrc="/images/events/summer.png"
          imgText="2023 聯合暑訓"
          title="暑訓"
          time="八月"
          description="建北電資聯合暑訓，簡稱暑訓。這個活動是幹部接幹後辦的第一個大型活動，更是附有讓學弟妹認識我們的任務。活動內教授基本資訊技能、程式語言等，也安排許多增進感情的活動。現今英文名稱 Summer Camp 取自夏令營，代表了暑訓的可玩性。以前暑訓曾被稱為 Summer Train，更有訓練之意涵。"
        />
        <EventIntro
          imgSrc="/images/events/new.jpg"
          imgText="2023 聯合迎新"
          title="迎新"
          time="九月"
          description="加入社團，同屆們不見得有時間認識彼此，透過迎新，一定會對社團運作與身邊的朋友更了解的！這次也是學長姊認識學弟妹的一個好機會。近年來，有一說是秋遊是建北電資的正式迎新。但是考證結果認為以前的建北電資是以獨立的方式舉行迎新。"
        />
        <EventIntro
          imgSrc="/images/events/fall.jpg"
          imgText="2023 聯合秋遊"
          title="秋遊"
          time="十～十一月"
          description="建北電資聯合秋遊，簡稱秋遊。秋遊是正式社員會參加的第一個活動。這個活動由秋烤演變而成，所以固定有烤肉行程，一起來炎上吧！"
        />
        <EventIntro
          imgSrc="/images/events/winter.jpg"
          imgText="2023 聯合寒訓"
          title="寒訓"
          time="一～二月"
          description="建北電資聯合寒訓，簡稱寒訓。這將是學長姊們最後一個舉辦的大型活動，在寒訓間，會安排幾個神秘活動，到最後你一定會帶著感動的心回到溫暖的家中。"
        />
      </div>
    </section>
  );
}
