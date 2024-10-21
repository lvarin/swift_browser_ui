import { EventEmitter } from '../../stencil-public-runtime';
export declare class CAccordionItem {
  collapsable: boolean;
  heading: string;
  icon: 'enabled' | 'disabled' | 'bell' | 'pending';
  value: number | string;
  expanded: boolean;
  outlined: boolean;
  itemChange: EventEmitter;
  handleKeyDown(event: KeyboardEvent): void;
  stop(event: Event): void;
  private _toggle;
  private static _uniqueId;
  private _icons;
  private _getIcon;
  componentWillLoad(): void;
  render(): any;
}
