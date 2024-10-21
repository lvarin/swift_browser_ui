'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-682790de.js');

const cStepsCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(128, 128, 128);--csc-primary:#002f5f;--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{width:100%;display:grid;gap:8px;border-radius:6px}@supports selector(:focus-within){:host(:focus){outline:none}}:host(:focus-within){outline:2px var(--csc-primary) solid;outline-offset:2px}.c-steps{--c-step-line-color:var(--csc-mid-grey);--c-step-before-color:var(--csc-mid-grey);--c-step-after-color:var(--csc-mid-grey);--c-step-divider-width:calc(100% + 160px);--c-step-divider-margin:10px -80px 0;width:100%;display:flex;flex-wrap:nowrap}.c-steps slot{display:flex;justify-items:space-between;width:100%}.c-steps ::slotted(.divider){height:2px;flex:1;background-color:var(--c-step-line-color);width:var(--c-step-divider-width);margin:var(--c-step-divider-margin)}.c-steps ::slotted(.divider.complete){background-color:var(--csc-primary);height:4px;margin-top:9px}.c-steps.mobile{--c-step-divider-width:calc(100% + 11px);--c-step-divider-margin:10px -10px 0}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}";

const CSteps = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.changeValue = index.createEvent(this, "changeValue", 3);
    this._isInitialized = false;
    this.value = undefined;
    this.isMobile = false;
    this.label = '';
  }
  watchPropHandler() {
    this._handleDividers();
  }
  _handleDividers() {
    this._stepElements = this.host.querySelectorAll('c-step');
    const dividers = this.host.querySelectorAll('.divider');
    this._stepElements.forEach((item, index) => {
      item.current = index + 1 === +this.value;
      item.complete = index + 1 < +this.value;
      if (index + 1 < this._stepElements.length) {
        const div = this._isInitialized
          ? dividers[index]
          : document.createElement('div');
        div.classList.toggle('complete', !!item.complete);
        if (!this._isInitialized) {
          div.classList.add('divider');
          item.after(div);
        }
      }
      if (item.current) {
        this.label = item.textContent;
      }
    });
    this._isInitialized = true;
  }
  componentDidLoad() {
    this._handleDividers();
    this._resizeObserver = new ResizeObserver(([entry]) => {
      const maxWidth = this._stepElements.length * 180;
      this.isMobile = maxWidth > entry.contentRect.width;
      this.host.shadowRoot
        .querySelector('.c-steps')
        .classList.toggle('mobile', this.isMobile);
      this._stepElements.forEach((node) => {
        node.classList.toggle('mobile', this.isMobile);
      });
    });
    window.requestAnimationFrame(() => {
      this._resizeObserver.observe(this.host);
    });
  }
  _getA11yMessage(total, current) {
    return `
      Steps, step ${Math.min(current, total)} of ${total}.
      ${this.label}.
      ${current - 1} step${current - 1 !== 1 ? 's' : ''} marked as completed.
    `;
  }
  render() {
    return (index.h(index.Host, { tabindex: "0" }, this._stepElements && (index.h("span", { class: "visuallyhidden" }, this._getA11yMessage(this._stepElements.length, +this.value))), index.h("div", { class: "c-steps", "aria-hidden": "true" }, index.h("slot", null)), this.isMobile && (index.h("div", { class: "c-steps__label", "aria-hidden": "true" }, this.label))));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["watchPropHandler"]
  }; }
};
CSteps.style = cStepsCss;

exports.c_steps = CSteps;

//# sourceMappingURL=c-steps.cjs.entry.js.map
