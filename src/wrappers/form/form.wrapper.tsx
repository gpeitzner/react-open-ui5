import "./form.wrapper.css";

import { Form, FormGroup, FormItem } from "@ui5/webcomponents-react";
import InputWrapper, { InputWrapperParameters } from "../input/input.wrapper";
import ComboboxWrapper, {
	ComboboxWrapperParameters,
} from "../combobox/combobox.wrapper";
import DatePickerWrapper, {
	DatePickerWrapperParameters,
} from "../datepicker/datepicker.wrapper";
import DateRangePickerWrapper, {
	DateRangePickerWrapperParameters,
} from "../daterangepicker/daterangepicker.wrapper";
import ButtonWrapper, {
	ButtonWrapperParameters,
} from "../button/button.wrapper";

interface InputWrapperProperties {
	type: "Input";
	properties: InputWrapperParameters;
}

interface ComboboxWrapperProperties {
	type: "ComboBox";
	properties: ComboboxWrapperParameters;
}

interface DatePickerWrapperProperties {
	type: "DatePicker";
	properties: DatePickerWrapperParameters;
}

interface DateRangePickerWrapperProperties {
	type: "DateRangePicker";
	properties: DateRangePickerWrapperParameters;
}

interface ButtonWrapperProperties {
	type: "Button";
	properties: ButtonWrapperParameters;
}

export interface FormItemWrapper {
	label: string;
	child:
		| InputWrapperProperties
		| ComboboxWrapperProperties
		| DatePickerWrapperProperties
		| DateRangePickerWrapperProperties
		| ButtonWrapperProperties;
}

export interface FormGroupWrapper {
	titleText: string;
	elements: FormItemWrapper[];
}

export interface FormWrapperParameters {
	titleText: string;
	subGroups: FormGroupWrapper[];
}

function FormWrapper(props: FormWrapperParameters) {
	return (
		<Form className="form-wrapper" titleText={props.titleText}>
			{props.subGroups.map((subGroupItem: FormGroupWrapper, i: number) => (
				<FormGroup titleText={subGroupItem.titleText} key={i}>
					{subGroupItem.elements.map((formItem: FormItemWrapper, j: number) => {
						switch (formItem.child.type) {
							case "Input":
								return (
									<FormItem key={j} label={formItem.label}>
										<InputWrapper
											value={formItem.child.properties.value}
											object={formItem.child.properties.object}
											setter={formItem.child.properties.setter}
											attribute={formItem.child.properties.attribute}
											validator={formItem.child.properties.validator}
											type={formItem.child.properties.type}
											icon={formItem.child.properties.icon}
										/>
									</FormItem>
								);
							case "ComboBox":
								return (
									<FormItem key={j} label={formItem.label}>
										<ComboboxWrapper
											value={formItem.child.properties.value}
											object={formItem.child.properties.object}
											setter={formItem.child.properties.setter}
											attribute={formItem.child.properties.attribute}
											validator={formItem.child.properties.validator}
											data={formItem.child.properties.data}
											icon={formItem.child.properties.icon}
										/>
									</FormItem>
								);
							case "DatePicker":
								return (
									<FormItem key={j} label={formItem.label}>
										<DatePickerWrapper
											value={formItem.child.properties.value}
											object={formItem.child.properties.object}
											setter={formItem.child.properties.setter}
											attribute={formItem.child.properties.attribute}
											validator={formItem.child.properties.validator}
										/>
									</FormItem>
								);
							case "DateRangePicker":
								return (
									<FormItem key={j} label={formItem.label}>
										<DateRangePickerWrapper
											value={formItem.child.properties.value}
											object={formItem.child.properties.object}
											setter={formItem.child.properties.setter}
											attribute={formItem.child.properties.attribute}
											validator={formItem.child.properties.validator}
										/>
									</FormItem>
								);
							case "Button":
								return (
									<FormItem key={j} label={formItem.label}>
										<ButtonWrapper
											text={formItem.child.properties.text}
											action={formItem.child.properties.action}
											design={formItem.child.properties.design}
											disabled={formItem.child.properties.disabled}
											icon={formItem.child.properties.icon}
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
