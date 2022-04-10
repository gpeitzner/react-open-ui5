import "./datepicker.wrapper.css";

import { DatePicker } from "@ui5/webcomponents-react";

export interface DatePickerWrapperParameters {
	value: any;
	object: any;
	setter: any;
	attribute: string;
	validator: boolean;
}

function DatePickerWrapper(props: DatePickerWrapperParameters) {
	return (
		<DatePicker
			className="datepicker-wrapper"
			primaryCalendarType="Gregorian"
			formatPattern="dd-MM-yyyy"
			value={props.value}
			onChange={(e) => {
				props.setter({
					...props.object,
					[props.attribute]: e.target.value.toString(),
				});
			}}
			valueState={props.validator ? "Success" : "Error"}
		/>
	);
}

export default DatePickerWrapper;
