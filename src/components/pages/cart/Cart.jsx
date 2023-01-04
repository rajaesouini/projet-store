import Head from "../../head/Head";

import cart from "./cart.css";

const Cart = () => {
	return (
		<>
		<section>
			<h2>My cart</h2>
			{<article className="prod">
				<img src="" alt="" className="bordimg" />
				<div><h2>Product</h2></div>
				<p>prix</p>
			</article>
			/* <Head />
        <p>cart</p> */}
		</section>
		</>
	);
};

export default Cart;
