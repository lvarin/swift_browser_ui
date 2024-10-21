import { Host, h } from "@stencil/core";
export class COption {
  constructor() {
    this.selected = false;
    this.disabled = false;
    this.name = undefined;
    this.value = undefined;
  }
  render() {
    return (h(Host, { tabindex: "-1" }, h("slot", null)));
  }
  static get is() { return "c-option"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-option.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-option.css"]
    };
  }
  static get properties() {
    return {
      "selected": {
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
          "text": "Set option as selected"
        },
        "attribute": "selected",
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
          "text": "Set option as disabled"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "Option name"
        },
        "attribute": "name",
        "reflect": false
      },
      "value": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "string | number",
          "resolved": "number | string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Option value"
        },
        "attribute": "value",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=c-option.js.map
