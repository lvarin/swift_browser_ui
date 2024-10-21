import { EventEmitter } from '../../stencil-public-runtime';
export declare class CCheckbox {
  disabled: boolean;
  hideDetails: boolean;
  hint: string;
  indeterminate: boolean;
  label: string;
  required: boolean;
  valid: boolean;
  validation: string;
  value: boolean;
  changeValue: EventEmitter;
  messageOptions: {
    show: boolean;
    type: string;
    content: string;
  };
  private _container;
  private _validationIcon;
  onValidationMessageChange(message: string): void;
  onValidChange(valid: boolean): void;
  handleKeyDown(event: KeyboardEvent): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  private _handleMessageOptions;
  private _handleValidation;
  private toggleState;
  private _renderMessages;
  render(): any;
}
