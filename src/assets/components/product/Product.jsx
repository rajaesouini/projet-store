const Product = ({value}) => {
		// console.log(value);
		// fetch("https://fakestoreapi.com/products")
		// 	.then((res) => res.json())
		// 	.then((json) => {

		// 		for (let i = 0; i < json.length; i++) {
		// 			console.log(json);
		// 		}
		// 	});
		return(
		<>
			<p>{value.title}</p>
			<p>{value.description}</p>
			<p>{value.image}</p>
			<p>{value.price}</p>
			<p>{value.category}</p>
		</>)
	}; 


export default Product;
