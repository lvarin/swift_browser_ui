import { Host, h, } from "@stencil/core";
export class CInput {
  constructor() {
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
  static get is() { return "c-input"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-input.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-input.css"]
    };
  }
  static get properties() {
    return {
      "autofocus": {
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
          "text": "Auto focus the input"
        },
        "attribute": "autofocus",
        "reflect": false,
        "defaultValue": "false"
      },
      "disabled": {
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
          "text": "Disable the input"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "form": {
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
          "text": "Render a hidden input outside the shadow dom"
        },
        "attribute": "form",
        "reflect": false,
        "defaultValue": "false"
      },
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
      "hostId": {
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
          "text": "Id of the input"
        },
        "attribute": "id",
        "reflect": false
      },
      "inputId": {
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
          "text": "Id of the input element"
        },
        "attribute": "input-id",
        "reflect": false
      },
      "label": {
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
          "text": "Label of the input"
        },
        "attribute": "label",
        "reflect": false
      },
      "max": {
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
          "text": "Maximum value on a numeric input"
        },
        "attribute": "max",
        "reflect": false,
        "defaultValue": "null"
      },
      "min": {
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
          "text": "Minimum value on a numeric input"
        },
        "attribute": "min",
        "reflect": false,
        "defaultValue": "null"
      },
      "name": {
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
          "text": "Name of the input"
        },
        "attribute": "name",
        "reflect": false
      },
      "number": {
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
          "tags": [{
              "name": "deprecated",
              "text": "Use type=\"number\" instead"
            }],
          "text": "Numeric input"
        },
        "attribute": "number",
        "reflect": false,
        "defaultValue": "false"
      },
      "placeholder": {
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
          "text": "Placeholder of the input"
        },
        "attribute": "placeholder",
        "reflect": false
      },
      "readonly": {
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
          "text": "Mark as readonly"
        },
        "attribute": "readonly",
        "reflect": false,
        "defaultValue": "false"
      },
      "required": {
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
          "text": "Set the input as required"
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "false"
      },
      "rows": {
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
          "text": "Rows on the input"
        },
        "attribute": "rows",
        "reflect": false,
        "defaultValue": "1"
      },
      "shadow": {
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
          "text": "Shadow variant of the input"
        },
        "attribute": "shadow",
        "reflect": false,
        "defaultValue": "false"
      },
      "step": {
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
          "text": "Step size on a numeric input"
        },
        "attribute": "step",
        "reflect": false,
        "defaultValue": "null"
      },
      "type": {
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
          "text": "Type of the input"
        },
        "attribute": "type",
        "reflect": false
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
      "validate": {
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
          "text": "Manual validation"
        },
        "attribute": "validate",
        "reflect": false,
        "defaultValue": "false"
      },
      "validateOnBlur": {
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
          "text": "Validate the input on blur"
        },
        "attribute": "validate-on-blur",
        "reflect": false,
        "defaultValue": "false"
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
      },
      "value": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "string | number | boolean | CSelectItem | CAutocompleteItem",
          "resolved": "CAutocompleteItem | CSelectItem | boolean | number | string",
          "references": {
            "CSelectItem": {
              "location": "import",
              "path": "../../types",
              "id": "src/types/index.ts::CSelectItem"
            },
            "CAutocompleteItem": {
              "location": "import",
              "path": "../../types",
              "id": "src/types/index.ts::CAutocompleteItem"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Value of the input"
        },
        "attribute": "value",
        "reflect": false
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'text' | 'select'",
          "resolved": "\"select\" | \"text\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Variant"
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "'text'"
      }
    };
  }
  static get states() {
    return {
      "isFocused": {},
      "labelWidth": {},
      "preSlotWidth": {},
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
          "text": "Emit changes to the parent"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "hiddenEl"; }
  static get watchers() {
    return [{
        "propName": "valid",
        "methodName": "onValidChange"
      }, {
        "propName": "validation",
        "methodName": "onValidationMessageChange"
      }, {
        "propName": "value",
        "methodName": "onValueChange"
      }, {
        "propName": "placeholder",
        "methodName": "onPlaceholderChange"
      }];
  }
}
//# sourceMappingURL=c-input.js.map
