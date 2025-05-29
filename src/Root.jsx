import Navigation from "./components/Navigation.jsx";
import Header from "./components/Header.jsx"
import { Outlet } from "react-router-dom";
import { useState } from "react"; 
import { CartContext } from "./components/CartContext.js";

const initialContents = [
    {
        itemID: 1, 
        quantity: 3, 
        title: "Testing this out"
    },
    {
        itemID: 2, 
        quantity: 4, 
        title: "Testing this out too"
    }
]

function Root() {

    const [ cartContents, setCartContents ] = useState(initialContents);

    function handleContents(cartItemID, itemQuantity, itemTitle) {
        setCartContents([...cartContents, {itemID: cartItemID, quantity: itemQuantity, title: itemTitle}]);
    }

    return(
        <>
            <Header/> 
            <Navigation cartContents={cartContents}/>
            <h3>Below changes on url change:</h3>
            <CartContext.Provider value={handleContents}>
                <Outlet/>
            </CartContext.Provider>
        </>
    );
}

export default Root; 