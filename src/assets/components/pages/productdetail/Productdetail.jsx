import { useContext, useEffect, useState } from "react";
import { TitleContext } from "../../context/TitleContextProvider";
import Head from "../../head/Head";
import Product from "../../product/Product";

const Productdetail = () => {
	const { data, value, setValue } = useContext(TitleContext);

	const [productdetailData, setProductdetailData] = useState({});

	const fetchProductdetail = async () => {
		const requestInfos = new Request("https://fakestoreapi.com/products/1", {
			method: "get",
		});

		const request = await fetch(requestInfos);

		const response = await request.json();

		return response;
	};

	useEffect(() => {
		fetchProductdetail().then((data) => setProductdetailData(data));
	}, []);

	const addToCart = (e) => {
		// console.log(productdetailData);
		// const clone = [...value];
		// clone.push(productdetailData);
		// setValue(clone);
		value.push(productdetailData);
		setValue(value);
	};

	return (
		<>
			<Head />
			<Product value={productdetailData} />
			<button onClick={addToCart}>Add to cart</button>
		</>
	);
};

export default Productdetail;
