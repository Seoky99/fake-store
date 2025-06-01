import Navigation from "./components/Navigation.jsx";
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { useReducer } from "react"; 
import { ItemsContext, ItemsDispatchContext } from "./components/ItemsContext.js";

function Root() {

    const [ items, dispatch ] = useReducer(itemsReducer, initialContents);

    return(
        <RootWrapper>
            <Header/> 
            <Navigation cartContents={items}/>
            <ItemsContext.Provider value={items}>
                <ItemsDispatchContext.Provider value={dispatch}>
                    <Outlet/>
                </ItemsDispatchContext.Provider>
            </ItemsContext.Provider>
            <Footer/>
        </RootWrapper>
    );
}


const initialContents = [

    {category: "women's clothing",
description: 
"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
id: 
19,
image: 
"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
price: 
"7.95",
rating: 
{rate: 4.5, count: 146},
title: 
"Opna Women's Short Sleeve Moisture",
quantity: 3,},

    {category: "men's clothing",
description: 
"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
id: 
18,
image: 
"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
price: 
"3.05",
rating: 
{rate: 2.5, count: 326},
title: 
"Another Item",
quantity: 2,}


]

function itemsReducer(items, action) {
    switch(action.type) {
        case 'add': {
            let newCart = [...items];

            let found = false; 
            newCart = newCart.map(item => {
                if (item.id === action.item.id) {
                    found = true; 
                    return {...item, quantity: Number(item.quantity) + Number(action.quantity)};
                } else {
                    return item; 
                }
            });

            if (!found) {
                newCart.push({...action.item, quantity: action.quantity});
            }
            return newCart;
        } case 'delete': {
            return items.filter(item => !(Number(action.cartItemID) === Number(item.id)))
        } default: {
            throw new Error("Fell through");
        }
    }
}

const RootWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    min-height: 100vh;
`


export default Root; 