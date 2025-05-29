import { Link, useLocation } from "react-router-dom"
import styled from "styled-components";
import Cart from "./CartComponents/Cart";

function Navigation({cartContents}) {

    const path = useLocation().pathname; 
    const showCart = path.startsWith("/shop") || path.startsWith("/cart");

    return (
        <NavWrapper>
            <LinkWrapper>
                <Link to="/home">HOME</Link>
                <Link to="/shop">SHOP</Link>
            </LinkWrapper>
            <CartSlot>
                {showCart && <Cart cartContents={cartContents}/>}
            </CartSlot>
        </NavWrapper>
    );
}

const NavWrapper = styled.nav`
    padding: 10px; 
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: red;
    position: sticky;
    top: 0;
`; 

const CartSlot = styled.div`
    display: flex;
    margin-left: auto;
    width: 100px;
    max-height: 3rem;
    background-color: blue;
`

const LinkWrapper = styled.div`
    display: flex; 
    gap: 20%;

    a {
        text-decoration: none;
    }
`

export default Navigation; 