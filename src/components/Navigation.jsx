import { Link, useLocation } from "react-router-dom"
import styled from "styled-components";

const NavWrapper = styled.nav`
    padding: 20px; 
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: red;
`; 

const CartSlot = styled.div`
    margin-left: auto;
    width: 40px;
    height: 40px;
    line-height: 40px; 
    background-color: blue;

    span { 
        vertical-align: middle;
    }
`

const LinkWrapper = styled.div`
    display: flex; 
    gap: 20%;

    a {
        text-decoration: none;
    }
`

function Navigation() {

    const isShop = useLocation().pathname.startsWith("/shop");

    return (
        <NavWrapper>
            <LinkWrapper>
                <Link to="/home">HOME</Link>
                <Link to="/shop">SHOP</Link>
            </LinkWrapper>
            <CartSlot>
                {isShop && <span className="material-symbols-outlined">shopping_cart</span>}
            </CartSlot>
        </NavWrapper>
    );
}

export default Navigation; 