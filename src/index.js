import "./keyshapejs.js";
import "@babel/polyfill";
import "intersection-observer";

import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import jankdefer from "jankdefer";
import { loadOdysseyScrollyteller } from "@abcnews/scrollyteller";

const PROJECT_NAME = "interactive-scrollout";
const root = document.querySelector(`[data-${PROJECT_NAME}-root]`);

const fragment = document.querySelector(".html-fragment");
const embed = document.querySelector(".embed-fragment");

if (fragment) fragment.className = "inline-content html-fragment full u-full";
if (embed) embed.className = "embed-fragment u-full";

let scrollyData;

function renderApp() {
  if (!scrollyData) {
    scrollyData = loadOdysseyScrollyteller("", "u-full", "mark");
  }

  render(<App scrollyData={scrollyData} />, root);

  // IE11 being stubborn
  document.body.style.background = "#E0FFFF";
}

function init() {
  if (window.__ODYSSEY__) {
    renderApp();
  } else {
    window.addEventListener("odyssey:api", renderApp);
  }
}

// Use Ash Kyd's handy function to
// stop jank and load header hero first before loading
// the rest of the page.
jankdefer(init, {
  framerateTarget: 50,
  timeout: 4000,
  threshold: 5,
  debug: false
});

if (module.hot) {
  module.hot.accept("./components/App", () => {
    try {
      renderApp();
    } catch (err) {
      import("./components/ErrorBox").then(exports => {
        const ErrorBox = exports.default;
        render(<ErrorBox error={err} />, root);
      });
    }
  });
}

if (process.env.NODE_ENV === "development") {
  console.debug(`[${PROJECT_NAME}] public path: ${__webpack_public_path__}`);
}
