export declare class CMessage {
  hint: string;
  inputId: string;
  valid: boolean;
  validation: string;
  messageOptions: {
    show: boolean;
    type: string;
    content: string;
  };
  onValidChange(valid: boolean): void;
  onValidationMessageChange(message: string): void;
  onHintMessageChange(message: string): void;
  private _handleValidation;
  private _validationIcon;
  componentDidLoad(): void;
  render(): any;
}
