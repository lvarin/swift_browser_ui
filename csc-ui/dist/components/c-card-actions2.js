import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const cCardActionsCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(128, 128, 128);--csc-primary:#002f5f;--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{padding:0 var(--c-card-gap, 24px);display:block}.c-card-actions{align-items:center;display:flex;gap:8px}.c-card-actions ::slotted(c-button[fit]){flex:1}.c-card-actions--align-center{align-items:center}.c-card-actions--align-start{align-items:flex-start}.c-card-actions--align-end{align-items:flex-end}.c-card-actions--justify-center{justify-content:center}.c-card-actions--justify-end{justify-content:flex-end}.c-card-actions--justify-start{justify-content:flex-start}.c-card-actions--justify-stretch{justify-content:stretch}.c-card-actions--justify-stretch ::slotted(*){flex:1}.c-card-actions--justify-space-between{justify-content:space-between}.c-card-actions--justify-space-around{justify-content:space-around}";

const CCardActions = proxyCustomElement(class CCardActions extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.align = 'center';
    this.justify = 'start';
  }
  render() {
    const classes = {
      'c-card-actions': true,
      [`c-card-actions--align-${this.align}`]: true,
      [`c-card-actions--justify-${this.justify}`]: true,
    };
    return (h(Host, null, h("div", { class: classes }, h("slot", null))));
  }
  static get style() { return cCardActionsCss; }
}, [1, "c-card-actions", {
    "align": [1],
    "justify": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-card-actions"];
  components.forEach(tagName => { switch (tagName) {
    case "c-card-actions":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CCardActions);
      }
      break;
  } });
}

export { CCardActions as C, defineCustomElement as d };

//# sourceMappingURL=c-card-actions2.js.map
