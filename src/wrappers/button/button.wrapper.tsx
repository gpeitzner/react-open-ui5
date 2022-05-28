import "./button.wrapper.css";

import { Button } from "@ui5/webcomponents-react";

export interface ButtonWrapperParameters {
  text: string;
  action: any;
  design?:
    | "Default"
    | "Emphasized"
    | "Positive"
    | "Negative"
    | "Transparent"
    | "Attention";
  disabled?: boolean;
  icon?: string;
}

function ButtonWrapper(props: ButtonWrapperParameters) {
  return (
    <Button
      className="button-wrapper"
      onClick={props.action}
      design={props.design !== undefined ? props.design : "Default"}
      disabled={props.disabled !== undefined ? props.disabled : false}
      icon={props.icon && props.icon}
    >
      {props.text}
    </Button>
  );
}

export default ButtonWrapper;
