import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './c-message2.js';

const cInputCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(128, 128, 128);--csc-primary:#002f5f;--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:block;cursor:text}:host([disabled]) ::slotted(input),:host([disabled]) ::slotted(textarea){color:rgba(0, 0, 0, 0.5)}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.c-input{--c-color:rgba(0, 0, 0, 0.87);--c-input-border-width:1px;align-items:flex-start;display:flex;flex:1 1 auto;font-family:\"museo-sans\", sans-serif;font-size:16px;letter-spacing:normal;max-width:100%;text-align:left;border-radius:4px}.c-input input,.c-input select,.c-input textarea{margin:0;border:0;padding:0;display:inline-block;vertical-align:middle;white-space:normal;background:none;line-height:1;font-size:16px;font-family:\"museo-sans\", sans-serif}.c-input input,.c-input textarea{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.c-input input[type=checkbox],.c-input input[type=radio],.c-input select{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.c-input input[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;box-sizing:content-box}.c-input ::-webkit-search-decoration{display:none}.c-input textarea{vertical-align:top;overflow:auto}.c-input input{max-height:32px;padding:8px 0 8px}.c-input textarea{margin-top:4px;min-height:44px;padding:8px 12px 8px 0;resize:vertical}.c-input input,.c-input textarea{background-color:transparent;border:none;color:rgba(0, 0, 0, 0.87);flex:1 1 auto;font-family:\"museo-sans\", sans-serif;font-size:16px;line-height:20px;max-width:100%;min-width:0;width:100%}.c-input input:focus,.c-input input:active,.c-input textarea:focus,.c-input textarea:active{outline:none}.c-input .c-input__content{align-items:center;display:flex;width:100%}.c-input__control{border-radius:inherit;color:currentColor;display:flex;flex-direction:column;flex-grow:1;flex-wrap:wrap;gap:8px;height:auto;min-width:0;width:100%}.c-input__slot{align-items:stretch;background:transparent;border-radius:inherit;color:inherit;cursor:text;display:flex;min-height:44px;padding:0 12px;position:relative;transition:0.3s cubic-bezier(0.25, 0.8, 0.5, 1);width:100%}.c-input__slot .click-trap{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(128, 255, 0, 0.295)}.c-input__field{align-items:center;display:flex;flex:1 1 auto;gap:8px;position:relative}.c-input__field input,.c-input__field textarea{flex:1;outline:0}.c-input__field label{font-size:16px;height:20px;left:0px;letter-spacing:normal;line-height:20px;max-width:90%;min-height:8px;overflow:hidden;pointer-events:none;position:absolute;right:auto;text-overflow:ellipsis;top:12px;transform-origin:top left;transform:translateX(var(--c-label-position)) translateY(0) scale(1);transition:0.3s cubic-bezier(0.25, 0.8, 0.5, 1);white-space:nowrap}.c-input__field label.active{transform:translateY(-18px) scale(0.75)}.c-input__field label span{color:var(--csc-error)}.c-input--select .c-input__slot{cursor:pointer}.c-input fieldset{border-collapse:collapse;border-color:currentColor;border-radius:inherit;border-style:solid;border-width:var(--c-input-border-width);bottom:0;left:0;margin:0;padding-left:8px;padding:0;pointer-events:none;position:absolute;right:0;top:0;transition-duration:0.15s;transition-property:color;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1)}.c-input fieldset legend{float:none;line-height:11px;margin-left:7px;padding:0;text-align:left;transition:width 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);width:0}.c-input fieldset legend.active{width:var(--c-legend-width)}.c-input--shadow .c-input__slot{background:#fff;box-shadow:rgba(0, 0, 0, 0.15) 0px 5px 15px 0px}.c-input--shadow .c-input__slot:focus-within{outline:2px var(--csc-primary) solid}.c-input--disabled input,.c-input--disabled textarea,.c-input--disabled fieldset,.c-input--disabled label{--csc-error:rgba(0, 0, 0, 0.5);color:rgba(0, 0, 0, 0.5)}.c-input--textarea .c-input__field{margin-right:-12px}.c-input ::placeholder{color:rgba(0, 0, 0, 0.46);opacity:1}.c-input:focus-within,.c-input:not(.c-input--disabled):active{--c-input-border-width:2px;--c-color:var(--csc-primary);color:var(--csc-primary)}.c-input:focus-within label,.c-input:not(.c-input--disabled):active label{transform:translateX(0px) translateY(-18px) scale(0.75)}.c-input:focus-within legend,.c-input:not(.c-input--disabled):active legend{width:var(--c-legend-width)}.c-input--error{color:var(--csc-error)}.c-input--error:focus-within{color:var(--csc-error)}";

const CInput = proxyCustomElement(class CInput extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.changeValue = createEvent(this, "changeValue", 3);
    this._hasBlurred = false;
    this._debounce = null;
    this._observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this._calculateElementWidths();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 1 });
    this._onBlur = () => {
      setTimeout(() => {
        this.isFocused = false;
        this._hasBlurred = true;
        this._onReset();
      }, 100);
    };
    this._onFocus = (click = true) => {
      var _a, _b;
      if (this.disabled)
        return;
      this.isFocused = true;
      (_a = this.inputField) === null || _a === void 0 ? void 0 : _a.focus();
      if (click)
        (_b = this.inputField) === null || _b === void 0 ? void 0 : _b.click();
      if (this.inputField) {
        this.inputField.placeholder =
          !!this.value || !this.placeholder ? '' : this.placeholder;
      }
    };
    this.autofocus = false;
    this.disabled = false;
    this.form = false;
    this.hideDetails = false;
    this.hint = '';
    this.hostId = undefined;
    this.inputId = undefined;
    this.label = undefined;
    this.max = null;
    this.min = null;
    this.name = undefined;
    this.number = false;
    this.placeholder = undefined;
    this.readonly = false;
    this.required = false;
    this.rows = 1;
    this.shadow = false;
    this.step = null;
    this.type = undefined;
    this.valid = true;
    this.validate = false;
    this.validateOnBlur = false;
    this.validation = 'Required field';
    this.value = undefined;
    this.variant = 'text';
    this.isFocused = false;
    this.labelWidth = 0;
    this.preSlotWidth = 0;
    this.statusText = '';
  }
  onValidChange() {
    if (this.validateOnBlur && !this._hasBlurred)
      return;
    this._setAriaDescriptionId();
  }
  onValidationMessageChange() {
    this._updateStatusText();
  }
  onValueChange(value) {
    if (!value)
      this._onReset();
  }
  onPlaceholderChange(placeholder) {
    if (placeholder)
      this._onReset();
  }
  componentDidLoad() {
    var _a, _b, _c, _d;
    if (this.autofocus) {
      setTimeout(() => {
        this._onFocus(false);
      }, 500);
    }
    this._calculateElementWidths();
    this._setAriaDescriptionId();
    if (this.label) {
      this._observer.observe(this._labelRef);
    }
    (_a = this.inputField) === null || _a === void 0 ? void 0 : _a.addEventListener('focus', () => this._onFocus(false));
    (_b = this.inputField) === null || _b === void 0 ? void 0 : _b.addEventListener('blur', () => this._onBlur());
    (_c = this.inputField) === null || _c === void 0 ? void 0 : _c.addEventListener('keypress', this._preventNonNumericalInput);
    if (this.inputField) {
      this.inputField.placeholder =
        !!this.label || !this.placeholder ? '' : this.placeholder;
      this.inputField.title = (_d = this.label) !== null && _d !== void 0 ? _d : this.placeholder;
    }
  }
  disconnectedCallback() {
    var _a, _b, _c;
    (_a = this.inputField) === null || _a === void 0 ? void 0 : _a.removeEventListener('focus', () => this._onFocus(false));
    (_b = this.inputField) === null || _b === void 0 ? void 0 : _b.removeEventListener('blur', () => this._onBlur());
    (_c = this.inputField) === null || _c === void 0 ? void 0 : _c.removeEventListener('keypress', this._preventNonNumericalInput);
    this._observer.disconnect();
  }
  get isActive() {
    return !!this.value || typeof this.value === 'boolean' || this.isFocused;
  }
  _setAriaDescriptionId() {
    this.inputField.removeAttribute('aria-describedby');
    let type = null;
    if (this.valid && !this.value && this.hint) {
      type = 'hint';
    }
    if (!this.valid) {
      type = 'error';
    }
    if (type) {
      this.inputField.setAttribute('aria-describedby', `${type}-${this.inputId}`);
    }
  }
  _calculateElementWidths() {
    this.labelWidth = !!this.label ? this._labelRef.scrollWidth * 0.75 + 6 : 0;
    this.preSlotWidth = this.inputField.offsetLeft;
  }
  _onReset() {
    if (this.inputField) {
      this.inputField.placeholder =
        !this.label && !this.value && !!this.placeholder
          ? this.placeholder
          : '';
    }
  }
  _preventNonNumericalInput(event) {
    if (this.type !== 'number')
      return;
    if (!event.key.match(/^[0-9,\.]+$/))
      event.preventDefault();
  }
  _renderBorders() {
    if (this.shadow)
      return;
    const classes = {
      active: this.isActive,
    };
    return (h("fieldset", { "aria-hidden": "true" }, h("legend", { class: classes, style: {
        '--c-legend-width': this.labelWidth + 'px',
      } }, h("span", { class: "notranslate" }))));
  }
  _renderLabel() {
    if (!this.label)
      return;
    const classes = {
      active: this.isActive,
    };
    return (h("label", { htmlFor: this.inputId, ref: (el) => (this._labelRef = el), class: classes }, this.label, this.required && h("span", null, "\u00A0*")));
  }
  get inputField() {
    var _a;
    return (_a = this.hiddenEl) === null || _a === void 0 ? void 0 : _a.querySelector('.c-input__input');
  }
  _updateStatusText() {
    if (this._debounce !== null) {
      clearTimeout(this._debounce);
      this._debounce = null;
    }
    this._debounce = window.setTimeout(() => {
      this.statusText = this.valid ? '' : `Error: ${this.validation}`;
      this._debounce = null;
    }, 1400);
  }
  render() {
    const containerClasses = {
      'c-input': true,
      'c-input--disabled': this.disabled,
      'c-input--shadow': this.shadow,
      'c-input--textarea': this.rows > 1,
      'c-input--error': !this.valid,
      [`c-input--${this.variant}`]: true,
    };
    return (h(Host, { disabled: this.disabled }, h("div", { id: 'announce-' + this.inputId, class: "visuallyhidden", "aria-live": "polite", "aria-atomic": "true" }, this.statusText), h("div", { class: containerClasses }, h("div", { class: "c-input__control" }, h("div", { class: "c-input__slot", onClick: () => this._onFocus() }, this._renderBorders(), h("div", { class: "c-input__field", style: {
        '--c-label-position': this.preSlotWidth + 'px',
      } }, h("slot", { name: "pre" }), this._renderLabel(), h("slot", null), h("slot", { name: "post" }))), !this.hideDetails && (h("c-message", { hint: this.hint, inputId: this.inputId, valid: this.valid, validation: this.validation }))))));
  }
  get hiddenEl() { return this; }
  static get watchers() { return {
    "valid": ["onValidChange"],
    "validation": ["onValidationMessageChange"],
    "value": ["onValueChange"],
    "placeholder": ["onPlaceholderChange"]
  }; }
  static get style() { return cInputCss; }
}, [4, "c-input", {
    "autofocus": [4],
    "disabled": [4],
    "form": [4],
    "hideDetails": [4, "hide-details"],
    "hint": [1],
    "hostId": [1, "id"],
    "inputId": [1, "input-id"],
    "label": [1],
    "max": [2],
    "min": [2],
    "name": [1],
    "number": [4],
    "placeholder": [1],
    "readonly": [4],
    "required": [4],
    "rows": [2],
    "shadow": [4],
    "step": [2],
    "type": [1],
    "valid": [4],
    "validate": [4],
    "validateOnBlur": [4, "validate-on-blur"],
    "validation": [1],
    "value": [8],
    "variant": [1],
    "isFocused": [32],
    "labelWidth": [32],
    "preSlotWidth": [32],
    "statusText": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-input", "c-message"];
  components.forEach(tagName => { switch (tagName) {
    case "c-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CInput);
      }
      break;
    case "c-message":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { CInput as C, defineCustomElement as d };

//# sourceMappingURL=c-input2.js.map
