import type { Components, JSX } from "../types/components";

interface CMessage extends Components.CMessage, HTMLElement {}
export const CMessage: {
  prototype: CMessage;
  new (): CMessage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
