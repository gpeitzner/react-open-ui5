import React, { useRef, useState } from "react";
import "./App.css";

import "@ui5/webcomponents-icons/dist/json-imports/Icons";

import {
	Button,
	DynamicPage,
	FlexBox,
	ShellBar,
	SideNavigation,
	SideNavigationItem,
	SideNavigationSubItem,
} from "@ui5/webcomponents-react";
import FormWrapper from "./wrappers/form/form.wrapper";

function App() {
	const sideNavigationRef = useRef<any>();

	const [value, setValue] = useState<any>({
		name: "",
		id: 0,
		date: "12-04-2022",
		dateRange: "",
	});

	return (
		<div>
			<ShellBar
				primary-title="UI5 Web Components"
				secondary-title="The Best Run SAP"
				startButton={
					<Button
						icon="menu"
						onClick={() =>
							(sideNavigationRef.current.collapsed =
								!sideNavigationRef.current.collapsed)
						}
					/>
				}
			/>
			<FlexBox style={{ height: "94vh" }}>
				<SideNavigation
					fixedItems={
						<>
							<SideNavigationItem text="Useful Links" icon="chain-link" />
							<SideNavigationItem text="History" icon="history" />
						</>
					}
					ref={sideNavigationRef}
				>
					<SideNavigationItem text="Home" icon="home" />
					<SideNavigationItem text="People" expanded icon="group">
						<SideNavigationSubItem text="From My Team" />
						<SideNavigationSubItem text="From Other Teams" />
					</SideNavigationItem>
					<SideNavigationItem text="Locations" icon="locate-me" selected />
					<SideNavigationItem text="Events" icon="calendar">
						<SideNavigationSubItem text="Local" />
						<SideNavigationSubItem text="Others" />
					</SideNavigationItem>
				</SideNavigation>
				<DynamicPage headerContentPinnable={false} showHideHeaderButton={false}>
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
				</DynamicPage>
			</FlexBox>
		</div>
	);
}

export default App;
