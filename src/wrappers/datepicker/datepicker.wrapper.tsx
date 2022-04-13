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
			value={props.value}
			onChange={(e: any) => {
				props.setter({
					...props.object,
					[props.attribute]: e.target.liveValue.toString(),
				});
			}}
			valueState={props.validator ? "Success" : "Error"}
			primaryCalendarType="Gregorian"
			formatPattern="dd-MM-yyyy"
		/>
	);
}

export default DatePickerWrapper;
