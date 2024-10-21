'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-682790de.js');

const cTabButtonsCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(128, 128, 128);--csc-primary:#002f5f;--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}.c-tab-buttons{--c-switch-border-color:var(--csc-primary);display:flex;flex-wrap:wrap;box-shadow:0 0 0 2px var(--c-switch-border-color);margin:2px;border-radius:var(--csc-border-radius);background-color:var(--csc-primary);gap:2px}.c-tab-buttons ::slotted(*){flex-grow:1}.c-tab-buttons--disabled{--c-switch-border-color:var(--csc-light-grey);pointer-events:none;background-color:var(--csc-light-grey)}::slotted(c-button:first-child){--c-radius:4px 0 0 4px}::slotted(c-button:last-child){--c-radius:0 4px 4px 0}";

const CTabButtons = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.changeValue = index.createEvent(this, "changeValue", 3);
    this.value = 0;
    this.mandatory = false;
    this.size = 'default';
    this.hostDisabled = false;
  }
  onValueChange(value) {
    var _a, _b;
    this.el.childNodes.forEach((button) => {
      button.outlined = true;
    });
    if (value !== null) {
      const button = this.buttons.find((btn) => btn.value === value) || this.buttons[value];
      if (button)
        button.outlined = false;
    }
    this.changeValue.emit((_b = (_a = this.buttons[value]) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : value);
  }
  onTabChange(event) {
    const isActive = this.value !== null &&
      (this._isIndexBased
        ? +event.detail === +this.value
        : event.detail === this.value);
    if (this.mandatory && isActive) {
      return;
    }
    const nullValue = this._isIndexBased ? null : '';
    const value = this._isIndexBased ? +event.detail : event.detail;
    this.value = isActive ? nullValue : value;
  }
  get buttons() {
    return Array.from(this.el.childNodes).filter((element) => element.tagName === 'C-BUTTON');
  }
  componentDidLoad() {
    this._isIndexBased = this.buttons.every((button) => typeof button.value === 'undefined');
    this.buttons.forEach((button, index) => {
      button.setAttribute('data-index', String(index));
      button.grouped = true;
      button.disabled = this.hostDisabled;
      button.size = this.size;
      const isActive = this.value !== null &&
        (this._isIndexBased
          ? index === +this.value
          : button.value === this.value);
      button.outlined = !isActive;
      const buttonElement = button.shadowRoot.querySelector('.c-button');
      buttonElement.classList.add('grouped');
    });
  }
  render() {
    const classes = {
      'c-tab-buttons': true,
      'c-tab-buttons--disabled': this.hostDisabled,
    };
    return (index.h("div", { class: classes }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["onValueChange"]
  }; }
};
CTabButtons.style = cTabButtonsCss;

exports.c_tab_buttons = CTabButtons;

//# sourceMappingURL=c-tab-buttons.cjs.entry.js.map
