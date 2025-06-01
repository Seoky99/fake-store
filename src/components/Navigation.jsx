import { Link } from "react-router-dom"
import styled from "styled-components";
import Cart from "./CartComponents/Cart";

function Navigation({cartContents}) {
    return (
        <NavWrapper>
            <LinkWrapper>
                <Link to="/home">HOME</Link>
                <Link to="/shop">SHOP</Link>
            </LinkWrapper>
            <Cart cartContents={cartContents}/>
        </NavWrapper>
    );
}

const NavWrapper = styled.nav`
    padding: 10px; 
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    background-color: pink;
    top: 0;
`; 

const LinkWrapper = styled.div`
    display: flex; 
    gap: 20%;

    a {
        text-decoration: none;
    }
`

export default Navigation; 