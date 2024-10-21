import { proxyCustomElement, HTMLElement, getAssetPath, h, Host } from '@stencil/core/internal/client';
import { i as mdiFullscreenExit, j as mdiFullscreen } from './mdi.js';
import { d as defineCustomElement$3 } from './c-icon2.js';
import { d as defineCustomElement$2 } from './c-icon-button2.js';

const cCardCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(128, 128, 128);--csc-primary:#002f5f;--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{--c-card-gap:24px;border-radius:6px;box-shadow:rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.2) 0px 5px 5px;display:flex;flex-direction:column;gap:var(--c-card-gap);padding:var(--c-card-gap) 0;position:relative}::slotted(c-loader){border-radius:6px}:host(.c-card--fullscreen){height:100vh;left:0 !important;overflow-y:scroll;position:fixed;top:0 !important;width:100vw;z-index:10}.c-card__fullscreen-toggle{position:absolute;right:22px;top:22px}";

const CCard$1 = proxyCustomElement(class CCard extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this._allowedBackgrounds = ['puhti', 'mahti', 'allas'];
    this.background = undefined;
    this.backgroundColor = 'white';
    this.fullscreen = false;
    this.isFullscreen = false;
  }
  _onFullscreen() {
    var _a, _b;
    this.isFullscreen = !this.isFullscreen;
    const modalWrapper = (_b = (_a = this.host.parentElement) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.modal-wrapper');
    if (modalWrapper) {
      modalWrapper.style.display = this.isFullscreen
        ? 'block'
        : 'flex';
    }
  }
  componentDidLoad() {
    const title = this.host.querySelector('c-card-title');
    if (!!title && this.fullscreen) {
      title.style.marginRight = '40px';
    }
  }
  async exitFullscreen() {
    var _a, _b;
    this.isFullscreen = false;
    const modalWrapper = (_b = (_a = this.host.parentElement) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.modal-wrapper');
    if (modalWrapper) {
      modalWrapper.style.display = 'flex';
    }
  }
  async enterFullscreen() {
    this.isFullscreen = true;
  }
  render() {
    const style = {
      'background-color': this.backgroundColor,
    };
    const hostClasses = {
      'c-card': true,
      'c-card--fullscreen': this.isFullscreen,
    };
    if (this._allowedBackgrounds.includes(this.background)) {
      style['background-image'] = `url(${getAssetPath(`./assets/${this.background}.gif`)}`;
      style['background-size'] = 'cover';
      style['background-position-y'] = 'bottom';
    }
    return (h(Host, { class: hostClasses, style: style }, this.fullscreen && (h("c-icon-button", { "aria-hidden": "true", class: "c-card__fullscreen-toggle", title: this.isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen', text: true, onClick: () => this._onFullscreen() }, h("c-icon", { path: this.isFullscreen ? mdiFullscreenExit : mdiFullscreen }))), h("slot", null)));
  }
  static get assetsDirs() { return ["assets"]; }
  get host() { return this; }
  static get style() { return cCardCss; }
}, [1, "c-card", {
    "background": [1],
    "backgroundColor": [1, "background-color"],
    "fullscreen": [4],
    "isFullscreen": [32],
    "exitFullscreen": [64],
    "enterFullscreen": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-card", "c-icon", "c-icon-button"];
  components.forEach(tagName => { switch (tagName) {
    case "c-card":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CCard$1);
      }
      break;
    case "c-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "c-icon-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const CCard = CCard$1;
const defineCustomElement = defineCustomElement$1;

export { CCard, defineCustomElement };

//# sourceMappingURL=c-card.js.map
