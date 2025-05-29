import Navigation from "./components/Navigation.jsx";
import Header from "./components/Header.jsx"
import { Outlet } from "react-router-dom";

function Root() {
    return(
        <>
            <Header/> 
            <Navigation/>
            <h3>Below changes on url change:</h3>
            <Outlet/>
        </>
    );
}

export default Root; 