import "url-search-params-polyfill";

const params = new URLSearchParams(window.location.search);
const proxyString = params.get("proxy");

// Experiment with ?proxy=https://ws204914.aus.aunty.abc.net.au:8000/index.js
  // to run a local copy of the bundle
  if (proxyString && process.env.NODE_ENV === "production") {
    console.log("Found proxy. Redirecting...");
    function loadModule(url) {
      const scriptTag = document.createElement("script");
      scriptTag.setAttribute("src", url);
      document.head.appendChild(scriptTag);
    }

    loadModule(proxyString);
  } else {
    console.log("..........");
    require("./main.js")
  }