import "./form.wrapper.css";

import { Form, FormGroup, FormItem } from "@ui5/webcomponents-react";
import InputWrapper from "../input/input.wrapper";
import ComboboxWrapper, {
	ComboboxWrapperData,
} from "../combobox/combobox.wrapper";
import DatePickerWrapper from "../datepicker/datepicker.wrapper";
import DateRangePickerWrapper from "../daterangepicker/daterangepicker.wrapper";

export interface FormItemWrapper {
	type: "Input" | "ComboBox" | "DatePicker" | "DateRangePicker";
	label: string;
	value: any;
	attribute: string;
	validator?: boolean;
	inputType?: "Email" | "Number" | "Password" | "Tel" | "Text" | "URL";
	comboboxData?: ComboboxWrapperData[];
	icon?: string;
}

export interface FormGroupWrapper {
	titleText: string;
	elements: FormItemWrapper[];
}

export interface FormWrapperParameters {
	titleText: string;
	subGroups: FormGroupWrapper[];
	object: any;
	setter: any;
}

function FormWrapper(props: FormWrapperParameters) {
	return (
		<Form className="form-wrapper" titleText={props.titleText}>
			{props.subGroups.map((subGroupItem: FormGroupWrapper, i: number) => (
				<FormGroup titleText={subGroupItem.titleText} key={i}>
					{subGroupItem.elements.map((formItem: FormItemWrapper, j: number) => {
						switch (formItem.type) {
							case "Input":
								return (
									<FormItem key={j} label={formItem.label}>
										<InputWrapper
											value={formItem.value}
											object={props.object}
											setter={props.setter}
											attribute={formItem.attribute}
											validator={formItem.validator}
											type={formItem.inputType ? formItem.inputType : "Text"}
											icon={formItem.icon}
										/>
									</FormItem>
								);
							case "ComboBox":
								return (
									<FormItem key={j} label={formItem.label}>
										<ComboboxWrapper
											value={formItem.value}
											object={props.object}
											setter={props.setter}
											attribute={formItem.attribute}
											validator={formItem.validator}
											data={formItem.comboboxData ? formItem.comboboxData : []}
											icon={formItem.icon}
										/>
									</FormItem>
								);
							case "DatePicker":
								return (
									<FormItem key={j} label={formItem.label}>
										<DatePickerWrapper
											value={formItem.value}
											object={props.object}
											setter={props.setter}
											attribute={formItem.attribute}
											validator={formItem.validator}
										/>
									</FormItem>
								);
							case "DateRangePicker":
								return (
									<FormItem key={j} label={formItem.label}>
										<DateRangePickerWrapper
											value={formItem.value}
											object={props.object}
											setter={props.setter}
											attribute={formItem.attribute}
											validator={formItem.validator}
										/>
									</FormItem>
								);
							default:
								return null;
						}
					})}
				</FormGroup>
			))}
		</Form>
	);
}

export default FormWrapper;
