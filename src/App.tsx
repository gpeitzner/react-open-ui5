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
										child: {
											type: "Input",
											properties: {
												value: value.name,
												object: value,
												setter: setValue,
												attribute: "name",
												type: "Text",
												icon: "add",
											},
										},
									},
								],
							},
							{
								titleText: "Form Subgroup Wrapper",
								elements: [
									{
										label: "Combobox",
										child: {
											type: "ComboBox",
											properties: {
												value: value.id,
												object: value,
												setter: setValue,
												attribute: "id",
												validator: value.id.toString() !== "0",
												data: [{ id: 1, content: "Guillermo" }],
											},
										},
									},
								],
							},
							{
								titleText: "Form Subgroup Wrapper",
								elements: [
									{
										label: "Date Picker",
										child: {
											type: "DatePicker",
											properties: {
												value: value.date,
												object: value,
												setter: setValue,
												attribute: "date",
												validator: value.date.toString() !== "",
											},
										},
									},
									{
										label: "Date Range Picker",
										child: {
											type: "DateRangePicker",
											properties: {
												value: value.dateRange,
												object: value,
												setter: setValue,
												attribute: "dateRange",
											},
										},
									},
									{
										label: "Button",
										child: {
											type: "Button",
											properties: {
												text: "Click Me!",
												action: () => console.log("[FLAG]"),
												design: "Emphasized",
												icon: "create",
											},
										},
									},
								],
							},
						]}
					/>
				</DynamicPage>
			</FlexBox>
		</div>
	);
}

export default App;
