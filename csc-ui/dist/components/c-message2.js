import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { a as mdiCloseCircle } from './mdi.js';

const cMessageCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(128, 128, 128);--csc-primary:#002f5f;--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:block;line-height:1;padding:0 12px}.c-message--active .c-message-item{opacity:1;transform:translateY(0px)}.c-message-item{font-size:12px;min-height:16px;opacity:0;transform:translateY(-4px);transition:all 0.2s cubic-bezier(0.25, 0.8, 0.5, 1)}.c-message-item--hint{color:var(--csc-mid-grey)}.c-message-item--error{color:var(--csc-error)}.c-message-item span{align-items:flex-start;color:currentColor;display:flex;gap:4px;min-height:16px}.c-message-item svg{fill:currentColor;height:16px;width:16px;position:relative;top:-2px}.c-message .visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}";

const CMessage = proxyCustomElement(class CMessage extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this._validationIcon = (h("svg", { height: "16px", width: "16px", viewBox: "0 0 24 24" }, h("path", { d: mdiCloseCircle })));
    this.hint = '';
    this.inputId = undefined;
    this.valid = true;
    this.validation = 'Required field';
    this.messageOptions = {
      show: true,
      type: 'hint',
      content: '',
    };
  }
  onValidChange(valid) {
    this._handleValidation(valid);
  }
  onValidationMessageChange(message) {
    if (this.valid || !message)
      return;
    this.messageOptions = Object.assign(Object.assign({}, this.messageOptions), { content: (h("span", null, h("span", { class: "visuallyhidden" }, "Error: "), this._validationIcon, " ", message)) });
  }
  onHintMessageChange(message) {
    if (!this.valid || !message)
      return;
    this.messageOptions = Object.assign(Object.assign({}, this.messageOptions), { content: (h("span", null, h("span", { class: "visuallyhidden" }, "Hint: "), message)) });
  }
  _handleValidation(valid, timeout = 200) {
    this.messageOptions = Object.assign(Object.assign({}, this.messageOptions), { show: false });
    setTimeout(() => {
      this.messageOptions = Object.assign(Object.assign({}, this.messageOptions), { type: valid ? 'hint' : 'error', show: true, content: valid ? (h("span", { id: `hint-${this.inputId}` }, h("span", { class: "visuallyhidden" }, "Hint: "), this.hint)) : (h("span", { id: `error-${this.inputId}` }, this._validationIcon, h("span", { class: "visuallyhidden" }, "Error: "), this.validation)) });
    }, timeout);
  }
  componentDidLoad() {
    this._handleValidation(this.valid, 0);
  }
  render() {
    const classes = {
      'c-message': true,
      'c-message--active': this.messageOptions.show,
    };
    const messageClasses = {
      'c-message-item': true,
      [`c-message-item--${this.messageOptions.type}`]: true,
    };
    return (h(Host, null, h("div", { class: classes }, h("div", { class: messageClasses }, this.messageOptions.content))));
  }
  static get watchers() { return {
    "valid": ["onValidChange"],
    "validation": ["onValidationMessageChange"],
    "hint": ["onHintMessageChange"]
  }; }
  static get style() { return cMessageCss; }
}, [1, "c-message", {
    "hint": [1],
    "inputId": [1, "input-id"],
    "valid": [4],
    "validation": [1],
    "messageOptions": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-message"];
  components.forEach(tagName => { switch (tagName) {
    case "c-message":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CMessage);
      }
      break;
  } });
}

export { CMessage as C, defineCustomElement as d };

//# sourceMappingURL=c-message2.js.map
