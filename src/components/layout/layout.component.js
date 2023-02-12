import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar.component";

const Layout = () => {
    return(
        <>
            <Navbar/>
                <Outlet/>
            <footer>FOOTER</footer>
        </>
    )
}

export default Layout;