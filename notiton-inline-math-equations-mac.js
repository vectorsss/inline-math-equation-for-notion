window.onload = function(e) {
    loadJS(
        "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js",
        document.body
    );
    loadJS(
        "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/auto-render.min.js",
        document.body
    );
    let customCSS = document.createElement("style");
    customCSS.innerHTML = `.katex {
            padding-right: 0 !important;
            font-size: 1.3em;
        }`;
    document.getElementsByTagName("head")[0].appendChild(customCSS);
    var head_inner_html = document.getElementsByTagName('head')[0].innerHTML;
    let str_link = '<link href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.11.1/katex.min.css" type="text/css" rel="stylesheet">';
    document.getElementsByTagName('head')[0].innerHTML=head_inner_html+str_link;
    renderInlineLaTeX();
};

var loadJS = function(url, location) {
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to
    //insert the <script> element

    var scriptTag = document.createElement("script");
    scriptTag.src = url;

    location.appendChild(scriptTag);
};

// render inline LaTeX
function renderInlineLaTeX() {
    let activeEl = document.activeElement;
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
  };
function rerender() {
    renderInlineLaTeX();
    setTimeout(rerender, 500);
}
setTimeout(rerender, 5000);
// # notion desktop inline-math