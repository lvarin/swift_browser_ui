import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const cTabsCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(128, 128, 128);--csc-primary:#002f5f;--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host(.c-tabs){box-shadow:inset 0 -1px 0 0 var(--csc-light-grey);display:flex;list-style:none;margin:0;padding:0}:host(.c-tabs--borderless){box-shadow:none}";

const CTabs$1 = proxyCustomElement(class CTabs extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.changeValue = createEvent(this, "changeValue", 3);
    this.value = undefined;
    this.borderless = false;
  }
  onExternalValueChange() {
    this._handleActiveTab();
    this.changeValue.emit(this.value);
  }
  tabChangeHandler(e) {
    this.value = e.detail;
  }
  handleKeyDown(event) {
    if (event.key === 'Enter' || event.code === 'Space') {
      this.value = event.target.value;
    }
  }
  handleKeyUp(ev) {
    const isArrowLeft = ev.key === 'ArrowLeft';
    const isArrowRight = ev.key === 'ArrowRight';
    const tabIndex = this._getTabIndex(this.value);
    const firstAvailableValue = this.availableValues.at(0);
    const lastAvailableValue = this.availableValues.at(-1);
    const isBeginning = this.value === firstAvailableValue;
    const isEnd = this.value === lastAvailableValue;
    const nextValue = isEnd
      ? firstAvailableValue
      : this.availableValues[tabIndex + 1];
    const previousValue = isBeginning
      ? lastAvailableValue
      : this.availableValues[tabIndex - 1];
    if (!isArrowRight && !isArrowLeft)
      return;
    if (isArrowLeft) {
      this.value = previousValue;
    }
    if (isArrowRight) {
      this.value = nextValue;
    }
    this._handleActiveTab(true);
    this.changeValue.emit(this.value);
  }
  componentDidLoad() {
    this._handleActiveTab();
  }
  get tabs() {
    return Array.from(this.el.childNodes).filter((tab) => tab.tagName === 'C-TAB');
  }
  get setsize() {
    return this.tabs.length;
  }
  get availableValues() {
    return this.tabs.filter((tab) => !tab.disabled).map((tab) => tab.value);
  }
  _getTabIndex(value) {
    return this.availableValues.findIndex((tab) => tab === value);
  }
  _handleActiveTab(isUserAction = false) {
    let position = 0;
    this.tabs.forEach((tab) => {
      if (!tab.disabled) {
        position += 1;
      }
      const isActive = tab.value === this.value;
      tab.active = isActive;
      if (!isUserAction && !tab.disabled) {
        tab.position = position;
        tab.setsize = this.availableValues.length;
      }
      if (isActive && isUserAction) {
        tab.focus();
      }
    });
  }
  render() {
    const classes = {
      'c-tabs': true,
      'c-tabs--borderless': this.borderless,
    };
    return (h(Host, { role: "tablist", class: classes }, h("slot", null)));
  }
  get el() { return this; }
  static get watchers() { return {
    "value": ["onExternalValueChange"]
  }; }
  static get style() { return cTabsCss; }
}, [1, "c-tabs", {
    "value": [1032],
    "borderless": [4]
  }, [[1, "tabChange", "tabChangeHandler"], [2, "keydown", "handleKeyDown"], [2, "keyup", "handleKeyUp"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-tabs"];
  components.forEach(tagName => { switch (tagName) {
    case "c-tabs":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CTabs$1);
      }
      break;
  } });
}

const CTabs = CTabs$1;
const defineCustomElement = defineCustomElement$1;

export { CTabs, defineCustomElement };

//# sourceMappingURL=c-tabs.js.map
