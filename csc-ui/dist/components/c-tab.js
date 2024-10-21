import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as createRipple } from './utils.js';

const cTabCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(128, 128, 128);--csc-primary:#002f5f;--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:block;user-select:none;flex-grow:1}:host(:focus){outline:none}:host(:focus-visible){border-radius:4px;outline:2px var(--csc-primary) solid;outline-offset:2px}:host([role=tab][aria-disabled=true]){cursor:default !important}slot{pointer-events:none}:host(.c-tab){transition:box-shadow 0.3s ease-in-out;cursor:pointer;display:block;height:50px;line-height:50px;color:var(--csc-primary);font-weight:600;text-align:center;box-shadow:inset 0 0 0 transparent;position:relative;overflow:hidden}:host(.c-tab:hover){background:var(--csc-primary-ghost)}:host(.c-tab--active){color:var(--csc-primary);box-shadow:inset 0 -15px 0 -12px var(--csc-primary)}:host(.c-tab--active:hover){background:transparent !important}:host(.c-tab--disabled){color:var(--csc-mid-grey);cursor:default;opacity:0.75;pointer-events:none}:host(.c-tab button){appearance:none;background-color:transparent;border:none;color:inherit;cursor:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;height:100%;overflow:hidden;position:relative;width:100%}";

const CTab$1 = proxyCustomElement(class CTab extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.tabChange = createEvent(this, "tabChange", 7);
    this._onClick = (event, center = false) => {
      if (this.disabled)
        return;
      createRipple(event, this.element, center);
      this.tabChange.emit(this.value);
    };
    this.active = false;
    this.disabled = false;
    this.hostId = undefined;
    this.position = undefined;
    this.setsize = undefined;
    this.value = undefined;
  }
  handleKeydown(event) {
    if (['Space', 'Enter'].includes(event.code)) {
      event.preventDefault();
      this._onClick(event, true);
    }
  }
  render() {
    const classes = {
      'c-tab': true,
      'c-tab--active': this.active,
      'c-tab--disabled': this.disabled,
    };
    const a11y = {
      'aria-disabled': this.disabled.toString(),
      'aria-hidden': this.disabled.toString(),
      'aria-selected': this.active.toString(),
      'aria-setsize': this.setsize,
      'aria-posinset': this.position,
      role: 'tab',
      tabindex: this.active && !this.disabled ? 0 : -1,
    };
    return (h(Host, Object.assign({}, a11y, { id: this.hostId, class: classes, onClick: this._onClick }), h("slot", null)));
  }
  get element() { return this; }
  static get style() { return cTabCss; }
}, [1, "c-tab", {
    "active": [4],
    "disabled": [4],
    "hostId": [1, "id"],
    "position": [2],
    "setsize": [2],
    "value": [8]
  }, [[1, "keydown", "handleKeydown"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-tab"];
  components.forEach(tagName => { switch (tagName) {
    case "c-tab":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CTab$1);
      }
      break;
  } });
}

const CTab = CTab$1;
const defineCustomElement = defineCustomElement$1;

export { CTab, defineCustomElement };

//# sourceMappingURL=c-tab.js.map
