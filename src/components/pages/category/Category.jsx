import { useEffect, useState } from "react";
import Head from "../../head/Head";
import Product from "../../product/Product";
import { Link, useParams } from "react-router-dom";

const Category = () => {
	const { name } = useParams();

	const [productsData, setProductsData] = useState([]);
	const fetchProducts = async () => {
		const requestInfos = new Request(
			`https://fakestoreapi.com/products/category/${name}`,
			{
				method: "get",
			},
		);

		const request = await fetch(requestInfos);

		const response = await request.json();

		return response;
	};

	useEffect(() => {
		fetchProducts().then((data) => setProductsData(data));
	});

	return (
		<>
		<Head />
		{productsData.map((value) => {
			return <Product value={value} />;
		})}
		</>
	);
};

export default Category;
