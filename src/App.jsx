import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import Cart from "./components/pages/cart/Cart";
import Category from "./components/pages/category/Category";
import Home from "./components/pages/home/Home";
import Menu from "./components/pages/menu/Menu";
import Productdetail from "./components/pages/productdetail/Productdetail";
import { RouterProvider } from "react-router-dom";
import router from "./services/Router";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
		<RouterProvider router={router} />
		<Home />
		<Productdetail />
		<Cart />
		<Menu />
		<Category />
		</>
	);
}

export default App;
