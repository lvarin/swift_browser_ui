import { EventEmitter } from '../../stencil-public-runtime';
import { CSelectItem } from '../../types';
export declare class CSelect {
  autofocus: boolean;
  disabled: boolean;
  hideDetails: boolean;
  hint: string;
  hostId: string;
  label: string;
  shadow: boolean;
  name: string;
  required: boolean;
  returnValue: false;
  valid: boolean;
  validate: boolean;
  validateOnBlur: boolean;
  validation: string;
  itemsPerPage: number;
  placeholder: string;
  value: string | number | boolean | CSelectItem;
  items: CSelectItem[];
  optionAsSelection: false;
  changeValue: EventEmitter;
  host: HTMLCSelectElement;
  menuVisible: boolean;
  currentIndex: number;
  activeListItemId: string;
  statusText: string;
  hasOptionItems: boolean;
  previousValue: CSelectItem;
  private _itemRefs;
  private _id;
  private _inputElement;
  private _cOptionElements;
  private _selectionElement;
  private _outerWrapperClasses;
  private static _uniqueId;
  private _validationClasses;
  private _debounce;
  private _observer;
  validateChange(newValue: boolean): void;
  onCurrentIndexChange(index: number): void;
  private get _firstSelectableIndex();
  private get _lastSelectableIndex();
  private get _items();
  private _setValue;
  private _valueChangedHandler;
  private _getLabel;
  private _scrollToElement;
  handleKeyDown(ev: KeyboardEvent): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private _inputId;
  private _lastKeyPressTime;
  private _searchString;
  private _blurred;
  private _optionItems;
  private _selectItem;
  private _showMenu;
  private _hideMenu;
  private _select;
  private _getOptionItems;
  private _getListItem;
  private _runValidate;
  private _renderChevron;
  private _renderInputElement;
  private _renderMenu;
  private _handleSlotChange;
  private _updateStatusText;
  render(): any;
}
