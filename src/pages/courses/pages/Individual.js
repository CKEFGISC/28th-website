import React from "react";
import $ from "jquery";

import "../Courses.scss";

import CourseDetails from "../components/CourseDetails";

import longDescriptionPath from "../descriptions/long.md";

import Loading from "../../../utils/Loading";
import Placeholder from "../../../utils/Placeholder";
import { switchPageAnimation } from "../../../utils/Page";
import Slides from "../components/Slides";
import SectionTitle from "../../../utils/SectionTitle";
import { useParams } from "react-router-dom";

function setContent(index, view, textContent, setText, setSlides) {
  var theContent = textContent.split("<%-== next ==-%>")[index];
  var 
    titles = {
      "web": "網頁",
      "python": "Python",
      "game_design": "遊戲設計",
      "blender": "Blender",
      "algorithm": "演算法",
      "js_and_ts": "JS & TS",
      "python-2": "進階 Python",
      "game_develop": "遊戲開發",
      "algorithm-2": "進階演算法"
    },
    imgSrcs = {
      "web":          "/images/courses/web.avif",
      "python":       "/images/courses/python.jpg",
      "game_design":  "/images/courses/game_design.webp",
      "blender":      "/images/courses/blender.jpg",
      "algorithm":    "/images/courses/algorithm.jpg",
      "js_and_ts":    "/images/courses/js_and_ts.jpg",
      "python-2":     "/images/courses/python-2.jpg",
      "game_develop": "/images/courses/game_develop.png",
      "algorithm-2":  "/images/courses/algorithm-2.webp"
    },
    slides = {
      "web": <>
        <h4 id="first">網頁簡介 & HTML 1</h4>
        <Slides url="https://slides.com/sixbro/desk/" />
        <h4 id="second">CSS</h4>
        <Slides url="https://slides.com/sixbro/web-2/" />
        <h4 id="third">Bootstrap 1</h4>
        <Slides url="https://slides.com/sixbro/web-3/" />
        <h4 id="fourth">Bootstrap 2 - RWD</h4>
        <Slides url="https://slides.com/sixbro/web-4/" />
        <h4 id="fifth">JavaScript</h4>
        <Slides url="https://slides.com/star_huey/web_js/" />
        <h4 id="sixth">Github Pages</h4>
        <Slides url="https://slides.com/star_huey/github_pages/" />
      </>,
      "python": <>
        <h4 id="first">Python 簡介</h4>
        <Slides url="https://slides.com/d11130110/minimal-ec3a0e/" />
        <h4 id="second">基礎語法</h4>
        <Slides url="https://slides.com/d11130110/minimal-5775aa/" />
        <h4 id="third">基礎語法 2</h4>
        <Slides url="https://slides.com/d11130110/minimal/" />
        <h4 id="fourth">Function</h4>
        <Slides url="https://slides.com/ck1110793/python_function/" />
        <h4 id="fifth">OOP & Module</h4>
        <Slides url="https://slides.com/ykchiu/python-oop/fullscreen#/python-5-oop-and-module/" />
        <h4 id="sixth">File IO</h4>
        <Slides url="https://slides.com/ck1110793/python_file_io/" />
        <h4 id="seventh">爬蟲（一）</h4>
        <Slides url="https://slides.com/ykchiu/python-7-web_crawler_part_i/" />
        <h4 id="eighth">Selenium</h4>
        <Slides url="https://slides.com/ck1110793/python_selenium/" />
        <h4 id="nineth">GUI</h4>
        <Slides url="https://slides.com/ykchiu/python-gui/" />
        <h4 id="tenth">PyAutoGUI & Turtle</h4>
        <Slides url="https://slides.com/ck1110793/python-10/" />
      </>,
      "game_design": <>
        <h4 id="pico-8">Pico-8</h4>
        <Slides url="https://slides.com/star_huey/game/" />
        <h4 id="u0">Unity: 0. Unity基本介紹及初始準備</h4>
        <Slides url="https://slides.com/mhyang/43s_unity_class-0/" />
        <h4 id="u12">Unity: 1. 細說遊戲物件 & 2. 讓角色動起來</h4>
        <Slides url="https://slides.com/mhyang/43s_unity_class-1and2/" />
        <h4 id="u34">Unity: 3. 基礎物理系統 & 4. 簡易平台遊戲製作</h4>
        <Slides url="https://slides.com/mhyang/43s_unity_class-3and4/" />
      </>,
      "blender": <>
        <h4 id="first">About Blender</h4>
        <Slides url="https://slides.com/stella-a/deck/" />
        <h4 id="second">渲染、材質 & 粒子</h4>
        <Slides url="https://slides.com/ck1110835/blender02/" />
        <h4 id="third">隨機材質 & 貼圖</h4>
        <Slides url="https://slides.com/stella-a/deck-f81f94/" />
        <h4 id="fourth">杯子</h4>
        <Slides url="https://slides.com/ck1110835/blender/" />
        <h4 id="fifth">方形小屋</h4>
        <Slides url="https://slides.com/stella-a/deck-4a3712/" />
        <h4 id="sixth">方形小屋 (1)</h4>
        <Slides url="https://slides.com/stella-a/deck-bd56c3/" />
        <h4 id="seventh">方形小屋 (2)</h4>
        <Slides url="https://slides.com/d11131634/deck/" />
        <h4 id="eighth">方形小屋 (3)</h4>
        <Slides url="https://slides.com/d11131634/deck-573baa/" />
        <h4 id="nineth">方形小屋 (4)</h4>
        <Slides url="https://slides.com/d11131634/deck-6ae291/" />
        <h4 id="tenth">方形小屋 (5)</h4>
        <Slides url="https://slides.com/d11131634/deck-8cfa5c/" />
      </>,
      "algorithm": <>
        <h4 id="first">C++ 語法 1</h4>
        <Slides url="https://slides.com/ganyumywife/algo-0/" />
        <h4 id="second">C++ 語法 2</h4>
        <Slides url="https://slides.com/cjtsai/algo-1/" />
        <h4 id="third">C++ 語法 3 - 複雜度 & 一些 STL</h4>
        <Slides url="https://slides.com/ckeisc807/algo2/" />
        <h4 id="fourth">C++ 語法 4 - 更多 STL</h4>
        <Slides url="https://slides.com/ganyumywife/algo-3/" />
        <h4 id="fifth">演算法 1 - 枚舉、貪婪、二分搜 & 分治</h4>
        <Slides url="https://slides.com/cjtsai/algo-basic/" />
        <h4 id="sixth">DP</h4>
        <Slides url="https://slides.com/ckeisc807/dynamic-programming0/" />
        <h4 id="seventh">圖論（一）</h4>
        <Slides url="https://slides.com/sea_of_voices/graph-theory0/" />
        <h4 id="eighth">圖論（二）</h4>
        <Slides url="https://slides.com/sea_of_voices/graph-theory1/" />
        <h4 id="tenth">小社賽題解</h4>
        <Slides url="https://slides.com/ckefgisc28th/contest/" />
      </>,
      "js_and_ts": <>
        <h4 id="all">全部</h4>
        <Slides url="https://slides.com/star_huey/js_and_ts/" />      
      </>,
      "python-2": <>
        <h4 id="first">OpenCV</h4>
        <Slides url="https://slides.com/d11130110/minimal-458a40/" />
        <h4 id="second">PyVista (上)</h4>
        <Slides url="https://slides.com/ykvonckhs/pyvista/" />
        <h4 id="third">PyVista (下)</h4>
        <Slides url="https://slides.com/ykvonckhs/pyvista2/" />
      </>,
      "game_develop": <>
        <h4 id="u56">Unity 5. Tilemap & 6. Prefab</h4>
        <Slides url="https://slides.com/mhyang/unity-5and6/" />
        <h4 id="u7">Unity 7. 淺談 AI 尋路及延伸</h4>
        <Slides url="https://slides.com/mhyang/unity-7/" />
        <h4 id="u89">Unity 8. 實用 UI & 9. 場景切換與管理</h4>
        <Slides url="https://slides.com/mhyang/unity-8and9/" />
      </>,
      "algorithm-2": <>
        <h4 id="first">線段樹</h4>
        <Slides url="https://slides.com/ckeisc807/segment_tree/" />
        <h4 id="second">資料結構</h4>
        <Slides url="https://slides.com/sea_of_voices/data_structure_new/" />
        <h4 id="third">圖論（三）</h4>
        <Slides url="https://slides.com/sea_of_voices/graph-theory2/" />
        <h4 id="fourth">DP（二）</h4>
        <Slides url="https://slides.com/ckeisc807/copy-of-dynamic-programming/" />
        <h4 id="fifth">樹論</h4>
        <Slides url="https://slides.com/cjtsai/tree/" />
        <h4 id="sixth">計算幾何</h4>
        <Slides url="https://slides.com/aaw/geometry-15/" />
        <h4 id="seventh">字串</h4>
        <Slides url="https://slides.com/cjtsai/string" />
        <h4 id="eighth">數論</h4>
        <Slides url="https://slides.com/lemonilemon/copy-of" />
        <h4 id="ninth">補坑</h4>
        <Slides url="https://slides.com/cjtsai/misc" />
      </>
    }

  setText(<CourseDetails
    title={titles[view]}
    imgSrc={imgSrcs[view]}
    content={theContent.includes("%UNDONE%") ? `# ${titles[view]}\n\n` + Placeholder() : theContent}
  />);
  setSlides(slides[view]);
}

function slidesListInit() {
  $(".slides-list > nav").empty();

  let isFirst = true;
  $(".slides-contents h4").each((i, e) => {
    $(".slides-list > nav").append(
      $(`<span id="to-${e.id}">`)
        .text($(e).text())
        .on("click", (ev) => {
          $(`#${ev.target.id.slice("to-".length) }`)[0].scrollIntoView({ behavior: "smooth" });
        }).addClass(isFirst ? "active" : null)
    );
    isFirst = false;
  });
}

function slidesContentsOnScroll(ev) {
  let targetElement;
  $(ev.target).children().each((i, e) => {
    $(`#to-${e.id}`).removeClass("active");
    if (targetElement) return;

    let box = $(e)[0].getBoundingClientRect();
    if ($(e).is("h4") && box.bottom > $(".slides-contents")[0].getBoundingClientRect().top) 
      targetElement = e;
  });
  $(`#to-${targetElement.id}`).addClass("active");
}

export default function CourseIndividual() {
  const { id: courseId } = useParams();

  const index = [ "web", "python", "game_design", "blender", "algorithm", "js_and_ts", "python-2", "game_develop", null, "algorithm-2" ].indexOf(courseId);

  const [text, setText] = React.useState();
  const [slides, setSlides] = React.useState();

  React.useEffect(() => {
    switchPageAnimation();

    fetch(longDescriptionPath)
      .then(response => response.text())
      .then(textContent => setContent(index, courseId, textContent, setText, setSlides));
  }, [ index, courseId ]);

  if (index === -1) {
    window.location.replace("#/courses");
    return (<></>);
  }

  return (<>
    <section id="title-bar">
      課程介紹
    </section>
    <section id="individual-course">
      <div className="container">
        {text ?? (<Loading />)}
      </div>
    </section>
    <section id="slides">
      <SectionTitle>簡報區</SectionTitle> 
      <div className="container">
        <div className="slides-container">
          <div className="slides-list thin-scrollbar">
            <nav className="nav nav-pills">
              
            </nav>
          </div>
          <div className="slides-vertical-line"></div>
          <div className="slides-contents thin-scrollbar" onLoad={slidesListInit}  onScroll={slidesContentsOnScroll}>
            {slides}
          </div>
        </div>
      </div>
    </section>
  </>);
}
