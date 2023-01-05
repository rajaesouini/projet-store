import { Link } from "react-router-dom";

const Nav = () => {
  return <nav>
        <Link to={ '/' }>Home</Link>
        <Link to={ '/menu' }>Menu</Link>
        {/* <Link to={ '/category' }>Category</Link> */}
        <Link to={ '/product/1' }>Productdetail-1</Link>
        <Link to={ '/cart' }>Cart</Link>
  </nav>;
}

export default Nav;
