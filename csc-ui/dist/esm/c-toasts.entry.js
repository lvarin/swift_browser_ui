import { r as registerInstance, h, H as Host, g as getElement } from './index-548fbd48.js';
import { C as CToastType, a as CToastPosition } from './index-dfaed2a4.js';

const cToastsCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(128, 128, 128);--csc-primary:#002f5f;--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:grid;gap:12px;grid-template-columns:1fr;left:0;padding:12px;pointer-events:none;position:fixed;right:0;z-index:10000;max-width:100%;min-width:30vw;width:640px}:host(.absolute){position:absolute}:host(.bottom){bottom:0}:host(.top){top:0}:host(.right){right:0;left:auto;justify-content:end}:host(.left){right:auto;left:0;justify-content:start}:host(.center){justify-content:center;margin:0 auto}";

const CToasts = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this._getDefaultOptions = () => ({
      type: CToastType.Info,
      duration: 6000,
      persistent: false,
      indeterminate: false,
      position: CToastPosition.Fixed,
      progress: true,
      id: `c-toast-item-${CToasts._uniqueId}`,
    });
    this.absolute = false;
    this.horizontal = 'center';
    this.vertical = 'bottom';
    this.messages = [];
  }
  async addToast(message) {
    const customMessages = this.messages.filter((message) => message.custom);
    if (message.custom && customMessages.length > 0) {
      console.warn(`Custom toast messages are restricted to 1 visible message due to slot reflection limitations.`);
    }
    else {
      CToasts._uniqueId += 1;
      requestAnimationFrame(() => {
        const defaultOptions = this._getDefaultOptions();
        this.messages = [
          ...this.messages,
          Object.assign(Object.assign(Object.assign({}, defaultOptions), message), { duration: +(message === null || message === void 0 ? void 0 : message.duration) > 0
              ? +message.duration
              : defaultOptions.duration }),
        ];
      });
    }
  }
  async removeToast(id) {
    const toast = this.el.shadowRoot.querySelector(`#c-toast--${id}`);
    toast === null || toast === void 0 ? void 0 : toast.closeToast();
  }
  _onMessageClose(event) {
    this._removeMessage(event.detail.id);
  }
  _removeMessage(id) {
    const toast = this.el.shadowRoot.querySelector(`#c-toast--${id}`);
    toast === null || toast === void 0 ? void 0 : toast.remove();
    const messageCount = this.el.shadowRoot.querySelectorAll('c-toast').length;
    if (messageCount === 0) {
      this.messages = [].slice();
    }
  }
  _renderMessage(message) {
    return (h("c-toast", { message: message, onClose: (e) => this._onMessageClose(e) }, message.custom && h("slot", null)));
  }
  componentWillLoad() {
    CToasts._uniqueId += 1;
  }
  render() {
    return (h(Host, { class: {
        absolute: this.absolute,
        [this.vertical]: true,
        [this.horizontal]: true,
      } }, this.messages.map((message) => this._renderMessage(message))));
  }
  get el() { return getElement(this); }
};
CToasts._uniqueId = 0;
CToasts.style = cToastsCss;

export { CToasts as c_toasts };

//# sourceMappingURL=c-toasts.entry.js.map
