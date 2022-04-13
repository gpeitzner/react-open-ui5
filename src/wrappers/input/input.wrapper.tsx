import "./input.wrapper.css";

import { Icon, Input } from "@ui5/webcomponents-react";

export interface InputWrapperParameters {
	value: any;
	object: any;
	setter: any;
	attribute: string;
	type: "Email" | "Number" | "Password" | "Tel" | "Text" | "URL";
	validator?: boolean;
	icon?: string;
}

function InputWrapper(props: InputWrapperParameters) {
	return (
		<Input
			className="input-wrapper"
			value={props.value}
			onInput={(e) =>
				props.setter({
					...props.object,
					[props.attribute]: e.target.value,
				})
			}
			valueState={
				props.validator !== undefined
					? props.validator
						? "Success"
						: "Error"
					: "None"
			}
			type={props.type}
			icon={props.icon && <Icon name={props.icon} />}
		/>
	);
}

export default InputWrapper;
