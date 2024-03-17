import $ from "jquery";
import React from "react";

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
            tags="電子吉他研習社社長, 萬年班長"
            description={`
建電社長水獺透過了真心話找到了雙向暗戀的現任女友，卻時常嘲諷其他放閃的情侶。
這是非常不好的行為，請學弟妹們不要學習。

除此以外，他是一個超級吉他人。
社展要彈吉他、幹見要彈吉他、開籌會要彈吉他、幹訓要彈吉他、迎新要彈吉他，還常常窩社辦刷吉他。
吉他明明很強卻一直裝弱。其他的成就，除了有類排二的學期成績，還是個運動神經發達的動物。

他曾經在小巨蛋指導溜冰新手。
            `}
            imgSrc="/images/team/ckeisc/water_lai.png"
            imgSrc2="/images/team/ckeisc/water_lai_2.png"
          />
          <Person
            role="副社長"
            name="柴柴"
            tags="阿貝, 有品建中人"
            description={`
可愛小狗狗是建電的副社長，不過他已經有主人了，目前不接受領養喔！

姊姊是北資前任社長，相信在姊姊的監督下柴柴一定能順利地帶領建北電資走向更好的方向。

對了，他也是數資班的一員，明明有還不錯的面貌，卻常常跟同學進行不可言喻的行為，被拍了很多醜照。
            `}
            imgSrc="/images/team/ckeisc/a_bei.png"
            imgSrc2="/images/team/ckeisc/a_bei_2.png"
          />
          <Person
            role="副社長"
            name="Cc"
            tags="泰拳, 使節團, 討海人"
            description={`
Cc 從國中就屬於瘋癲類型，桌子曾經亂到被班導倒出來。

上了高中他還是保持著初心，在路上抓人玩憤怒蔬菜。貴為建電副社長，他卻同時能兼顧使節團的身分，是個時間管理大師。

根據北資社長鈉粒的說法， Cc 這位生培人在找教授時一眼相中了研究海洋與塑膠微粒的實驗室，現在他的實驗充滿了各種藤壺、螺與蛤蜊。

聽說他還有在打泰拳，不妨跟他切磋一下？
            `}
            imgSrc="/images/team/ckeisc/ci_ci.png"
            imgSrc2="/images/team/ckeisc/ci_ci_2.png"
          />
          <Person
            role="學術長"
            name={<span title={BIG_NUMBER}>807<Up>807</Up></span>}
            tags="vim, 椒麻機器人, 阿根廷隊長"
            description={`
從來沒出席過建北電資活動的 807，因為上機考破台就直接當上了學術長。

身為程式菜雞的我們只能在一旁向他膜拜啊！他的程式語法毒瘤程度也是驚為天人，都用逗號來取代分號，
並把 if else 都塞在同一行。隔壁社學術長詢問他的時候，他這樣回答「這東西不是很正常嗎？ 我都這樣寫耶。」

不過他也是個腦裡只有 vim 的單純男子。對了，807 這個稱號是一串你可以從他制服上看到的密碼。
            `}
            imgSrc="/images/team/ckeisc/big_number.png"
            imgSrc2="/images/team/ckeisc/big_number_2.png"
          />
          <Person
            role="學術"
            name="世宗"
            tags="免修仔, 競走隊, 眼睛發光代表人"
            description={`
為了念上理想的學校，直接從新竹跑來台北租了間房子。

世宗原本的綽號是小蔡（對，不是小菜，沒有打錯），但他不喜歡這個名字的副作用。

考了很多科的免修，他本人的講法是「我是有考免修，但有沒有通過是另一回事」。
但他還是通過了一些，只能 OrzCJTsai！世宗還憑藉著一己之力架設了新的 ISCOJ，讓網管們覺得自己的位子岌岌可危。

然後他可能住在社辦，幾乎天天都要來社辦報到一下。
            `}
            imgSrc="/images/team/ckeisc/little_tsai.png"
            imgSrc2="/images/team/ckeisc/little_tsai_2.png"
          />
          <Person
            role="學術"
            name="佑佑"
            tags="原神, 女裝, 甲甲"
            description={`
「大起大落」是佑佑的代名詞。
他emo的時候會陷入極致暗沉模式，壓力大的時候會歇斯底里的發狂；心情好的時候會心花怒放，發瘋後冷靜下來時會進入「微醺模式」，接著就開始胡言亂語。

但是他最可怕的不是情緒起伏，而是一言不合就直接坐到你大腿上開始搖，相當自動自發，十分推薦購買！

他常常湊到其他幹部旁邊說，「欸我跟你說喔，………………，好我忘記我要說什麼了」

還有一個重要消息，聽說他很會照顧人，整個電研都是他的後宮（？
`}
            imgSrc="/images/team/ckeisc/yo_yo.png"
            imgSrc2="/images/team/ckeisc/yo_yo_2.png"
          />
          <Person
            role="學術"
            name="黑黑"
            tags="甲甲, 嘿嘿嘿"
            description={`
第一印象感覺不太會說話的黑黑其實有不為人知的一面。
蘿莉控跟油宅是什麼意思相信不用多說了吧，看起來是真的黑。

他家離建中真的很近，據說這是他來讀建中的原因。

這位賴姓學術上完一堂社課後，下禮拜就有學弟在問上硬體的帥學長叫什麼，看來他是來這邊累積粉絲的。

因為綽號，嘿嘿嘿這個怪怪的語助詞顯然已經變成他的代名詞。嘿嘿嘿嘿嘿嘿嘿嘿……
            `}
            imgSrc="/images/team/ckeisc/black_black.png"
          />
          <Person
            role="學術"
            name="YK"
            tags="說話的藝術, 生錯時代, ChatGPT"
            description={`
據班上同學透漏，邱姓學術是一名歷史愛好者，特別喜歡某些 ╳ ╳ 主義。

除此之外，他還曾經在數學課上寫扣。
除了說明他對程式的熱愛，更證明了他的數學已經電爛我們了，不需要聽老師講課～

還有，他，真的，真的，超愛裝弱，在所有介紹他的文章中都可以看到他裝弱的事蹟。
稱呼別人時一定用「您」，自稱「在下」，被禁止的話他會很痛苦。
            `}
            imgSrc="/images/team/ckeisc/mo_gain.png"
          />
          <Person
            role="學術"
            name="Jimmy"
            tags="AI 大佬, Alcoholic, Jimmy Flower"
            description={`
原本英文名字是Jim，因為國中同學叫 Jimmy 就開始用這個名字了。
Jimmy 似乎每天都擺著 Jimmy Face 😑 的表情。

不只這樣，他還擁有一張大眾臉，拐個彎都可以遇到長得很像的人。
雖然進來建電的時間不長，卻馬上就混入這個團體，看來又是一個社交牛逼症。

雖然 Python 是他的專長，但他最近正學習 C++，也許 Jimmy 馬上就要成為雙技能學術了！
除了資訊，他更是球類運動與腳踏車的愛好者，常常抱怨建電前任社長的失約。
            `}
            imgSrc="/images/team/ckeisc/jimmy_flower.png"
          />
          <Person
            role="學術 & 網管"
            name="晴"
            tags="晴鏡之好, 我哪有差, 氣氛破壞者"
            description={`
身為一個鋼琴家，晴對樂譜有自己的執著。
看到社歌亂糟糟的譜就要重新打一遍，還有合唱譜他也要把鋼琴的部分提取出來，重做一份。
可是他鋼琴的即興真的很厲害！有機會記得請他演奏馬力歐組曲跟永遠不會放棄你。

程式語言上，晴獨愛 JavaScript，C++、Python什麼的在他眼裡都是毒瘤！（晴：我哪有這樣說 owo）

平時他很愛在別人的訊息下加表情符號，似乎跟北資的某人有神似之處。
            `}
            imgSrc="/images/team/ckeisc/star_huey.png"
            imgSrc2="/images/team/ckeisc/star_huey_2.png"
          />
          <Person
            role="網管"
            name="六哥"
            tags="陳亮延, 吉他人"
            description={`
過度正經，冷靜少言，也許你會認為這樣子的六哥不好相處，那一定是你跟他不夠熟。
從他跟 Secant 在 228 公園做出奇怪的事，就可以知道他也是一個很瘋癲的人。

除此之外，六哥更是 an enthusiast for 火車，你甚至可以發現到他的筆電上就有月台上才會出現的那種告示牌的貼紙，
由此可見他也是一位專情的男人，因為自盤古開天闢地以來就不曾看到他往筆電上貼其他貼紙或是將其撕下。
            `}
            imgSrc="/images/team/ckeisc/six_bro.png"
            imgSrc2="/images/team/ckeisc/six_bro_2.png"
          />
          <Person
            role="美宣"
            name="Secant"
            tags="正割, 練字"
            description={`
Secant 是標準建中猴的代表，例如他曾經把北一女點餐機的 Windows 桌面叫出來，然後，你就會聽到他大喊「他這畫面回不去了啦」。
雖然如此，可是他其實很有氣質（？？？）會寫很漂亮的手寫字。雖然說他是因為不會 Coding 才來考美宣，但他的技術完全地吸引了學長，直接上幹。
不過這個人偶爾也滿糊塗的，例如在做狗牌的時候忘記要買繩子。
            `}
            imgSrc="/images/team/ckeisc/triangle_math.png"
          />
          <Person
            role="美宣 & 公關"
            name="李曄"
            tags="迷因, 蛋捲冰淇淋者"
            description={`
李曄的美宣能力早就在春遊嶄露頭角，一開籌會就志願要當文書組的負責人。

別看他 180 公分、高大的身形，其實他有一個童心未泯的靈魂。
除了會用「汪汪汪」來傳訊息，據說六年級時他在班上玩紙飛機玩到被罰做一個報告，折了至少十種出來。
不過身形巨大也不是沒有好處，他可以肆意的破壞關主的道具（？）

李日華可能真的是猴子的轉世。
            `}
            imgSrc="/images/team/ckeisc/lee_ya.png"
          />
          <Person
            role="公關"
            name="小毅"
            tags="巴西柔術, 大暖男, 全能"
            description={`
美食副社下凡到建電擔任公關！小小毅在小小時候真的長的很漂亮、很清純、很可愛，常常被誤認為女生跟飲水機。

沒有啦，那是身高跟飲水機差不多（這個怎麼好像攻擊性不高，侮辱性極強）彭公關還是數學小王子。
從高一上就超級認真算數學，很多課他都自主免修算數學，據聞這個名字是西文老師給的封號。
而且，他高二第一次段考拿到全電研最高的數學分數，真的輸爛！

數學又強又會做菜又長得帥，大家可排隊以加入他的粉絲團。
            `}
            imgSrc="/images/team/ckeisc/little_yee.png"
          />
          <Person
            role="總務"
            name="准哥"
            tags="傻呆萌, 敷衍大師"
            description={`
身為建電小太陽的准哥，常常會關心每位社員的狀況，也在大家之中扮演潤滑劑的角色。

他對感情非常專一，一生中的摯愛就是皮卡丘！

不管是剛認識他，還是很熟的朋友，都會覺得他是一隻可愛的小動物。
另外，一般來說是不推薦開他頭髮跟眼睛的玩笑，他真的會走心，不要這樣欺負小動物啦！

拍照時的准哥很單純，只有「讚」或「耶」兩種經典手勢，但不管是哪個都很可愛啦。
大正小道消息指出，准哥好像是佑佑的正宮。
            `}
            imgSrc="/images/team/ckeisc/volleyball_winner.png"
          />
          <Person
            role="衛生"
            name="無尾熊"
            tags="角落生物, 室內派"
            description={`
無尾熊平常是很溫馴的動物，但是兇起來也是很可怕。
在擔任迎新執秘的時候，除了自己的照片，他默認建電其他人都可以用形象毀壞照。

剛開始認識無尾熊會覺得他有一點點的邊緣，但是跟他相處久了以後，會發現他其實也是一個處在瘋癲狀態的人才，甚至還有一點黃黃的（？）

雖然在建電有很多夜貓子，但他是重度咖啡因成癮患者，也許這是他為什麼身材……
            `}
            imgSrc="/images/team/ckeisc/no_tail.png"
          />
          <Person
            role="外務"
            name="志摩"
            tags="坐著睡大師, 9ay"
            description={`
志摩這個名字的由來，據說是因為他國中時跟徐志摩一樣風流。
相信各位統計圖表都有學好，知道「次數」的觀念，
可以知道的是，志摩女朋友的數量跟次數是不相等的。

然而，自從上了高中，志摩開始對男同學下手，時不時在上課時拍打同學的屁股，由此不難看出他性向可能變了 🙂

他的生存之道就一個字「懶」，不管是什麼時候基本都可以看到他在睡覺，而問他問題得到的回覆大多數都是我懶，真心覺得樹懶這個綽號可能比較適合他。
            `}
            imgSrc="/images/team/ckeisc/j_mo.png"
            onClick={() => window.location.assign("/#/ctf/chRDQdoVAx4J3sEYt7qPTICe/")}
          />
        </TeamContainer>
      </section>
      <section id="team-fgisc" className="team-section">
        <TeamContainer>
          <Person
            role="社長"
            name="鈉粒"
            tags="瘋癲, 超大貓派, 熱情"
            description={`
我們的社長是一位極度 "活潑" 的人，她一興奮起來語言內容就會變成「喵喵喵嗚嗚嗚嗚嗚嘿嘿嘿嘿嘿」的奇怪狀聲詞，
據她朋友說，鈉粒的瘋癲是會傳染的，跟她混久了，周圍人的心智年齡會降到七歲，迷迷濛濛的不可思議
            `}
            imgSrc="/images/team/fgisc/na_li.jpeg"
          />
          <Person
            role="副社長"
            name="七芒星"
            tags="溫柔學姊 ⊙﹏⊙, 周邊, 水巷茶弄"
            description={`
對陌生人與朋友的態度判若兩人，對前者是極為有禮貌、矜持的外交大使，請、謝謝、對不起一個都不會落，
對於後者呢？各種嫌棄、嘲笑、敏蓁式白眼，但她的朋友都知道，這代表著成功成為她的好友了。
雖然敏蓁會各種讓人自我懷疑但是當朋友需要幫忙時她也是最靠普的存在！
            `}
            imgSrc="/images/team/fgisc/mitis_sister.jpg"
          />
          <Person
            role="學術長"
            name="企鵝"
            tags="企鵝為什麼不會飛, python大師, 超級冷靜"
            description={`
根本是沉穩的代表人！

只要看到企鵝出場，不管情況多危及都能讓人冷靜下來，她也是支持行朋友，當你沮喪或迷茫時，雖然可能不行給出解決方法，
但她會拍拍你的頭跟你說加油，總是讓人感受到滿滿的溫暖。
            `}
            imgSrc="/images/team/fgisc/chi_goose.png"
          />
          <Person
            role="學術"
            name="小卡"
            tags="食研社社長, 氣質, 抹茶！手搖飲！"
            description={`
超強地社成員，她不只是學術還是食研社社長！兩個超忙幹部她都能一肩扛起

身為網頁講師，小卡也為我們寫了課程簡報索引網頁，也為社課預約系統貢獻心力，太佩服了

而且小卡還是忠實的抹茶粉！只要是跟抹茶相關她都愛！
            `}
            imgSrc="/images/team/fgisc/little_ca.jpg"
          />
          <Person
            role="學術"
            name="沛沛"
            tags="武俠粉, 文靜, 去自習室不預約"
            description={`
沛沛身為熱愛學習的超好學生，非常喜歡在段考前去自習室，這都沒什麼問題，但重點是她都不預約！
有沒有位子坐全憑運氣，可以不要這麼隨性嗎？而且聽說還會幫同學整理段考知識，實在是太善良了啦
            `}
            imgSrc="/images/team/fgisc/pay_pay.jpg"
          />
          <Person
            role="學術 & 文書"
            name="月"
            tags="時瘋時靜, 街舞, CriminalzCrew/LesTwins"
            description={`
非常會彈吉他！幹介上的照片都是他抱著吉他的圖！還是吉他社的地社成員呢！

除此之外他也很喜歡街舞，曾為了看別人跳街舞跑去北車等了一個下午

據說他還有雙重人格，上一秒可能還很安靜，下一秒就熱情地抱著你了
            `}
            imgSrc="/images/team/fgisc/moon_g.jpg"
          />
          <Person
            role="文書長"
            name="鏡"
            tags="晴鏡之好, 畫畫大神, 秒回"
            description={`
小鏡～小鏡～多麼特別的名字呀！第一次聽到我還以為這是暱稱，沒想到這是本名呢！
具她說法，她的家長希望她能成為一個能夠看清別人的人，就像一面鏡子，映照出人們最真實的一面
            `}
            imgSrc="/images/team/fgisc/little_mirror.jpeg"
          />
          <Person
            role="文書"
            name="烤企鵝"
            tags="改名, 蒸煮炒炸企鵝, 本名難唸"
            description={`
有沒有發現烤企鵝的綽號跟企鵝很像？其實原本兩位都叫「企鵝」，學姊為了區分於是出現了「謝姓企鵝」這個綽號，
但烤企鵝覺得這樣不好玩，所以他在蒸煮炒炸中選擇了烤，於是成為了烤企鵝
            `}
            imgSrc="/images/team/fgisc/fried_pen.jpg"
          />
          <Person
            role="公關長"
            name="芸"
            tags="超瘦, 大吃貨, 咪"
            description={`
她所收到的幹介投稿有半數以上都無繞著食物，看來我們的公關長是個超級護食的大吃或呢！

不只這樣，她還會自己做甜點！聽說很好吃我也要吃啦！
最最最誇張的是，湘芸小朋友都吃不胖，反而越吃越瘦，太羨慕啦
            `}
            imgSrc="/images/team/fgisc/grass_cloud.jpg"
            onClick={() => window.location.assign("/#/ctf/i4eG2HliYKoCtGlUXvw0SPcP/")}
          />
          <Person
            role="公關"
            name="鳳梨"
            tags="傳說成癮者, 滷肉飯, 社牛"
            description={`
鳳梨也是一位非常熱情的幹部，跟她聊天絕不會冷場，而且她也是一名傳說重度成癮者，
聽說她最近在努力戒傳說，但似乎沒有很成功……
似乎前陣子瘋迷到下課打、上課打、放學打、半夜上線也在打。
            `}
            imgSrc="/images/team/fgisc/air_pineapple.jpeg"
          />
          <Person
            role="總務"
            name="祖先"
            tags="霸氣的綽號, 不吃水果, 運動健將"
            description={`
一位極度挑食的同學，他竟然不吃任何水果，甚至因此自然小考不及格，因為那單元剛好在考各種植物的種子及果實形狀等等

另外，他也是一位極限運動大師，假日時經常可以聽到她去玩滑板、衝浪、滑水等，實在太酷啦！
            `}
            imgSrc="/images/team/fgisc/group_primis.png"
          />
        </TeamContainer>
      </section>
    </div>
  </>);
}
