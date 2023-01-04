import Head from "../../head/Head";
import Product from "../../product/Product";
import home from "./home.css";

const Home = () => {
	return (
		<>
		<section class="list-prod">
			{<article class="prod">
				<img src="" alt="" class="bordimg" />
				<div><h2>Product</h2><p>Brand</p></div>
				<p>prix</p>
			</article>
			/* <Head />
      <p>head</p>
      <ul>
      <li><Product /></li>
      <li><Product /></li>
      <li><Product /></li>
      <li><Product /></li>
      <li><Product /></li>
      </ul> */}
		</section>
		</>
	);
};

export default Home;
