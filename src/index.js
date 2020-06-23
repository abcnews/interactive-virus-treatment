import "./keyshapejs.js";
import "@babel/polyfill";
import "intersection-observer";

import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import jankdefer from "jankdefer";
import { loadOdysseyScrollyteller } from "@abcnews/scrollyteller";

const PROJECT_NAME = "interactive-virus-treatment";
const root = document.querySelector(`[data-${PROJECT_NAME}-root]`);

// Make HTML fragments go full width
const phase1 = document.querySelectorAll(".html-fragment");
const phase1mobile = document.querySelectorAll(".embed-fragment");
const phase2 = document.querySelectorAll(".view-html-fragment-embedded");

const fragmentsLists = [phase1, phase1mobile, phase2];

for (const fragments of fragmentsLists) {
  for (const fragment of fragments) {
    fragment.classList.add("u-full");
  }
}

let scrollyData;

function renderApp() {
  console.log("Ready for init!");

  /*************** 




  // if (!scrollyData) {
  //   scrollyData = loadOdysseyScrollyteller("", "u-full", "mark");
  // }

  // render(<App scrollyData={scrollyData} />, root);

  // IE11 being stubborn and not displaying


*******************/

  // background color so let's override the background
  // directly
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

// Set up hot reloading
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
