import { useContext } from "react";
import { TitleContext } from "../../context/TitleContextProvider";
import Head from "../../head/Head";

const Cart = () => {
	const { data, value, setValue } = useContext(TitleContext);

	return (
		<>
			<Head />
			{/* <Product />
        <Productdetail /> */}
			{value.map((product, index) => {
				return <p key={index}>{product.title}</p>;
			})}
			<p>cart</p>
		</>
	);
};

export default Cart;
