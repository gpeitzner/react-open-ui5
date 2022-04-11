import React, { useState } from "react";
import "./App.css";
import FormWrapper from "./wrappers/form/form.wrapper";

function App() {
	const [value, setValue] = useState<any>({
		name: "",
		id: 0,
		date: "12-04-2022",
		dateRange: "",
	});

	return (
		<div>
			{`name: ${value.name}`}
			<br />
			{`id: ${value.id}`}
			<br />
			{`date: ${value.date}`}
			<br />
			{`dateRange: ${value.dateRange}`}
			<br />
			<FormWrapper
				titleText={"Form Wrapper"}
				subGroups={[
					{
						titleText: "Form Subgroup Wrapper",
						elements: [
							{
								label: "Input",
								attribute: "name",
								type: "Input",
								value: value.name,
								validator: value.name.toString() !== "",
								inputType: "Text",
							},
						],
					},
					{
						titleText: "Form Subgroup Wrapper",
						elements: [
							{
								label: "Combobox",
								attribute: "id",
								type: "ComboBox",
								value: value.id,
								validator: value.id.toString() !== "0",
								comboboxData: [{ id: 1, content: "Guillermo" }],
							},
						],
					},
					{
						titleText: "Form Subgroup Wrapper",
						elements: [
							{
								label: "Datepicker",
								attribute: "date",
								type: "DatePicker",
								value: value.date,
								validator: value.date.toString() !== "",
							},
							{
								label: "Daterangepicker",
								attribute: "dateRange",
								type: "DateRangePicker",
								value: value.dateRange,
								validator: value.dateRange.toString() !== "",
							},
						],
					},
				]}
				object={value}
				setter={setValue}
			/>
		</div>
	);
}

export default App;
