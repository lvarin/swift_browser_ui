import { r as registerInstance, h, H as Host } from './index-548fbd48.js';

const cTagCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(128, 128, 128);--csc-primary:#002f5f;--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{--c-tag-margin:2px;display:inline-block;cursor:pointer;user-select:none;margin:var(--c-tag-margin)}:host(.fit){display:block;flex-grow:1}:host(.flat){cursor:inherit}:host(:focus){outline:none}:host(:focus-visible){outline:1px black solid}svg{width:14px;height:14px}.row{display:flex;align-items:center;column-gap:8px}.c-tag{background:transparent;border-radius:15px;box-shadow:inset 0px 0px 0px 1px var(--csc-primary);color:var(--csc-primary);display:flex;font-size:14px;font-weight:400;line-height:1.1;min-height:24px;padding:4px 12px;transition:background-color 0.2s ease}.c-tag:hover{background:var(--csc-primary-text-hover);color:var(--csc-primary)}.c-tag.active{background:var(--csc-primary);color:#fff}.c-tag.active:hover{background:#50978d;color:#fff;box-shadow:none}.c-tag.active .badge{background-color:#fff;color:var(--csc-primary)}.c-tag.flat:hover{background:transparent}.c-tag.flat.active:hover{background:var(--csc-primary)}.c-tag .badge{background-color:var(--csc-primary);border-radius:24px;color:#fff;display:grid;font-size:12px;height:16px;line-height:1;min-width:16px;padding:0 4px;place-content:center}.c-tag--badge{padding-left:4px}.c-tag--closeable{padding-right:8px}";

const CTag = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.active = false;
    this.fit = false;
    this.flat = false;
    this.closeable = false;
    this.badge = null;
  }
  render() {
    const classes = {
      'c-tag': true,
      'c-tag--closeable': this.closeable,
      'c-tag--badge': !!this.badge || this.badge === 0,
      active: this.active,
      flat: this.flat,
    };
    const hostClasses = {
      fit: this.fit,
      flat: this.flat,
    };
    const hostParams = Object.assign({ tabindex: 0 }, (!this.flat && {
      role: 'button',
    }));
    return (h(Host, Object.assign({ tabindex: "0" }, hostParams, { class: hostClasses }), h("div", { class: classes }, h("div", { class: "row" }, !!this.badge && h("div", { class: "badge" }, this.badge), h("slot", null), this.closeable && (h("svg", { viewBox: "0 0 24 24" }, h("path", { fill: "currentColor", d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" })))))));
  }
};
CTag.style = cTagCss;

export { CTag as c_tag };

//# sourceMappingURL=c-tag.entry.js.map
