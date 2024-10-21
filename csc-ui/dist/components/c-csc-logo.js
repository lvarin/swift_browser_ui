import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const cCscLogoCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(128, 128, 128);--csc-primary:#002f5f;--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:block;margin-top:4px}svg .cls-1{fill:none}svg .cls-2{clip-path:url(#clip-path)}svg .cls-3{fill:#5e6a71}svg .cls-4{fill:rgb(0, 103, 120)}svg .cls-5{fill:#830051}";

const CCscLogo$1 = proxyCustomElement(class CCscLogo extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.width = 60;
  }
  render() {
    const svg = (h("svg", { viewBox: "0 0 233.61 149.04" }, h("defs", null, h("clipPath", { id: "clip-path", transform: "translate(0)" }, h("rect", { class: "cls-1", width: "233.61", height: "156.31" }))), h("title", null, "CSC_logo_no_tagline"), h("g", { id: "Layer_2", "data-name": "Layer 2" }, h("g", { id: "Layer_1-2", "data-name": "Layer 1" }, h("g", { class: "cls-2" }, h("path", { class: "cls-3", d: "M97.24,130.66l-.27-.17a.69.69,0,0,1-.44.19,14.57,14.57,0,0,1-1.87-1.07,9.29,9.29,0,0,0-4.46-1.06c-6,0-9.21,4.93-9.21,10.24S84.22,149,90.09,149c4.6,0,5.89-2.57,7-2.57a2.17,2.17,0,0,1,.25.05l.22-.11-2.44-3.34-.28.17a1.84,1.84,0,0,1,.06.41c0,1.34-2.36,2.71-4.64,2.65-4.33-.08-6.08-3.72-6.08-7.56s1.86-7.45,6-7.45c2.2,0,4.44,1.15,4.44,2.21,0,.25.06.41,0,.53l.33.13ZM108,146.72l.32.13a.75.75,0,0,1,.42-.22,12.54,12.54,0,0,0,7.62,2.41c4.32,0,7.28-2.49,7.28-6.19,0-8.14-11.86-4.17-11.86-8.6,0-1.7,1-3,4.11-3,2.41,0,5.26,1,5.26,2.49a.92.92,0,0,1,0,.3l.36.17,1.92-4.14-.28-.11a.85.85,0,0,1-.62.3,11.61,11.61,0,0,1-1.95-.88,11,11,0,0,0-4.5-.87c-4.33,0-7.4,2.08-7.4,5.8,0,7.82,11.76,3.68,11.76,8.67,0,2.27-1.65,3.28-4,3.28-2.77,0-6.11-1.53-6.11-3a1.89,1.89,0,0,1,0-.41l-.31-.17Zm42.56-16.06-.28-.17a.64.64,0,0,1-.43.19,14.57,14.57,0,0,1-1.87-1.07,9.3,9.3,0,0,0-4.47-1.06c-6,0-9.21,4.93-9.21,10.24S137.5,149,143.37,149c4.6,0,5.89-2.57,7-2.57a1.59,1.59,0,0,1,.24.05l.22-.11-2.44-3.34-.27.17a1.84,1.84,0,0,1,.05.41c0,1.34-2.35,2.71-4.63,2.65-4.33-.08-6.08-3.72-6.08-7.56s1.86-7.45,6-7.45c2.2,0,4.44,1.15,4.44,2.21a1.82,1.82,0,0,1,0,.53l.33.13Z", transform: "translate(0)" }), h("path", { class: "cls-4", d: "M117.26,117.71s-2.66-.42-2.72-1.66c-2.41-54.33-7.39-52.22-111.82-54.33-2,0-2.72-2.87-2.72-2.87H117.26Z", transform: "translate(0)" }), h("path", { class: "cls-5", d: "M116.35,0s2.66.42,2.72,1.66C121.49,56,126.46,53.88,230.89,56c2,0,2.72,2.87,2.72,2.87H116.35Z", transform: "translate(0)" }))))));
    return h(Host, { style: { width: `${this.width}px` } }, svg);
  }
  static get style() { return cCscLogoCss; }
}, [1, "c-csc-logo", {
    "width": [2]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-csc-logo"];
  components.forEach(tagName => { switch (tagName) {
    case "c-csc-logo":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CCscLogo$1);
      }
      break;
  } });
}

const CCscLogo = CCscLogo$1;
const defineCustomElement = defineCustomElement$1;

export { CCscLogo, defineCustomElement };

//# sourceMappingURL=c-csc-logo.js.map
