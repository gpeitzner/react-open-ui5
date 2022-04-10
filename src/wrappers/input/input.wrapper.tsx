import "./input.wrapper.css";

import { Input } from "@ui5/webcomponents-react";

export interface InputWrapperParameters {
	value: any;
	object: any;
	setter: any;
	attribute: string;
	validator: boolean;
	type: "Email" | "Number" | "Password" | "Tel" | "Text" | "URL";
}

function InputWrapper(props: InputWrapperParameters) {
	return (
		<Input
			value={props.value}
			onInput={(e) =>
				props.setter({
					...props.object,
					[props.attribute]: e.target.value,
				})
			}
			className="input-wrapper"
			valueState={props.validator ? "Success" : "Error"}
			type={props.type}
		/>
	);
}

export default InputWrapper;
