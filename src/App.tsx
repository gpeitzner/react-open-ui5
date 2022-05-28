import React, { useRef, useState } from "react";
import "./App.css";

import "@ui5/webcomponents-icons/dist/json-imports/Icons";

import {
	Button,
	FlexBox,
	ShellBar,
	SideNavigation,
	SideNavigationItem,
} from "@ui5/webcomponents-react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { routes } from "./routes";

function App() {
	const [primaryShellBarTitle] = useState<string>("UI5 Web Components");
	const [secondaryShellBarTitle] = useState<string>("The Best Run SAP");

	const sideNavigationRef = useRef<any>();
	const navigate = useNavigate();

	return (
		<div>
			<ShellBar
				primary-title={primaryShellBarTitle}
				secondary-title={secondaryShellBarTitle}
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
				<SideNavigation ref={sideNavigationRef}>
					{routes.map((route, i: number) => (
						<SideNavigationItem
							key={i}
							text={route.title}
							icon={route.icon}
							onClick={() => navigate({ pathname: route.path.toString() })}
						/>
					))}
				</SideNavigation>
				<Routes>
					{routes.map((route, i: number) => (
						<Route key={i} path={route.path} element={<route.page />} />
					))}
				</Routes>
			</FlexBox>
		</div>
	);
}

export default App;
