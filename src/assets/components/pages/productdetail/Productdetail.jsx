import { useEffect, useState } from "react";
import Head from "../../head/Head";
import Product from "../../product/Product";
import { Link } from "react-router-dom";


const Productdetail = () => {
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


	return (
		<>
			<Head />
			<Product value={productdetailData} />
		</>
	);
};

export default Productdetail;
