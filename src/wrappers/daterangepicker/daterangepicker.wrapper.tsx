import "./daterangepicker.wrapper.css";

import { DateRangePicker } from "@ui5/webcomponents-react";

export interface DateRangePickerWrapperParameters {
	value: any;
	object: any;
	setter: any;
	attribute: string;
	validator: boolean;
}

function DateRangePickerWrapper(props: DateRangePickerWrapperParameters) {
	return (
		<DateRangePicker
			className="daterangepicker-wrapper"
			primaryCalendarType="Gregorian"
			formatPattern="dd-MM-yyyy"
			value={props.value}
			onChange={(e) =>
				props.setter({
					...props.object,
					[props.attribute]: e.target.value.toString(),
				})
			}
			valueState={props.validator ? "Success" : "Error"}
		/>
	);
}

export default DateRangePickerWrapper;
