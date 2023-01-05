import { useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./assets/services/Router";
import { TitleContextProvider } from "./assets/components/context/TitleContextProvider";
import Cart from "./assets/components/pages/cart/Cart";

function App() {
	const [count, setCount] = useState("");

	return (
		<>
			<TitleContextProvider>
				{/* <Cart />  */}
				<RouterProvider router={router} />
			</TitleContextProvider>
		</>
	);
}

export default App;
