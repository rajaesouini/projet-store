import { useEffect, useState } from "react";
import Head from "../../head/Head";
import Product from "../../product/Product";
import { Link } from "react-router-dom";


const Category = () => {

  const [productsData, setProductsData ] = useState([]);

  const fetchProducts = async () => {

    const requestInfos = new Request ('https://fakestoreapi.com/products/category/jewelery', {
      method: 'get'
    });

    const request = await fetch(requestInfos);

    const response = await request.json();

    return response;
  }

  useEffect(() => {
    fetchProducts().then( data => setProductsData(data));
  })



  const fetchCategory = async () => {

    const requestInfos = new Request('https://fakestoreapi.com/products', {
      method: 'get'
  });

    return (
      <>
      <Head />
        {
          productsData.map( (value, index) => {
            return <Product key={index} value={value} />
          } )
        }
      </>
    )


};



export default Category
