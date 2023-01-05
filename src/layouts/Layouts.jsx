
import { Outlet } from 'react-router-dom';
import Nav from '../components/nav/Nav';

const Layout = () => {
    return <>
        <Nav />
        <h1>Root</h1>
        <Outlet />
    </>;
}

export default Layout;
