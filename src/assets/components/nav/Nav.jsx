import { Link } from "react-router-dom";

const Nav = () => {
  return <nav>
        <Link to={ '/' }>Home</Link>
        <Link to={ '/menu' }>Menu</Link>
        <Link to={ '/category' }>Category</Link>
        <Link to={ '/productdetail' }>Productdetail</Link>
        <Link to={ '/cart' }>Cart</Link>
  </nav>;
}

export default Nav;
