import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const cProgressBarCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(128, 128, 128);--csc-primary:#002f5f;--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{--bar-color:var(--csc-primary);--bg-color:var(--csc-light-grey);--border-size:4px;--height:16px;--value:0%;align-items:center;display:flex;flex-wrap:wrap}.c-progress{position:relative;background-color:var(--bg-color);border-radius:var(--height);box-shadow:0 0 0 var(--border-size) var(--bg-color);flex-basis:100%;height:calc(var(--height) - var(--border-size) * 2);margin:var(--border-size);opacity:0.75;overflow:hidden;transform:translateZ(0);width:calc(100% - var(--border-size) * 2);}.c-progress.adjacent-details{flex:1}.c-progress__percentage{flex-basis:100%;font-size:14px;margin-top:2px;text-align:end;white-space:nowrap;padding-left:16px}.c-progress__percentage--negative{color:var(--csc-error)}.c-progress__percentage.adjacent-details{flex:0}.c-progress progress{background-color:var(--bar-color);border-radius:var(--height);width:100%;background-color:transparent;overflow:hidden;height:calc(var(--height) - var(--border-size) * 2);position:absolute;border:none}@supports selector(:focus-within){.c-progress progress:focus{outline:none}}.c-progress:focus-within{outline:2px var(--csc-primary) solid;outline-offset:6px}.c-progress ::-webkit-progress-bar{background-color:transparent}.c-progress ::-webkit-progress-value{transition:width 0.3s ease-in-out;background-color:var(--bar-color);border-radius:var(--height)}.c-progress ::-moz-progress-bar{transition:padding-bottom 1s;padding-left:60px;padding-bottom:var(--value);background-color:var(--bar-color);height:0;transform-origin:0 0;transform:rotate(-90deg) translateX(-60px)}.c-progress :indeterminate::-moz-progress-bar{width:0}.c-progress--indeterminate::before{content:\"\";position:absolute;background-color:var(--bar-color);border-radius:var(--height);left:-100%;height:100%;transform:translateX(var(--value, 0%));transition:transform 0.3s ease-in-out;animation:indeterminateAnimation 2s infinite linear;width:50%;transform-origin:0% 50%}@keyframes indeterminateAnimation{0%{transform:translateX(100%) scaleX(1)}30%{transform:translateX(170%) scaleX(1.75)}70%{transform:translateX(500%) scaleX(0.1)}100%{transform:translateX(500%) scaleX(0.1)}}";

const CProgressBar$1 = proxyCustomElement(class CProgressBar extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.value = 0;
    this.hideDetails = false;
    this.singleLine = false;
    this.label = '';
    this.color = undefined;
    this.indeterminate = false;
  }
  _getSafeValue() {
    if (this.value >= 0 && this.value <= 100)
      return this.value;
    if (this.value < 0)
      return 0;
    return 100;
  }
  render() {
    const value = this._getSafeValue();
    const style = {
      '--value': `${value}%`,
      '--bar-color': this.color ? this.color : null,
    };
    const classes = {
      'c-progress': true,
      'c-progress--indeterminate': this.indeterminate,
      'adjacent-details': this.singleLine,
    };
    const detailsClasses = {
      'c-progress__percentage': true,
      'c-progress__percentage--negative': this.value < 0,
      'adjacent-details': this.singleLine,
    };
    const a11y = {
      'aria-busy': (!this.indeterminate).toString(),
      title: `${value} %`,
    };
    const params = {
      role: 'progressbar',
      max: '100',
    };
    if (!this.indeterminate) {
      params.value = value.toString();
      params['aria-valuenow'] = value.toString();
    }
    return (h(Host, Object.assign({}, a11y), h("label", { class: classes, style: style }, h("progress", Object.assign({}, params), !this.indeterminate && `${value}%`)), !this.indeterminate && !this.hideDetails && (h("div", { class: detailsClasses }, this.value, " % ", this.label))));
  }
  static get style() { return cProgressBarCss; }
}, [1, "c-progress-bar", {
    "value": [2],
    "hideDetails": [4, "hide-details"],
    "singleLine": [4, "single-line"],
    "label": [1],
    "color": [1],
    "indeterminate": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-progress-bar"];
  components.forEach(tagName => { switch (tagName) {
    case "c-progress-bar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CProgressBar$1);
      }
      break;
  } });
}

const CProgressBar = CProgressBar$1;
const defineCustomElement = defineCustomElement$1;

export { CProgressBar, defineCustomElement };

//# sourceMappingURL=c-progress-bar.js.map
