// Scans DOM for <a name="whatever"> </a>
// and converts to <div class="whatever"></div>
export function hashify(options) {
  // Get an array of all the anchor elements on the page
  const anchors = document.querySelectorAll("a");

  // Loop through all the anchor nodes
  anchors.forEach(anchor => {
    // Leave normal links on the page alone
    // In PL they are "" not " "
    if (anchor.innerHTML !== "") return;
    // Leave #hashtag links alone
    if (anchor.getAttribute("title")) return;
    // Make sure it's really a #hashlink
    if (!anchor.getAttribute("name")) return;

    // Conditional transform of hashes - only hashify if in hashList: ["hashname", "another"]
    if (options && options.hashList) {
      if (options.hashList.indexOf(anchor.getAttribute("name")) === -1) return;
    }

    // The anchor title will later become the span class
    const elementName = anchor.getAttribute("name");

    // Compose our new div element
    const divEl = document.createElement("div");
    divEl.setAttribute("class", elementName);

    // Add a default class if passed one
    if (options && options.defaultClass) {
      addClass(divEl, options.defaultClass);
    }

    // Replace anchor with div
    anchor.parentNode.replaceChild(divEl, anchor);
  });
}

// Some convenience methods
function addClass(el, className) {
  if (el.classList) el.classList.add(className);
  else if (!hasClass(el, className)) el.className += ` ${className}`;
}