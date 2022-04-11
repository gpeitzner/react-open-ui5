import "./combobox.wrapper.css";

import { ComboBox, ComboBoxItem } from "@ui5/webcomponents-react";

export interface ComboboxWrapperData {
	id: number;
	content: string;
}

export interface ComboboxWrapperParameters {
	value: any;
	object: any;
	setter: any;
	attribute: string;
	validator: boolean;
	data: ComboboxWrapperData[];
}

function ComboboxWrapper(props: ComboboxWrapperParameters) {
	const getValue = (): string => {
		if (props.value !== 0) {
			for (let i = 0; i < props.data.length; i++) {
				const element = props.data[i];
				if (element.id === props.value) {
					return element.content;
				}
			}
		}
		return "";
	};

	return (
		<ComboBox
			className="combobox-wrapper"
			value={getValue()}
			onChange={(e) => {
				const found: ComboboxWrapperData | undefined = props.data.find(
					(item: ComboboxWrapperData) =>
						item.content === e.target.value.toString()
				);
				if (found !== undefined) {
					props.setter({ ...props.object, [props.attribute]: found.id });
				}
			}}
			valueState={props.validator ? "Success" : "Error"}
		>
			{props.data.map((item: ComboboxWrapperData) => (
				<ComboBoxItem text={item.content} key={item.id} />
			))}
		</ComboBox>
	);
}

export default ComboboxWrapper;
