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

	return <><Head /><Product value={productdetailData} /></>;
	{
		/* <><section className="pd">
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
</section> */
	}
};

export default Productdetail;
