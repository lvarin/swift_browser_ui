import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as mdiChevronDown } from './mdi.js';
import { d as defineCustomElement$1 } from './c-menu-items2.js';

const cMenuCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(128, 128, 128);--csc-primary:#002f5f;--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{--c-menu-header-height:38px;--c-menu-padding:0 14px;--c-menu-bg-hover:var(--csc-primary-text-hover);border-radius:4px;color:#595959;display:block;font-size:14px;position:relative;user-select:none}button{border-radius:4px;color:#595959;cursor:pointer;display:block;font-family:\"museo-sans\", sans-serif;position:relative;user-select:none;background:none;border:none;padding:0;margin:0;position:relative;padding:var(--c-menu-padding);border-radius:4px}button:focus{outline:2px var(--csc-primary) solid;outline-offset:2px}@supports selector(:focus-visible){button:focus{outline:none}}button:focus-visible{outline:2px var(--csc-primary) solid;outline-offset:2px}button:hover{background-color:var(--c-menu-bg-hover)}svg{box-sizing:content-box}svg fill{fill:#595959}.c-menu__icon{line-height:20px;transition:transform 0.25s}.c-menu__icon--rotated{transform:rotate(180deg)}.c-menu__header{display:flex;flex:1 1 auto;margin-left:0;align-items:center;gap:8px;height:var(--c-menu-header-height)}:host(.c-menu--simple){--c-menu-padding:0;--c-menu-bg-hover:transparent;background:transparent !important}:host(.c-menu--small){--c-menu-header-height:32px}:host(.c-menu--active) svg,:host(:hover) svg{fill:var(--csc-primary)}:host(.c-menu--no-hover){--c-menu-bg-hover:transparent}.c-menu-overlay{position:fixed;top:0;left:0;bottom:0;right:0;pointer-events:none}.c-menu-overlay__content{position:relative;height:100%;width:100%}";

const CMenu = proxyCustomElement(class CMenu extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.items = [];
    this.simple = false;
    this.small = false;
    this.nohover = false;
    this.itemsPerPage = 6;
    this.customTrigger = undefined;
    this.menuItemsComponent = null;
    this.menuWrapperComponent = null;
    this.currentIndex = null;
    this.active = false;
  }
  handleKeyDown(ev) {
    const openKeys = ['ArrowDown', 'ArrowUp', 'Enter', ' '];
    if (!this.active && openKeys.includes(ev.key)) {
      ev.preventDefault();
      this.currentIndex = null;
      if (ev.key === 'ArrowDown') {
        this.currentIndex = 0;
      }
      if (ev.key === 'ArrowUp') {
        this.currentIndex = this.items.length - 1;
      }
      this._onClick();
    }
    if (ev.key === 'Escape') {
      this._hideMenu();
    }
  }
  _createWrapperElement() {
    const existingOverlay = document.querySelector('.c-menu-overlay__content');
    if (existingOverlay)
      return existingOverlay;
    const overlay = document.createElement('div');
    overlay.classList.add('c-menu-overlay');
    const overlayContent = document.createElement('div');
    overlayContent.classList.add('c-menu-overlay__content');
    overlay.appendChild(overlayContent);
    document.body.appendChild(overlay);
    return overlayContent;
  }
  _getNativeChild(parent = this.host) {
    let element = parent.shadowRoot.children[0];
    if (!!element.shadowRoot) {
      element = this._getNativeChild(element);
    }
    return element;
  }
  _addMenuItemsComponentListeners(height, width) {
    this.menuItemsComponent.onclose = () => {
      this._hideMenu();
      const element = this._getNativeChild();
      element.focus();
    };
    this.menuItemsComponent.addEventListener('open', (event) => this._onOpen(event, height, width), {
      once: true,
    });
  }
  _getHostPosition() {
    return this.host.getBoundingClientRect();
  }
  _hideMenu() {
    var _a;
    (_a = this.menuItemsComponent) === null || _a === void 0 ? void 0 : _a.remove();
    this.menuItemsComponent = null;
    this.active = false;
  }
  _onOpen(event, height, width) {
    window.requestAnimationFrame(() => {
      var _a, _b, _c;
      const { isInView, height: menuHeight, width: menuWidth } = event.detail;
      if (!isInView.y) {
        const posY = parseFloat(this.menuItemsComponent.style.top) - menuHeight - height;
        this.menuItemsComponent.style.top = `${posY}px`;
        this.menuItemsComponent.top = posY;
      }
      if (!isInView.x) {
        this.menuItemsComponent.style.left = `${parseFloat(this.menuItemsComponent.style.left) - menuWidth + width}px`;
      }
      this.active = true;
      this.menuItemsComponent.active = true;
      (_c = (_b = (_a = this.menuItemsComponent) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('ul')) === null || _c === void 0 ? void 0 : _c.focus();
    });
  }
  _onClick() {
    if (this.menuItemsComponent)
      return;
    const { bottom, left, width, height } = this._getHostPosition();
    this.menuItemsComponent = document.createElement('c-menu-items');
    this.menuItemsComponent.style.top = `${bottom}px`;
    this.menuItemsComponent.style.left = `${left}px`;
    this.menuItemsComponent.style.minWidth = `${width}px`;
    this.menuItemsComponent.parent = this.host;
    this.menuItemsComponent.items = this.items;
    this.menuItemsComponent.small = this.small;
    this.menuItemsComponent.itemsPerPage = this.itemsPerPage;
    this.menuItemsComponent.top = bottom;
    this.menuItemsComponent.id = `c-menu-items-${CMenu._uniqueId}`;
    this.menuItemsComponent.index = this.currentIndex;
    this.menuItemsComponent.setAttribute('tabindex', '-1');
    this.menuItemsComponent.setAttribute('role', 'listbox');
    this._addMenuItemsComponentListeners(height, width);
    this._createWrapperElement().appendChild(this.menuItemsComponent);
    window.setTimeout(() => {
      var _a, _b, _c, _d;
      (_d = (_c = (_b = (_a = this.menuItemsComponent) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.children[0]) === null || _c === void 0 ? void 0 : _c.children[0]) === null || _d === void 0 ? void 0 : _d.focus();
    }, 200);
  }
  componentWillLoad() {
    CMenu._uniqueId += 1;
  }
  disconnectedCallback() {
    this._hideMenu();
  }
  _renderCustomTrigger() {
    const props = this.customTrigger;
    const Tag = props.component.tag;
    const params = props.component.params;
    return (h(Tag, Object.assign({}, params, { class: "custom-menu-trigger", "aria-expanded": this.active.toString(), "aria-haspopup": "listbox", "aria-controls": `c-menu-items-${CMenu._uniqueId}`, onClick: () => this._onClick() }), props.value));
  }
  render() {
    const hostClasses = {
      'c-menu': true,
      'c-menu--simple': this.simple,
      'c-menu--active': this.active,
      'c-menu--no-hover': this.nohover,
      'c-menu--small': this.small,
    };
    return (h(Host, { class: hostClasses }, this.customTrigger ? (this._renderCustomTrigger()) : (h("button", { "aria-expanded": this.active.toString(), "aria-haspopup": "listbox", "aria-controls": `c-menu-items-${CMenu._uniqueId}`, class: {
        'c-menu-wrapper': !this.simple,
        simple: this.simple,
      }, tabindex: "0", type: "button", onClick: () => this._onClick() }, this.simple ? (h("slot", null)) : (h("div", { class: "c-menu__header" }, h("slot", null), h("svg", { width: this.small ? '16' : '22', height: this.small ? '16' : '22', viewBox: "0 0 24 24", class: this.active
        ? 'c-menu__icon c-menu__icon--rotated'
        : 'c-menu__icon' }, h("path", { d: mdiChevronDown }))))))));
  }
  get host() { return this; }
  static get style() { return cMenuCss; }
}, [1, "c-menu", {
    "items": [16],
    "simple": [4],
    "small": [4],
    "nohover": [4],
    "itemsPerPage": [2, "items-per-page"],
    "customTrigger": [16],
    "menuItemsComponent": [32],
    "menuWrapperComponent": [32],
    "currentIndex": [32],
    "active": [32]
  }, [[2, "keydown", "handleKeyDown"]]]);
CMenu._uniqueId = 0;
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-menu", "c-menu-items"];
  components.forEach(tagName => { switch (tagName) {
    case "c-menu":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CMenu);
      }
      break;
    case "c-menu-items":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { CMenu as C, defineCustomElement as d };

//# sourceMappingURL=c-menu2.js.map
