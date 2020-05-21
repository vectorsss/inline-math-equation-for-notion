// ==UserScript==
// @name            notion-inline-math-equations-web
// @namespace       https://github.com/MLZC/inline-math-equation-for-notion
// @match           https://www.notion.so/*
// @version         0.0.1
// @description     Render Latex in notion
// @require         https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js
// @require         https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/auto-render.min.js
// @grant           GM_addStyle
// ==/UserScript==

// Acknowledgement
// This script was inspired by: https://github.com/evertheylen/notion-inline-math & https://github.com/Penguinlay/notion-inline-latex
// Based on https://github.com/ghosw/notion-inline-math-equations, just fix a bug.

// right-padding for inline math mode
GM_addStyle(`
.katex {
    padding-right: 0 !important;
    font-size: 1.3em;
}
`);

let timeBetweenRenders = 500;
var head_inner_html = document.getElementsByTagName('head')[0].innerHTML;
str = '<link href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.11.1/katex.min.css" type="text/css" rel="stylesheet">';
document.getElementsByTagName('head')[0].innerHTML=head_inner_html+str;

// render inline LaTeX
function renderInlineLaTeX() {
  activeEl = document.activeElement;
  if(activeEl.tagName!="INPUT"){
     activeEl.classList.add('do-not-render-katex-123456789');
  var code = document.querySelectorAll('span[style*="monospace"]');
  let el = document.getElementsByClassName("notion-page-content")[0];
  if (!el) {
    return;
  }

  renderMathInElement(el, {
    delimiters: [
      // LaTeX delimiters (uncomment/add as needed)
      { left: "$$" , right: "$$" , display: true  },
      // { left: "\\[", right: "\\]", display: true  },
      // { left: "\\(", right: "\\)", display: false },
      { left: "$", right: "$", display: false }
    ],
    ignoredClasses: ['do-not-render-katex-123456789'],
    throwOnError: true, 
    font: "mathit"
  });
  activeEl.classList.remove('do-not-render-katex-123456789'); 
  }
}
setInterval(renderInlineLaTeX, timeBetweenRenders);