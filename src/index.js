import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

import Header from "./header/Header";
import Main from "./Main";
import Footer from "./footer/Footer";

const root = ReactDOM.createRoot($("#root")[0]);
root.render(
  <React.StrictMode>
    <div className="main-wrapper scrollbar">
      <Header />

      <div className="page-content-wrapper">
        <Main />
      </div>

      <Footer />
    </div>
  </React.StrictMode>
);
