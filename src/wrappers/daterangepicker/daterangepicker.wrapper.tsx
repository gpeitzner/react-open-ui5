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
			value={props.value}
			onChange={(e: any) =>
				props.setter({
					...props.object,
					[props.attribute]: e.target.liveValue.toString(),
				})
			}
			valueState={props.validator ? "Success" : "Error"}
			primaryCalendarType="Gregorian"
			formatPattern="dd-MM-yyyy"
		/>
	);
}

export default DateRangePickerWrapper;
