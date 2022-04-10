import React, { useState } from "react";
import "./App.css";
import ComboboxWrapper from "./wrappers/combobox/combobox.wrapper";
import DatePickerWrapper from "./wrappers/datepicker/datepicker.wrapper";
import InputWrapper from "./wrappers/input/input.wrapper";

function App() {
	const [value, setValue] = useState<any>({
		name: "",
		id: 0,
		date: "12-04-2022",
	});

	return (
		<div>
			{value.name}
			<InputWrapper
				value={value.name}
				object={value}
				setter={setValue}
				attribute={"name"}
				validator={value.name.toString() !== ""}
				type={"Text"}
			/>
			{value.id}
			<ComboboxWrapper
				value={value.id}
				object={value}
				setter={setValue}
				attribute={"id"}
				validator={value.id.toString() !== "0"}
				data={[{ id: 1, content: "Guillermo" }]}
			/>
			{value.date}
			<DatePickerWrapper
				value={value.date}
				object={value}
				setter={setValue}
				attribute={"date"}
				validator={value.date.toString() !== ""}
			/>
		</div>
	);
}

export default App;
