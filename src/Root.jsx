import Navigation from "./components/Navigation.jsx";
import Header from "./components/Header.jsx"
import { Outlet } from "react-router-dom";
import { useReducer } from "react"; 
import { ItemsContext, ItemsDispatchContext } from "./components/ItemsContext.js";

function Root() {

    const [ items, dispatch ] = useReducer(itemsReducer, initialContents);

    return(
        <>
            <Header/> 
            <Navigation cartContents={items}/>
            <h3>Below changes on url change:</h3>
            <ItemsContext.Provider value={items}>
                <ItemsDispatchContext.Provider value={dispatch}>
                    <Outlet/>
                </ItemsDispatchContext.Provider>
            </ItemsContext.Provider>
        </>
    );
}


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

function itemsReducer(items, action) {
    switch(action.type) {
        case 'add': {
            let newCart = [...items]; 

            let found = false; 
            newCart = newCart.map(item => {
                if (item.itemID === action.cartItemID) {
                    found = true; 
                    return {...item, quantity: Number(item.quantity) + Number(action.itemQuantity)};
                } else {
                    return item; 
                }
            })

            if (!found) {
                newCart.push({itemID: action.cartItemID, quantity: action.itemQuantity, title: action.itemTitle});
            }
            return newCart;
        } case 'delete': {
            return items.filter(item => !(Number(action.cartItemID) === Number(item.itemID)))
        }
    }
}


export default Root; 