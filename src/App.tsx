import React, { useState } from "react";
import "./App.css";
import InputWrapper from "./wrappers/input.wrapper";

function App() {
	const [value, setValue] = useState<any>({ name: "hola" });

	return (
		<div>
			{value.name}
			<InputWrapper
				value={value.name}
				object={value}
				attribute={"name"}
				setter={setValue}
			/>
		</div>
	);
}

export default App;
