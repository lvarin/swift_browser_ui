import { Host, h, } from "@stencil/core";
class COtpInput {
  constructor() {
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
  static get is() { return "c-otp-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-otp-input.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-otp-input.css"]
    };
  }
  static get properties() {
    return {
      "hideDetails": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Hide the hint and error messages"
        },
        "attribute": "hide-details",
        "reflect": false,
        "defaultValue": "false"
      },
      "hint": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Hint text for the input"
        },
        "attribute": "hint",
        "reflect": false,
        "defaultValue": "''"
      },
      "elementId": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Id of the element"
        },
        "attribute": "id",
        "reflect": false
      },
      "length": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Length of the OTP code"
        },
        "attribute": "length",
        "reflect": false,
        "defaultValue": "6"
      },
      "valid": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set the valid\u00EDty of the input"
        },
        "attribute": "valid",
        "reflect": false,
        "defaultValue": "true"
      },
      "validation": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Custom validation message"
        },
        "attribute": "validation",
        "reflect": false,
        "defaultValue": "'Required field'"
      }
    };
  }
  static get states() {
    return {
      "statusText": {}
    };
  }
  static get events() {
    return [{
        "method": "changeValue",
        "name": "changeValue",
        "bubbles": false,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Run on input - returns the current value"
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }, {
        "method": "completion",
        "name": "completion",
        "bubbles": false,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Run on completion - returns the current value"
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "validation",
        "methodName": "onValidationMessageChange"
      }];
  }
  static get stencilHasStaticMembersWithInit() { return true; }
}
COtpInput._uniqueId = 0;
export { COtpInput };
//# sourceMappingURL=c-otp-input.js.map
