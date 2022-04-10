import React, { useState } from "react";
import "./App.css";
import ComboboxWrapper from "./wrappers/combobox.wrapper";
import InputWrapper from "./wrappers/input.wrapper";

function App() {
	const [value, setValue] = useState<any>({ name: "", id: 0 });

	return (
		<div>
			{value.name}
			<InputWrapper
				value={value.name}
				object={value}
				attribute={"name"}
				setter={setValue}
				validator={value.name.toString() !== ""}
				type={"Text"}
			/>
			{value.id}
			<ComboboxWrapper
				data={[{ id: 1, content: "Guillermo" }]}
				setter={setValue}
				object={value}
				attribute={"id"}
				value={value.id}
				validator={value.id.toString() !== "0"}
			/>
		</div>
	);
}

export default App;
