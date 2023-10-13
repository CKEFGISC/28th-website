import $ from "jquery";
import React from "react";

import Placeholder from "../../utils/Placeholder";

import "./Team.scss";

import Person from "./components/Person";

// checkbox switch event need this
import { handleFadeIn } from "../../utils/Page";

const BIG_NUMBER = "702979273748788561023828811632351765619418948204951716751044859391766269368417321919644936546061555949748712368781837277474634386402739118846583336337409363900865145594901041246645007199701717682294346964373698129456438546974895533606498957350545832328822294619399692278455262677156168521453671056689920172508533965738965776865773493799207379975906523643632030667992549526575726490217019336849105209266570856929710749483766339143690775407360908876679537050518650063688496786612362800231159815021852348938112947088118678895212639723353322971464522519415278509139608178459623135858561642681375378649993609916088857044885371359176262330047471990021291305961537286123217309528106262800249359576151834525163980064241960106138688756979662768735425368971367758215635783919275006972684312967333219427914808733022808966392989004913181682388838421646536264059803755258490775930855944613760430345879936328260776197273459692909323539077478614534088537502503803233941869002613478333268861721561220521991447559265604693470416474715326202780671526614137008595862618877231367641294457955994930586773196867172422446111564270457526946306317811584571392287543486005773380446187469510215292589111006438756458781648770050294171508655742716072153351946773889761554571968018125177125174760771196165927659922851601398501233834044825534552406485559380063201254686606005563001130030104365934523061909623343181912714637523625885723065775302054126813534059811972779461353200373503409446676099840440743823444770374964508867267345343203118298108532764115480073686373157276194373127894846041616661712482403271032950371289231851877623552279164147958451508850501208440907527029199188694281279980724221338019868720040353053898971061770257377492597505130740826683549121909708212742713649245878255704147406938172379181900575836057029729265870386237447910610481828904113864779086903420491786086040411369478482707097933440540064723271248161532362985248103112419716549790338590707595044318140376317549911070671513410960937987053882932994534631832954355575085969907033551391003675238403600979317232391983227260453339997398309511027861889157686989412741522784918669820741662171384098605405816227272845739385631850926669596020723363559106667584527091246073521329099386677848729962177976264110553479157982064223790453598800263074185608195268493017982137017065549620396283318273888501737943";

function Up(props) {
  return (<sup><small>{props.children}</small></sup>)
}

function TeamContainer(props) {
  return (
    <div className="container d-flex flex-column align-items-center">{props.children}</div>
  );
}

function setAnchorHeightBy(selector) {
  let anchorElement = $(".team-section-anchor");
  let referenceElement = $(selector);

  anchorElement.css("height", referenceElement.height());
}

function onSwitch() {
  function setClass(selector, method, className) {
    $(selector)[method](className);
  }

  let forceClass = (selector, className, exist) =>
    setClass(selector, exist ? "addClass" : "removeClass", className);

  let isFgisc = $("input#is-fgisc").is(":checked");

  forceClass("#team-ckeisc, #team-fgisc", "shift-left", isFgisc);

  forceClass("#team-ckeisc", "inactive",  isFgisc);
  forceClass("#team-fgisc",  "inactive", !isFgisc);

  setAnchorHeightBy(isFgisc ? "#team-fgisc" : "#team-ckeisc");

  handleFadeIn();
}

function onAnchorAppear() {
  onSwitch();
  window.addEventListener("resize", onSwitch);
}

export default function Team() {
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
      <section id="team-ckeisc" className="team-section active">
        <TeamContainer>
          <Person
            role="社長"
            name="水獺"
            tags="會考 36 分大電神, 吉他人, 真心話大冒險追到女友"
            description={`
「那你很牛逼喔」── 水獺

水獺是我們的&nbsp;<s>&nbsp;獨裁&nbsp;</s>&nbsp;社長  
曾因拒絕使用晴建好的 Discord 伺服器而使用他自己到處有問題的伺服器，然後又不給其他幹部管理員權限，導致晴打算擺爛叫水獺自己去寫社網  
不過你可以很明顯地知道，社網還是架好了，所以這證明我們社長還是很棒的啦～
            `}
            imgSrc="/images/team/ckeisc/water_lai.png"
            imgSrc2="/images/team/ckeisc/water_lai_2.png"
          />
          <Person
            role="副社長"
            name="柴柴"
            tags="柴犬, 腳受傷, 阿貝, 有品建中人"
            description={`
「離開！離開！不要偷看！」── <s>&nbsp;阿貝&nbsp;</s>&nbsp;*柴柴*

柴柴不知為何總是腿受傷，有點慘  
暑訓時 RPG 的角色「阿貝」因為台詞很有趣，所以被大家記住了  
真正的綽號是「柴柴」，不難猜出是因為他特別喜歡柴犬
            `}
            imgSrc="/images/team/ckeisc/a_bei.png"
          />
          <Person
            role="副社長"
            name="Cc"
            tags="Fifa 狂人, 說話超直白, 奇怪冷知識"
            description={`
「ㄏㄏ」── Cc

為什麼執秘開會的時候還在玩足球遊戲，太神奇了。Cc 是個 Fifa 狂人，常常會看到他在電腦上玩 Fifa 遊戲  
他本人特別有搞笑功力，但自己卻可以很正經  
我可沒說你可以找他挑戰「憤怒蔬菜」，現在還沒有人能贏過 Cc 喔
            `}
            imgSrc="/images/team/ckeisc/ci_ci.png"
          />
          <Person
            role="學術長"
            name={<span title={BIG_NUMBER}>807<Up>807</Up></span>}
            tags="好毒瘤, 椒麻雞器人, 上機考破臺"
            description={`
「為什麼不用 Vim」── 807

Orz 學術長好電！可是他常常在裝弱，曾寫出「椒麻雞器人」用來膜拜別人，但我覺得得先膜拜他自己  
寫 Code 的方式非常的毒，而且還經常會搞一些很奇怪的東西，例如把 VSCode 變透明然後在裡面用 Vim 之類的
            `}
            imgSrc="/images/team/ckeisc/big_number.png"
          />
          <Person
            role="學術"
            name="世宗"
            tags="免修仔, 新竹競走代表隊, 團購訂單"
            description={`
「我是有考免修，但有沒有通過是另一回事」── 世宗

那麼新的 OJ 是他架的，特別強……  
我推測因為世宗每科都免修，所以把我不會的東西都學會了
順帶一提，世宗是明世宗，世宗大王 🛐
            `}
            imgSrc="/images/team/ckeisc/little_tsai.png"
            imgSrc2="/images/team/ckeisc/little_tsai_2.png"
          />
          <Person
            role="學術"
            name="佑佑"
            tags="甲甲, 米哈遊"
            description={`
「我是可愛的女孩子」── 佑佑

如你所見，這個人是甲甲！除了是甲甲以外，也是個社交牛逼，常常會跑去跟學弟妹聊天  
身邊總是帶著一隻名為「短短」，沒有脖子的長頸鹿
`}
            imgSrc="/images/team/ckeisc/yo_yo.png"
            imgSrc2="/images/team/ckeisc/yo_yo_2.png"
          />
          <Person
            role="學術"
            name="黑黑"
            tags="嘿黑黑, 阿宅"
            description={`
「不知道為什麼他們看到我都一直在那邊嘿嘿嘿」── 黑黑

上完一堂社課後，下禮拜就有學弟在問上硬體的帥學長叫什麼？  
看來是來累積粉絲的
            `}
            imgSrc="/images/team/ckeisc/black_black.png"
          />
          <Person
            role="學術"
            name="YK"
            tags="說話的藝術, 善用工具, 摩根勒菲"
            description={`
「我是建電最弱兼最邊緣」── YK (Obviously lying)

顯然的沒有比某晴弱，YK 是個超帥的人  
很會當關主，講一堆很詭異的台詞還可以不笑出來
            `}
            imgSrc="/images/team/ckeisc/mo_gain.png"
          />
          <Person
            role="學術"
            name="Jimmy"
            tags="AI 大佬, Jimmy Face, Jimmy Flower"
            description={`
「我筆電就跑不了 Blender 是要怎麼備課」── Jimmy

這是 Jimmy Face: 😑  
這位電神聽說在一週內，把 AI 學會，然後做了一份超強簡報，就上幹了
            `}
            imgSrc="/images/team/ckeisc/jimmy_flower.png"
          />
          <Person
            role="學術 & 網管"
            name="晴"
            tags="晴鏡之好, 表符狂人, 我哪有差, JavaScript, 用 2000 行 C++ 輸出 Hello World, Rickroll 專家"
            description={`
「顯然是佑佑在搞」── 晴

這我  
會用 JavaScript 做任何除了寫 OJ 以外的任何事情，畢竟寫 OJ 不能用 JavaScript  
那麼寫 C++ 的時候，就會想要實做一堆 JavaScript 有的模板，所以寫一個 Hello World 會有 2000 多行，其中包括了稀疏表和線段樹模板
            `}
            imgSrc="/images/team/ckeisc/star_huey.png"
            imgSrc2="/images/team/ckeisc/star_huey_2.png"
          />
          <Person
            role="網管"
            name="六哥"
            tags="陳亮延, 吉他人, 偽德文班"
            description={`
「去寫社網！」── 六哥

常常會聽到六哥在叫晴去寫社網，畢竟前端的東西六哥已經寫得差不多了  
之前甚至還寫了建電社史網，真是超強網管  
據說放學時會在黑板寫一些莫名奇妙的東西（比如說日文五十音），重點是他其實是德文班
            `}
            imgSrc="/images/team/ckeisc/six_bro.png"
          />
          <Person
            role="美宣"
            name="Secant"
            tags="超強美宣, 正割函數, 悠遊卡加值機"
            description={`
「他這畫面回不去了啦」── Secant

幹訓的時候，每天早操前都會去玩悠遊卡加值機，把他的 Windows 桌面叫出來 XD  
不過其實 Secant&nbsp;<s>&nbsp;不看本人的話&nbsp;</s>&nbsp;超有氣質的  
尤其能寫出超級美的字 🛐
            `}
            imgSrc="/images/team/ckeisc/triangle_math.png"
          />
          <Person
            role="美宣 & 公關"
            name="李曄"
            tags="迷因人, 強悍的臂力, 活動道具破壞者"
            description={`
「社辦真的很熱欸，誰要在那裡開會啊？」── 李曄

不過開會的時候他也在滑迷因，所以應該根本沒差  
長得特別高，但有點猴，力氣特別大  
曾在活動試跑時直接把道具打壞……
            `}
            imgSrc="/images/team/ckeisc/lee_ya.png"
          />
          <Person
            role="公關"
            name="小毅"
            tags="美食社, 大暖男"
            description={`
「如果只喜歡女生那選擇不就少一半了」── 小毅

怎麼又有甲？不過小毅是個大暖男，而且同時是建中美食社副社  
又會做菜又長得帥，大家可排隊以加入他的粉絲團
            `}
            imgSrc="/images/team/ckeisc/little_yee.png"
          />
          <Person
            role="總務"
            name="准哥"
            tags="專情男人, 打地鼠網頁遊戲, 皮卡丘打排球"
            description={`
「喔你要報帳…… 但我今天沒有錢，下次一定！」── 准哥

走在路上會和佑佑牽手！？看來又有甲  
這張粉紅泡泡的照片可是他自己給我的喔
            `}
            imgSrc="/images/team/ckeisc/volleyball_winner.png"
          />
          <Person
            role="衛生"
            name="無尾熊"
            tags="爆肝王, 咖啡因成癮, 迷因梗大師"
            description={`
「蛤你說這張照片看起來像擺拍的？事實上他就是啊」── 無尾熊

// todo: i'm here
            `}
            imgSrc="/images/team/ckeisc/no_tail.png"
          />
          <Person
            role="外務"
            name="志摩"
            tags="隱性電電, 醜照大師"
            description={Placeholder()}
            imgSrc="/images/team/ckeisc/j_mo.png"
          />
        </TeamContainer>
      </section>
      <section id="team-fgisc" className="team-section">
        <TeamContainer>
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
            tags="企鵝為什麼不會飛, python大師, 超級冷靜"
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
        </TeamContainer>
      </section>
    </div>
  </>);
}