import { mdiCloseCircle } from "@mdi/js";
import { Host, h } from "@stencil/core";
export class CMessage {
  constructor() {
    this._validationIcon = (h("svg", { height: "16px", width: "16px", viewBox: "0 0 24 24" }, h("path", { d: mdiCloseCircle })));
    this.hint = '';
    this.inputId = undefined;
    this.valid = true;
    this.validation = 'Required field';
    this.messageOptions = {
      show: true,
      type: 'hint',
      content: '',
    };
  }
  onValidChange(valid) {
    this._handleValidation(valid);
  }
  onValidationMessageChange(message) {
    if (this.valid || !message)
      return;
    this.messageOptions = Object.assign(Object.assign({}, this.messageOptions), { content: (h("span", null, h("span", { class: "visuallyhidden" }, "Error: "), this._validationIcon, " ", message)) });
  }
  onHintMessageChange(message) {
    if (!this.valid || !message)
      return;
    this.messageOptions = Object.assign(Object.assign({}, this.messageOptions), { content: (h("span", null, h("span", { class: "visuallyhidden" }, "Hint: "), message)) });
  }
  _handleValidation(valid, timeout = 200) {
    this.messageOptions = Object.assign(Object.assign({}, this.messageOptions), { show: false });
    setTimeout(() => {
      this.messageOptions = Object.assign(Object.assign({}, this.messageOptions), { type: valid ? 'hint' : 'error', show: true, content: valid ? (h("span", { id: `hint-${this.inputId}` }, h("span", { class: "visuallyhidden" }, "Hint: "), this.hint)) : (h("span", { id: `error-${this.inputId}` }, this._validationIcon, h("span", { class: "visuallyhidden" }, "Error: "), this.validation)) });
    }, timeout);
  }
  componentDidLoad() {
    this._handleValidation(this.valid, 0);
  }
  render() {
    const classes = {
      'c-message': true,
      'c-message--active': this.messageOptions.show,
    };
    const messageClasses = {
      'c-message-item': true,
      [`c-message-item--${this.messageOptions.type}`]: true,
    };
    return (h(Host, null, h("div", { class: classes }, h("div", { class: messageClasses }, this.messageOptions.content))));
  }
  static get is() { return "c-message"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-message.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-message.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "Id of the related input element"
        },
        "attribute": "input-id",
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
          "text": "Parent valid\u00EDty"
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
      "messageOptions": {}
    };
  }
  static get watchers() {
    return [{
        "propName": "valid",
        "methodName": "onValidChange"
      }, {
        "propName": "validation",
        "methodName": "onValidationMessageChange"
      }, {
        "propName": "hint",
        "methodName": "onHintMessageChange"
      }];
  }
}
//# sourceMappingURL=c-message.js.map
