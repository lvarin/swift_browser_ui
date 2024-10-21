import { r as registerInstance, c as createEvent, h, H as Host } from './index-548fbd48.js';

const cOtpInputCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(128, 128, 128);--csc-primary:#002f5f;--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{--c-otp-input-height:56px;--c-otp-input-width:42px;display:block}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.c-otp-input{backface-visibility:hidden;transform:translate3d(0, 0, 0);display:inline-grid;grid-auto-flow:column;grid-auto-columns:minmax(auto, var(--c-otp-input-width));gap:8px;margin-bottom:8px}.c-otp-input--hide-details{margin-bottom:0}.c-otp-input input{height:var(--c-otp-input-height);width:100%;min-width:24px;max-width:var(--c-otp-input-width);text-align:center;border-radius:4px;font-size:24px;box-shadow:inset 0 0 0 1px var(--csc-dark-grey);border:none}.c-otp-input input:focus{box-shadow:inset 0 0 0 2px var(--csc-primary);outline:none}.c-otp-input c-message{grid-row:2;grid-column:1/span var(--c-otp-input-count)}";

const COtpInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.changeValue = createEvent(this, "changeValue", 3);
    this.completion = createEvent(this, "completion", 3);
    this._backSpacePressed = false;
    this._debounce = null;
    this._isPasting = false;
    this._inputs = new Array(this.length).fill(null);
    this._value = '';
    this.hideDetails = false;
    this.hint = '';
    this.elementId = undefined;
    this.length = 6;
    this.valid = true;
    this.validation = 'Required field';
    this.statusText = '';
  }
  onValidationMessageChange() {
    this._updateStatusText();
  }
  _emitValue() {
    requestAnimationFrame(() => {
      this._value = [...this._inputs].map((input) => input.value).join('');
      const isFullyFilled = this._value.length === this.length;
      this.changeValue.emit(isFullyFilled ? this._value : null);
      if (isFullyFilled) {
        this.completion.emit(this._value || null);
      }
      this._updateStatusText();
    });
  }
  _getElements(event) {
    const target = event.target;
    const nextElement = target.nextElementSibling;
    const previousElement = target.previousElementSibling;
    return { target, nextElement, previousElement };
  }
  _onFocus(index) {
    this._inputs[index].select();
  }
  _onKeyDown(event) {
    this._backSpacePressed = false;
    const { target, previousElement } = this._getElements(event);
    if (event.key === 'Backspace') {
      this._backSpacePressed = true;
      if (previousElement && !target.value) {
        previousElement.focus();
      }
      this._emitValue();
    }
  }
  get id() {
    return this.elementId || `c-otp-input--${COtpInput._uniqueId}`;
  }
  _onInput(event) {
    const { target, nextElement, previousElement } = this._getElements(event);
    if (isNaN(+target.value)) {
      event.preventDefault();
      target.value = null;
      return;
    }
    if (this._isPasting) {
      this._isPasting = false;
      return;
    }
    if (this._backSpacePressed) {
      return;
    }
    if (event.data) {
      nextElement === null || nextElement === void 0 ? void 0 : nextElement.focus();
    }
    else {
      previousElement === null || previousElement === void 0 ? void 0 : previousElement.focus();
    }
    this._emitValue();
  }
  _onPaste(event) {
    event.preventDefault();
    const pasteData = event.clipboardData.getData('text');
    if (isNaN(+pasteData)) {
      return;
    }
    this._isPasting = true;
    for (const [index, value] of pasteData.split('').entries()) {
      if (index >= this._inputs.length) {
        continue;
      }
      this._inputs[index].value = null;
      this._inputs[index].value = value;
    }
    const nextElementIndex = Math.min(this.length, pasteData.length) - 1;
    requestAnimationFrame(() => {
      this._inputs[nextElementIndex].focus();
      this._emitValue();
    });
  }
  _updateStatusText() {
    if (this._debounce !== null) {
      clearTimeout(this._debounce);
      this._debounce = null;
    }
    this._debounce = window.setTimeout(() => {
      this.statusText = this.valid ? '' : `Error: ${this.validation} `;
      this.statusText += `Currently entered - ${this._value
        .split('')
        .join(' - ')}`;
      this.statusText = this.statusText.trim();
      this._debounce = null;
    }, 1400);
  }
  _renderInput(index) {
    return (h("input", { id: `c-otp-input--${COtpInput._uniqueId}-${index + 1}`, ref: (el) => (this._inputs[index] = el), "aria-label": `Enter code - digit number - ${index + 1} of ${this.length}`, type: "tel", maxlength: "1", onFocus: () => this._onFocus(index), onInput: (event) => this._onInput(event), onKeyDown: (event) => this._onKeyDown(event), onPaste: (event) => index === 0 && this._onPaste(event) }));
  }
  componentWillLoad() {
    COtpInput._uniqueId += 1;
  }
  render() {
    const classes = {
      'c-otp-input': true,
      'c-otp-input--hide-details': this.hideDetails,
    };
    return (h(Host, { id: this.id, style: { '--c-otp-input-count': this.length.toString() } }, h("div", { id: 'announce-' + this.id, class: "visuallyhidden", "aria-live": "polite", "aria-atomic": "true" }, this.statusText), h("div", { class: classes }, new Array(this.length)
      .fill(0)
      .map((_, index) => this._renderInput(index)), h("c-message", { hint: this.hint, inputId: this.elementId, valid: this.valid, validation: this.validation }))));
  }
  static get watchers() { return {
    "validation": ["onValidationMessageChange"]
  }; }
};
COtpInput._uniqueId = 0;
COtpInput.style = cOtpInputCss;

export { COtpInput as c_otp_input };

//# sourceMappingURL=c-otp-input.entry.js.map
