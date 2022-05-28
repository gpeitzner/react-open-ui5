import Test from "../pages/test/test.page";

interface Route {
	title: string;
	path: string;
	icon: string;
	page: any;
}

export const routes: Route[] = [
	{ title: "Test", path: "/", icon: "customer", page: Test },
];
