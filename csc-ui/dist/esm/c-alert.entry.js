import { r as registerInstance, h, H as Host } from './index-548fbd48.js';
import { h as mdiAlert, i as mdiCloseCircle, j as mdiCheckCircle, k as mdiInformation } from './mdi-bbd6442f.js';

const cAlertCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(128, 128, 128);--csc-primary:#002f5f;--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}.c-alert{--c-alert-color:var(--csc-primary);display:grid;gap:16px;grid-template-columns:1fr;color:var(--c-alert-color);border:2px solid currentColor;border-left-width:12px;border-radius:6px;padding:12px}.c-alert--info,.c-alert--error,.c-alert--success,.c-alert--warning{grid-template-columns:auto 1fr}.c-alert--info{--c-alert-color:var(--csc-link)}.c-alert--error{--c-alert-color:var(--csc-error)}.c-alert--success{--c-alert-color:var(--csc-success)}.c-alert--warning{--c-alert-color:var(--csc-warning)}.c-alert__content{color:rgba(0, 0, 0, 0.87);display:grid;align-items:center;grid-template-columns:1fr;gap:8px}svg{fill:currentColor}::slotted(*[slot=title]){margin:0 !important;font-size:18px;font-weight:600;line-height:24px}";

const CAlert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this._icons = {
      warning: mdiAlert,
      error: mdiCloseCircle,
      success: mdiCheckCircle,
      info: mdiInformation,
    };
    this.type = undefined;
  }
  render() {
    const classes = Object.assign({ 'c-alert': true }, (!!this.type && { [`c-alert--${this.type}`]: true }));
    return (h(Host, null, h("div", { class: classes }, !!this.type && (h("svg", { width: "22", height: "22", viewBox: "0 0 24 24" }, h("path", { d: this._icons[this.type] }))), h("div", { class: "c-alert__content" }, h("slot", { name: "title" }), h("slot", null)))));
  }
};
CAlert.style = cAlertCss;

export { CAlert as c_alert };

//# sourceMappingURL=c-alert.entry.js.map
