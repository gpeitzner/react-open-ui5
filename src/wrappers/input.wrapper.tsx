import "./input.wrapper.css";

import { Input } from "@ui5/webcomponents-react";

export interface InputWrapperParameters {
	value: any;
	object: any;
	attribute: any;
	setter: any;
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
		/>
	);
}

export default InputWrapper;
