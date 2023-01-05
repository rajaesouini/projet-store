import { useEffect, useState } from "react";
import Head from "../../head/Head";
import Product from "../../product/Product";



const Category = () => {

  
  const [ categoryData, setCategoryData] = useState([])

  const fetchCategory = async () => {

    const requestInfos = new Request('https://fakestoreapi.com/products', {
      method: 'get'
  });

  const request = await fetch(requestInfos);

  const response = await request.json();

  return response;
}

   useEffect(() => {
   fetchCategory().then( data => setCategoryData(data));
    }, [] )


    return ( <>
    <p>Electronics</p>
    <Head />
    {
      categoryData.map((value, index) => {
        return <Product key={index} value={value} />
      })
    }
    
    </>);

};





export default Category
