import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "../components/Navbar/Navbar";
import Item from "../components/Item/Item";

function Layout(){
    return(
        <>
          <Navbar/>
          <Item/>
          <Outlet/>
          <Footer/>

        </>
    );
}
export default Layout;