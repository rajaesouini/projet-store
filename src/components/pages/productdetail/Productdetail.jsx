import Head from "../../head/Head";
import Product from "../../product/Product";
import productdetail from "./productdetail.css";

const Productdetail = () => {
	return (
		<><section className="pd">
			<img src="" alt="" id="imgpd" />
			<div id="ligne1"><h2>Product</h2><p>100€</p></div>
			<p>Brand</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed hic totam ipsum quae enim sapiente, iusto, nostrum dicta repellendus provident deleniti voluptatem reprehenderit, incidunt fugit rem nulla. Voluptatum, quos vel!
			</p>
			<div id="category">
				<p>Category</p>
				<div>
					<span className="material-symbols-outlined">star</span>
					<span className="material-symbols-outlined">star</span>
					<span className="material-symbols-outlined">star</span>
					<span className="material-symbols-outlined">star</span>
				</div>
			</div>
			<button>Add to cart</button>
		</section>
		</>
	);
};

export default Productdetail;
