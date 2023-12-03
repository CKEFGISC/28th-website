import SectionTitle from "../../../utils/SectionTitle";
import EventIntro from "../components/EventIntro";

export default function Planning() {
  return (
    <section id="planning" className="events-page-section">
      <div className="container">
        <SectionTitle>不定期與暫緩中活動</SectionTitle>
        <EventIntro
          imgSrc={null}
          imgText="2023 聯合幹訓"
          title="幹訓"
          time="七月"
          description="幹部訓練。於七月舉辦，不過這個活動的舉辦是根據大執政屆三屆的學長姊的意願來舉辦。分為學術幹訓及活動幹訓，由學長姐帶著新上任的幹部們體驗幹部生活，增進彼此的感情。"
        />
        <EventIntro
          imgSrc={null}
          imgText="2023 聯合社友會"
          title="社友會"
          time="未定"
          description="建國中學電子計算機研習社社慶每三年舉辦一次，邀請大學長姐們回到社團，與學弟妹們互相認識，重溫高中兩年的社團時光。"
        />
      </div>
    </section>
  );
}