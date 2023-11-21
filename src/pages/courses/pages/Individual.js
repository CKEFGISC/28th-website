import React from "react";
import $ from "jquery";

import CourseDetails from "../components/CourseDetails";

import longDescriptionPath from "../descriptions/long.md";

import Loading from "../../../utils/Loading";
import Placeholder from "../../../utils/Placeholder";
import { switchPageAnimation } from "../../../utils/Page";
import Slides from "../components/Slides";
import SectionTitle from "../../../utils/SectionTitle";

function setContent(index, view, textContent, setText, setSlides) {
  var theContent = textContent.split("<%-== next ==-%>")[index];
  var 
    titles = {
      "web": "網頁",
      "python": "Python",
      "game_design": "遊戲設計",
      "blender": "Blender",
      "algorithm": "演算法",
    },
    imgSrcs = {
      "web": "/images/courses/web.avif",
      "python": "/images/courses/python.jpg",
      "game_design": "/images/courses/game_design.webp",
      "blender": "/images/courses/blender.jpg",
      "algorithm": "/images/courses/algorithm.jpg"
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
        <h4 id="sixth">JavaScript 2</h4>
        <Slides url="https://slides.com/star_huey/web_js_2/" />
      </>,
      "python": <>
        <h4 id="first">Python 簡介</h4>
        <Slides url="https://slides.com/d11130110/minimal-ec3a0e/" />
        <h4 id="second">基礎語法</h4>
        <Slides url="https://slides.com/d11130110/minimal-5775aa/" />
        <h4 id="third">基礎語法 2</h4>
        <Slides url="https://slides.com/d11130110/minimal/" />
        <h4 id="fourth">Function</h4>
        <Slides url="https://slides.com/ck1110793/python_function" />
        <h4 id="fifth">OOP & Module</h4>
        <Slides url="https://slides.com/ykchiu/python-oop/fullscreen#/python-5-oop-and-module" />
        <h4 id="sixth">File IO</h4>
        <Slides url="https://slides.com/ck1110793/python_file_io" />
      </>,
      "game_design": <>
        <h4 id="pico-8">Pico-8</h4>
        <Slides url="https://slides.com/star_huey/game" />
      </>,
      "blender": <>
        <h4 id="first">Blender 1</h4>
        <Slides url="https://slides.com/stella-a/deck/" />
        <h4 id="second">Blender 2</h4>
        <Slides url="https://slides.com/ck1110835/blender02/" />
        <h4 id="third">Blender 3</h4>
        <Slides url="https://slides.com/stella-a/deck-f81f94/" />
        <h4 id="fourth">Blender 4</h4>
        <Slides url="https://slides.com/ck1110835/blender/" />
        <h4 id="fifth">Blender 5</h4>
        <Slides url="https://slides.com/stella-a/deck-4a3712/" />
      </>,
      "algorithm": <>
        <h4 id="first">C++ 語法 1</h4>
        <Slides url="https://slides.com/ganyumywife/algo-0/" />
        <h4 id="second">C++ 語法 2</h4>
        <Slides url="https://slides.com/cjtsai/algo-1/" />
        <h4 id="third">C++ 語法 3 - 複雜度 & 一些 STL</h4>
        <Slides url="https://slides.com/stella-a/deck-f81f94/" />
        <h4 id="fourth">C++ 語法 4 - 更多 STL</h4>
        <Slides url="https://slides.com/ganyumywife/algo-3" />
        <h4 id="fifth">演算法 1 - 枚舉、貪婪、二分搜 & 分治</h4>
        <Slides url="https://slides.com/cjtsai/algo-basic/" />
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

export default function CourseIndividual(props) {
  const [text, setText] = React.useState();
  const [slides, setSlides] = React.useState();

  React.useEffect(() => {
    switchPageAnimation();

    fetch(longDescriptionPath)
      .then(response => response.text())
      .then(textContent => setContent(props.index, props.view, textContent, setText, setSlides));
  }, [ props ]);

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