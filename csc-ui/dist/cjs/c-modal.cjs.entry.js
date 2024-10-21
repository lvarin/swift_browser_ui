'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-682790de.js');

const cModalCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(128, 128, 128);--csc-primary:#002f5f;--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}.modal-wrapper{display:flex;position:absolute;align-items:center;justify-content:center;top:0;right:0;bottom:0;left:0;pointer-events:none}.c-modal{width:var(--c-modal-width, 600px);max-width:calc(100% - 32px);display:block;position:fixed;transform:scale(0);transition:transform 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);pointer-events:all}.c-modal--hide{visibility:hidden}.c-modal--show{transform:scale(1);visibility:visible}.c-modal--animate{animation-duration:0.15s;animation-name:animate-dialog;animation-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1)}.c-overlay{background:rgba(0, 0, 0, 0.5);position:fixed;top:0;bottom:0;left:0;right:0;transition:opacity 0.5s cubic-bezier(0.25, 0.8, 0.5, 1);opacity:0;pointer-events:none;backdrop-filter:blur(4px)}.c-overlay--hide{visibility:hidden}.c-overlay--show{opacity:1;pointer-events:all;visibility:visible}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}100%{transform:scale(1)}}";

const CModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.changeValue = index.createEvent(this, "changeValue", 3);
    this._debounce = null;
    this.value = false;
    this.dismissable = false;
    this.width = 600;
    this.zIndex = 10;
    this.innerValue = false;
    this.animateModal = false;
  }
  onValueChange(value) {
    setTimeout(() => {
      this.innerValue = value;
      this.changeValue.emit(this.value);
      const cardChild = this.el.querySelector('c-card');
      if (!value && cardChild) {
        cardChild.exitFullscreen();
      }
    }, value ? 0 : 500);
  }
  _hideModal() {
    if (!this.dismissable) {
      this.animateModal = true;
      if (this._debounce !== null) {
        clearTimeout(this._debounce);
        this._debounce = null;
      }
      this._debounce = window.setTimeout(() => {
        this.animateModal = false;
        this._debounce = null;
      }, 150);
      return;
    }
    this.value = false;
    this.changeValue.emit(this.value);
  }
  componentWillLoad() {
    this.innerValue = this.value;
    const width = isNaN(this.width) ? this.width : `${this.width}px`;
    this.el.style.setProperty('--c-modal-width', `${width}`);
  }
  render() {
    const modalClasses = {
      'c-modal': true,
      'c-modal--show': this.value,
      'c-modal--hide': !this.innerValue,
      'c-modal--animate': this.animateModal,
    };
    const overlayClasses = {
      'c-overlay': true,
      'c-overlay--hide': !this.innerValue,
      'c-overlay--show': this.value,
    };
    const contentStyle = {
      'z-index': `${this.zIndex + 1}`,
    };
    const overlayStyle = {
      'z-index': `${this.zIndex}`,
    };
    return (index.h("div", { class: "modal-wrapper" }, index.h("div", { class: modalClasses, "aria-hidden": !this.value, style: contentStyle }, this.innerValue && index.h("slot", null)), index.h("div", { class: overlayClasses, style: overlayStyle, onClick: () => this._hideModal() })));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["onValueChange"]
  }; }
};
CModal.style = cModalCss;

exports.c_modal = CModal;

//# sourceMappingURL=c-modal.cjs.entry.js.map
