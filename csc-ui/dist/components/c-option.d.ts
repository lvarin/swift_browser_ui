import type { Components, JSX } from "../types/components";

interface COption extends Components.COption, HTMLElement {}
export const COption: {
  prototype: COption;
  new (): COption;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
