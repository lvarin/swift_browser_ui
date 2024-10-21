import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-548fbd48.js';
import { v as mdiClose, h as mdiAlert, i as mdiCloseCircle, j as mdiCheckCircle, k as mdiInformation } from './mdi-bbd6442f.js';

const cToastCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(128, 128, 128);--csc-primary:#002f5f;--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{--c-toast-animation-state:running;align-items:center;background-color:#fff;border-radius:6px;border:2px solid var(--c-toast-color);border-left-width:12px;box-shadow:rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;box-sizing:border-box;display:grid;min-height:52px;opacity:0;padding:8px 12px;pointer-events:all;text-align:left;transform:translateY(20px);transition:opacity 0.5s ease, transform 0.5s ease;width:100%;will-change:opacity, transform;z-index:10001;position:relative}:host(.show){opacity:1;transform:translateY(0px)}:host(.info){--c-toast-color:var(--csc-link)}:host(.error){--c-toast-color:var(--csc-error)}:host(.warning){--c-toast-color:var(--csc-warning)}:host(.success){--c-toast-color:var(--csc-success)}.c-toast__content p{margin:0;font-weight:600}.c-toast__item{align-items:center;display:grid;gap:12px;grid-auto-columns:auto;grid-auto-flow:column;grid-template-columns:24px 1fr;font-weight:300}.c-toast__item>svg{fill:var(--c-toast-color)}.c-toast__item svg{height:24px;width:24px}.c-toast__progress{background-color:var(--csc-light-grey);border-radius:8px;height:6px;margin-top:8px;overflow:hidden;transform:translateZ(0)}:host(:hover){--c-toast-animation-state:paused}.c-toast__progress__bar{animation-duration:var(--c-toast-duration);animation-fill-mode:forwards;animation-iteration-count:1;animation-name:timer;animation-play-state:var(--c-toast-animation-state);animation-timing-function:linear;background-color:var(--c-toast-color);border-radius:8px;height:6px;width:100%}.c-toast__progress__bar.indeterminate{animation:indeterminate 2s infinite linear;left:-100%;width:50%;position:relative;transform-origin:0% 50%}.visuallyhidden{border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;padding:0;position:absolute;width:1px}@keyframes timer{100%{transform:translateX(-100%)}}@keyframes indeterminate{0%{transform:translateX(100%) scaleX(1)}30%{transform:translateX(170%) scaleX(1.75)}70%{transform:translateX(500%) scaleX(0.1)}100%{transform:translateX(500%) scaleX(0.1)}}";

const CToast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.close = createEvent(this, "close", 7);
    this._closed = false;
    this._icons = {
      close: mdiClose,
      warning: mdiAlert,
      error: mdiCloseCircle,
      success: mdiCheckCircle,
      info: mdiInformation,
    };
    this.message = undefined;
  }
  async closeToast() {
    if (this._closed)
      return;
    this._closed = true;
    this.el.classList.remove('show');
    this.el.ontransitionend = () => this.close.emit(this.message);
  }
  componentDidLoad() {
    window.requestAnimationFrame(() => {
      this.el.classList.add('show');
    });
    if (this.message.persistent || this.message.indeterminate)
      return;
    this._startTime = Date.now();
    this._remainingTime = this.message.duration;
    this._timeout = window.setTimeout(() => this.closeToast(), +this.message.duration);
  }
  disconnectedCallback() {
    window.clearTimeout(this._timeout);
  }
  _onMouseEnter() {
    if (this.message.persistent || this.message.indeterminate)
      return;
    this._remainingTime = this._remainingTime - (Date.now() - this._startTime);
    window.clearTimeout(this._timeout);
  }
  _onMouseLeave() {
    if (this.message.persistent || this.message.indeterminate)
      return;
    this._startTime = Date.now();
    this._timeout = window.setTimeout(() => this.closeToast(), this._remainingTime);
  }
  _renderCloseButton() {
    const Tag = !!this.message.closeText ? 'c-button' : 'c-icon-button';
    return (h(Tag, { "aria-label": "close", size: "small", text: true, onClick: () => this.closeToast() }, h("svg", Object.assign({}, Object.assign({}, (!!this.message.closeText && { slot: 'icon' })), { "aria-hidden": "true", viewBox: "0 0 24 24" }), h("path", { d: this._icons.close })), this.message.closeText));
  }
  render() {
    const showProgressBar = !this.message.persistent && this.message.progress;
    return (h(Host, { id: `c-toast--${this.message.id}`, class: { [this.message.type]: true }, role: "alert", "aria-atomic": "true", "aria-live": "assertive", onMouseEnter: () => this._onMouseEnter(), onMouseLeave: () => this._onMouseLeave() }, h("span", { class: "visuallyhidden" }, this.message.type, " notification"), this.message.custom ? (h("div", { class: "c-toast__custom-item" }, h("div", { class: "c-toast__content" }, h("slot", null)))) : (h("div", { class: "c-toast__item" }, h("svg", { viewBox: "0 0 24 24" }, h("path", { d: this._icons[this.message.type] })), h("div", { class: "c-toast__content" }, !!this.message.title && h("p", null, this.message.title), this.message.message), !this.message.indeterminate && this._renderCloseButton())), showProgressBar && (h("div", { class: "c-toast__progress", style: { '--c-toast-duration': `${this.message.duration}ms` } }, h("div", { class: {
        'c-toast__progress__bar': true,
        indeterminate: this.message.indeterminate,
      } })))));
  }
  get el() { return getElement(this); }
};
CToast.style = cToastCss;

export { CToast as c_toast };

//# sourceMappingURL=c-toast.entry.js.map
