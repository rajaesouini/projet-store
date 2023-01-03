import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/pages/home/Home';
import Menu from '../components/pages/menu/Menu';
import Productdetail from '../components/pages/productdetail/Productdetail';
import Category from '../components/pages/category/Category';
import Cart from '../components/pages/cart/Cart';
import Layout from '../layouts/Layouts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
              path: 'menu',
              element: <Menu />
          },
          {
            path: 'productdetail',
            element: <Productdetail />
        },
        {
          path: 'category',
          element: <Category />
      },
        ],
    },
]);

export default router;
