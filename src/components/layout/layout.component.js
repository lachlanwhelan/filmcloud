import { Outlet } from "react-router-dom";
import Footer from "../footer/footer.component";
import Navbar from "../navbar/navbar.component";

const Layout = () => {
    return(
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout;