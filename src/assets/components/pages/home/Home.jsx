import Head from "../../head/Head";
import Product from "../../product/Product";
import { Link } from "react-router-dom";


const Home = () => {


    return (
      <>
        <Head />
        <p>head</p>
        <ul>
          <li><Product /></li>
          <li><Product /></li>
          <li><Product /></li>
          <li><Product /></li>
          <li><Product /></li>
          <Link to={ '/product/1' }>Product 1</Link>
          <Link to={ '/product/2' }>Product 2</Link>
          <Link to={ '/product/3' }>Product 3</Link>
          <Link to={ '/product/4' }>Product 4</Link>
          <Link to={ '/product/5' }>Product 5</Link>
          <Link to={ '/product/6' }>Product 6</Link>
          <Link to={ '/product/7' }>Product 7</Link>
          <Link to={ '/product/8' }>Product 8</Link>
          <Link to={ '/product/9' }>Product 9</Link>
          <Link to={ '/product/10' }>Product 10</Link>
        </ul>
      </>
    )
};




export default Home
