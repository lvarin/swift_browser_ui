import { r as registerInstance, h, H as Host, g as getElement } from './index-548fbd48.js';

const cLoginCardCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(128, 128, 128);--csc-primary:#002f5f;--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}c-login-card{display:flex;background:white;border-radius:6px}.c-login-card{border-radius:6px;box-shadow:rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.2) 0px 5px 5px;display:flex;position:relative;width:100%}.c-login-card__image{background-size:cover;border-radius:6px;clip-path:url(#cLoginClipPath);height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%}.c-login-card__image--overlay{background-color:var(--csc-primary);background-blend-mode:var(--c-login-overlay-mode)}.c-login-card__content{display:flex;flex-direction:column;gap:24px;padding:72px;margin-bottom:32px;max-width:80%;width:100%}.c-login-card__content--no-image{max-width:100%;margin-bottom:0}.c-login-card--mobile c-login-card-title{font-size:32px;hyphens:auto}.c-login-card--mobile .c-login-card__content{max-width:100%;padding:40px}.c-login-card--mobile .c-login-card__image{border-radius:0 0 6px 6px;bottom:0;top:auto;width:100%}";

const CLoginCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this._paths = {
      desktop: 'm0.234,0.914 c0.132,-0.026,0.286,-0.05,0.436,-0.163 c0.083,-0.063,0.152,-0.145,0.21,-0.329 c0.055,-0.172,0.072,-0.421,0.072,-0.421 h0.048 v1 h-1 v-0.057 c0,0,0.145,-0.012,0.234,-0.029',
      mobile: 'm1,1 h-1 v-0.213 c0,0,0.209,-0.046,0.337,-0.109 c0.191,-0.096,0.413,-0.183,0.629,-0.608 c0.028,-0.055,0.034,-0.069,0.034,-0.069',
    };
    this.backgroundPosition = 'bottom right';
    this.mobileBreakpoint = 600;
    this.overlay = false;
    this.overlayBlendMode = 'multiply';
    this.src = '';
    this.path = '';
    this.imageHeight = '100%';
  }
  componentWillLoad() {
    this._observer = new ResizeObserver(([entry]) => {
      const { width } = entry.contentRect;
      this._handleResize(width);
    });
  }
  componentDidLoad() {
    this._observer.observe(this._cardElement);
  }
  disconnectedCallback() {
    this._observer.disconnect();
  }
  _handleResize(width) {
    const isMobile = width <= this.mobileBreakpoint;
    const mode = isMobile ? 'mobile' : 'desktop';
    this.imageHeight = isMobile ? `${width * 0.3}px` : '100%';
    this.path = this._paths[mode];
    this._cardElement.classList.toggle('c-login-card--mobile', isMobile);
  }
  render() {
    const style = {
      backgroundImage: `url(${this.src})`,
      backgroundPosition: this.backgroundPosition,
      height: this.imageHeight,
      '--c-login-overlay-mode': !!this.overlay && this.overlayBlendMode,
    };
    const imageClasses = {
      'c-login-card__image': true,
      'c-login-card__image--overlay': !!this.overlay,
    };
    const contentClasses = {
      'c-login-card__content': true,
      'c-login-card__content--no-image': !this.src,
    };
    return (h(Host, null, !!this.src && (h("svg", { width: "0", height: "0" }, h("defs", null, h("clipPath", { id: "cLoginClipPath", clipPathUnits: "objectBoundingBox" }, h("path", { d: this.path }))))), h("div", { class: "c-login-card", ref: (el) => (this._cardElement = el) }, !!this.src && h("div", { class: imageClasses, style: style }), h("div", { class: contentClasses }, h("slot", null)))));
  }
  get element() { return getElement(this); }
};
CLoginCard.style = cLoginCardCss;

export { CLoginCard as c_login_card };

//# sourceMappingURL=c-login-card.entry.js.map
