import React from "react";
import { useRouteError } from "react-router-dom";
import $ from "jquery";
import Offcanvas from "../offcanvas/OffCanvas";

export function handleFadeIn() {
  $(".fade-in.hiding").each((i, element) => {
    var object = $(element);
    var windowObject = $(".main-wrapper");

    if (object.position().top + object.outerHeight() * 0.5
      < windowObject.scrollTop() + windowObject.height()
      && !object.parents("*").hasClass("inactive")) {
      object.removeClass("hiding");
    }
  });
}

export function handleHeaderSize() {
  let mainWrapper = $(".main-wrapper");
  $("header").toggleClass(
    "header-shrink", 
    mainWrapper.scrollTop() > 50 && mainWrapper.prop("scrollHeight") > window.outerHeight * 1.2
  );
}

export function windowOnLoad() {
  $(".main-wrapper").on("scroll", () => window.requestAnimationFrame(handleFadeIn));
  $(window).on("resize", handleFadeIn);
  handleFadeIn();

  $(".main-wrapper").on("scroll", handleHeaderSize);
}

export function switchPageAnimation() {
  $(".main-wrapper")[0].scrollTo({ top: 0, behavior: "instant" });

  var footerElement = $("footer")[0];
  footerElement.style.animation = "none";
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      footerElement.style.animation = null;
    });
  });
}

export default function Page(props) {
  React.useEffect(() => {
    document.title = `${props.title} | 建北電資 28th` || "";

    switchPageAnimation();

    // for mobile
    windowOnLoad();
    // for PC
    window.addEventListener("load", windowOnLoad);
  }, [ props.title ]);
  return (<>
    <div className="page-content-wrapper" onLoad={handleFadeIn}>
      {props.children}
    </div>
    <Offcanvas />
  </>);
};

export function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className="container py-5 d-flex flex-column align-items-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.status}: {error.statusText || error.message}</i>
      </p>
    </div>
  );
}