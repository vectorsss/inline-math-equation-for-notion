// ==UserScript==
// @name Inline-Math-For-Notion.So
// @namespace https://github.com/mlzc/notion-inline-math
// @version 0.01
// @match https://www.notion.so/*
// @grant GM_addStyle
// @require         https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js
// @require         https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/auto-render.min.js
// ==/UserScript==

// Instructions for use:
//   - Make sure you have at least one normal math block on your page (I'am not sure this step is necessary, but according to my test, it can work without math block)
//   - Use inline code starting with "math:". For example: `$E=mc^2$`, or $E=mc^2$ select the string before and press command + E
//   - Press Alt to rerender all inline math. You can of course change the shortcut in the code below.
//   - The inline math will revert to inline code when the block becomes active.

// Acknowledgement
// This script was inspired by:
// https://github.com/Penguinlay/notion-inline-latex
// https://gist.github.com/denosawr/8a5e434bd97154fba81ea91e79a8c99b
// https://github.com/ghosw/notion-inline-math-equations

GM_addStyle(`
.notion-frame span .katex {
    padding-right: 0 !important;
    font-size: 1.3em;
}
`)

function rerender_all(e) {
    document.querySelectorAll("body").innerHTML = "";
    var code = document.querySelectorAll('span[style*="monospace"]');
    code.forEach(function(el) {
        if (document.activeElement.contains(el)) {
            if (e.key != "Alt") {
                return;
            }
        }
        var s = el.textContent;
        if (s.startsWith("$$") && s.endsWith("$$")) {
            el.style.color = null;
            el.style.background = null;
            s = s.substring(2, s.length-2)
            console.log("katex rendering inline model ", s)
            katex.render(s, el, {
              throwOnError: true, 
              font: "mathit",  
              displayMode: true
            });
        } else if(s.startsWith("$") && s.endsWith("$")){
            el.style.color = null;
            el.style.background = null;
            s = s.substring(1, s.length-1)
            console.log("katex rendering inline model ", s)
            katex.render(s, el, {
              throwOnError: true, 
              font: "mathit"
            });
        }
    });
}

function rerender() {
    rerender_all({key: "discard"});
    setTimeout(rerender, 500);
}
setTimeout(rerender, 5000);

window.addEventListener("mousedown", rerender_all);
window.addEventListener("keydown", rerender_all, true);