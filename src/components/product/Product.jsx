const Product = ({value}) => {
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
