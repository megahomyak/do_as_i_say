// ==UserScript==
// @name        Do as I say
// @namespace   megahomyak
// @include     *
// @version     1.0
// @author      megahomyak
// @grant       GM_openInTab
// @description A small script to automate certain frequent actions
// ==/UserScript==

window.addEventListener("keydown", (event) => {
  if (!["TEXTAREA", "INPUT",].includes(document.activeElement.tagName.toUpperCase())) {
    if (event.key == "s") {
      let selection = window.getSelection().toString();
      if (selection) {
        GM_openInTab(`https://www.google.com/search?q=${encodeURIComponent(selection)}`);
      }
    }
  }
});
