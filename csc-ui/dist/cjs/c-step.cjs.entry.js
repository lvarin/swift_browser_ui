'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-682790de.js');

const cStepCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(128, 128, 128);--csc-primary:#002f5f;--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{position:relative;width:180px}:host(.mobile){width:22px;height:22px}:host(.mobile) .c-step__label{display:none}.c-step{--c-step-line-color:var(--csc-mid-grey);display:grid;justify-items:center;padding:0;gap:8px;position:relative;box-sizing:border-box}.c-step__indicator{box-sizing:border-box}.c-step__indicator .dot{background-color:#fff;box-shadow:inset 0 0 0 2px var(--c-step-line-color);border-radius:22px;height:22px;width:22px;position:relative}.c-step__indicator .dot.current{--c-step-line-color:var(--csc-primary);box-shadow:inset 0 0 0 3px var(--c-step-line-color)}.c-step__indicator .dot.current::before{content:\"\";border-radius:14px;height:10px;width:10px;background-color:var(--c-step-line-color);position:absolute;top:6px;left:6px}.c-step__indicator .complete{display:flex;align-items:center;justify-content:center;box-sizing:border-box}.c-step__indicator .complete svg{width:100%;height:100%}.c-step--complete .c-step__indicator>div{--c-step-line-color:var(--csc-primary);position:relative;border-radius:22px;height:22px;width:22px;background-color:var(--c-step-line-color);padding:4px}.c-step--complete .c-step__indicator>div svg{position:relative;fill:#fff}.c-step--complete .c-step__indicator>div svg .path{fill:none;stroke:#fff;stroke-dashoffset:0;stroke-width:13;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}";

const CStep = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.complete = false;
    this.current = false;
  }
  render() {
    const rootClasses = {
      'c-step': true,
      'c-step--complete': this.complete,
    };
    return (index.h("div", { class: rootClasses }, index.h("div", { class: "c-step__indicator" }, !this.complete && (index.h("div", { class: { dot: true, current: this.current } })), this.complete && (index.h("div", { class: "complete" }, index.h("svg", { viewBox: "0 0 100 100" }, index.h("path", { class: "path", d: "M 12 52 l 24 24 l 47 -47 l -3 -3 l -44 44 l -21 -21 l -3 3" }))))), index.h("div", { class: "c-step__label" }, index.h("slot", null))));
  }
};
CStep.style = cStepCss;

exports.c_step = CStep;

//# sourceMappingURL=c-step.cjs.entry.js.map
