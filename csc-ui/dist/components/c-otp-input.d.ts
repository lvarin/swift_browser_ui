import type { Components, JSX } from "../types/components";

interface COtpInput extends Components.COtpInput, HTMLElement {}
export const COtpInput: {
  prototype: COtpInput;
  new (): COtpInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
