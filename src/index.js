import "./keyshapejs.js";
// import "@babel/polyfill";
import "regenerator-runtime/runtime.js";
import "intersection-observer";
import "url-search-params-polyfill";

const params = new URLSearchParams(window.location.search);
const proxyString = params.get("proxy");

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
  // Experiment with ?proxy=https://ws204914.aus.aunty.abc.net.au:8000/index.js
  // to run a local copy of the bundle
  if (proxyString && process.env.NODE_ENV === "production") {
    console.log("Found proxy. Redirecting...")
    function loadModule(url) {
      const scriptTag = document.createElement("script");
      scriptTag.setAttribute("src", url);
      document.head.appendChild(scriptTag);
    }

    loadModule(proxyString);
  } else {
    console.log("Running!!!");
  }

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
