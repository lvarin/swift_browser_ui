import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as createRipple } from './utils.js';

const cSwiperTabCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(128, 128, 128);--csc-primary:#002f5f;--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:inline-block;border-radius:4px;width:100%;height:100%;outline:none;text-decoration:none;user-select:none;display:grid;align-content:stretch;padding:4px;background-color:transparent;border:none}:host(:focus){outline:2px var(--csc-primary) solid;outline-offset:-2px}@supports selector(:focus-visible){:host(:focus){outline:none}}:host(:focus-visible){outline:2px var(--csc-primary) solid;outline-offset:-2px}.c-swiper-tab{height:100%}.c-swiper-tab:hover:not(.c-swiper-tab--active) .c-swiper-tab__content{background-color:var(--csc-primary-ghost-hover)}.c-swiper-tab__content{--c-color:var(--csc-primary);border-radius:4px;background-color:var(--csc-primary-ghost);color:var(--csc-primary);cursor:pointer;transition:background-color 0.2s ease-in-out;display:grid;gap:4px;grid-template-columns:1fr;padding:16px;align-content:start;position:relative;overflow:hidden;height:100%}.c-swiper-tab__header{line-height:38px;font-size:24px;display:grid;grid-template-columns:1fr auto;gap:16px}.c-swiper-tab__description{align-items:start;opacity:0.67}.c-swiper-tab--disabled .c-swiper-tab__content{--c-color:var(--csc-mid-grey);background:var(--csc-lightest-grey);color:var(--csc-mid-grey);cursor:default !important;pointer-events:none}.c-swiper-tab--active .c-swiper-tab__content{background-color:var(--csc-primary);--c-color:#fff;color:#fff;pointer-events:none}.c-swiper-tab--active .c-swiper-tab__content:hover{background-color:var(--csc-primary-hover)}.c-swiper-tab svg{fill:currentColor;height:38px;width:38px}";

const CSwiperTab$1 = proxyCustomElement(class CSwiperTab extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.changeValue = createEvent(this, "changeValue", 7);
    this.disabled = false;
    this.active = false;
    this.label = undefined;
    this.hostId = undefined;
    this.setsize = undefined;
    this.position = undefined;
    this.value = undefined;
  }
  onTabClick(event) {
    if (this.active)
      return;
    createRipple(event, this._container);
    this.changeValue.emit(this.value);
  }
  render() {
    const classes = {
      'c-swiper-tab': true,
      'c-swiper-tab--active': !this.disabled && this.active,
      'c-swiper-tab--disabled': this.disabled,
    };
    const a11y = {
      'aria-selected': this.active ? 'true' : 'false',
      'aria-setsize': this.setsize,
      'aria-posinset': this.position,
      tabindex: this.active ? 0 : -1,
    };
    return (h(Host, Object.assign({}, a11y, { role: "tab" }), h("div", { id: this.hostId, class: classes }, h("div", { class: "c-swiper-tab__content", ref: (el) => (this._container = el) }, h("div", { class: "c-swiper-tab__header" }, this.label, h("slot", { name: "icon" })), h("div", { class: "c-swiper-tab__description" }, h("slot", null))))));
  }
  get el() { return this; }
  static get style() { return cSwiperTabCss; }
}, [1, "c-swiper-tab", {
    "disabled": [4],
    "active": [4],
    "label": [1],
    "hostId": [1, "id"],
    "setsize": [2],
    "position": [2],
    "value": [8]
  }, [[1, "click", "onTabClick"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-swiper-tab"];
  components.forEach(tagName => { switch (tagName) {
    case "c-swiper-tab":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CSwiperTab$1);
      }
      break;
  } });
}

const CSwiperTab = CSwiperTab$1;
const defineCustomElement = defineCustomElement$1;

export { CSwiperTab, defineCustomElement };

//# sourceMappingURL=c-swiper-tab.js.map
