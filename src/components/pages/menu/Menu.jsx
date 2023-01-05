import { useEffect, useState } from "react";
import Product from "../../product/Product";
import Head from "../../head/Head";
import { Link } from "react-router-dom";



const Menu = () => {

  const [productsData, setProductsData ] = useState([]);

  const fetchProducts = async () => {

    const requestInfos = new Request ('https://fakestoreapi.com/products/categories', {
      method: 'get'
    });

    const request = await fetch(requestInfos);

    const response = await request.json();

    return response;
  }

  useEffect(() => {
    fetchProducts().then( data => setProductsData(data));
  })



    return (
      <>
        <Head />
        {
          productsData.map((value, index) => {
            // return <Product key={index} value={value} />
            // return <p>{value} {index}</p>
            return <Link to={ `/category/${value}` }>{ value }</Link>

          })
        }
      </>
    )

};











export default Menu
