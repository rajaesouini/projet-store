import { useEffect, useState } from "react";
import Head from "../../head/Head";
import Product from "../../product/Product";
import { Link } from "react-router-dom";

const Home = () => {
	// créer un état stockant les données de l'api
	const [productsData, setProductsData] = useState([]);

	const fetchProducts = async () => {
		// configuration de la requête HTTP
		const requestInfos = new Request("https://fakestoreapi.com/products", {
			method: "get",
		});

		// exécuter la requête
		const request = await fetch(requestInfos);

		// récupérer et filtrer la réponse
		const response = await request.json();
		// console.log(response);
		// renvoyer la réponse sous forme de promesse
		return response;
	};

	useEffect(() => {
		// console.log('coucou');
		// mise à jour de l'état avec les données de l'api
		fetchProducts()
			.then((data) => setProductsData(data));
	}, []);

	return (
		<>
		<Head />
		{productsData.map((value, index) => {
			return <Product key={index} value={value} />;
		})}
		</>
	);

	{
		/* <section className="list-prod">
{<article className="prod">
	<img src="" alt="" className="bordimg" />
	<div><h2>Product</h2><p>Brand</p></div>
	<p>prix</p>
</article>*/
	}
};

export default Home;
