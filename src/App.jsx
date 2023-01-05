import { useState } from "react";
import "./App.css";
import Cart from "./assets/components/pages/cart/Cart";
import Category from "./assets/components/pages/category/Category";
import Home from "./assets/components/pages/home/Home";
import Menu from "./assets/components/pages/menu/Menu";
import Productdetail from "./assets/components/pages/productdetail/Productdetail";
import { RouterProvider } from "react-router-dom";
import router from "./assets/services/Router";


function App() {
	const [count, setCount] = useState('');

  return (
    <>
<RouterProvider router={ router } />

 </>

  )
}

export default App;
