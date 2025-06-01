import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Cart({cartContents}) {

    const navigate = useNavigate(); 

    function handleCartClick() {
        navigate(`/cart`);
    }

    return (
        <CartSlot onClick={handleCartClick}>
            <CartButton>
                <span className="material-symbols-outlined">shopping_cart</span>
            </CartButton>
            <Quantity>{cartContents.length}</Quantity>
            <CartLabel>Cart</CartLabel>
        </CartSlot>
    );

}

const CartSlot = styled.div`
    display: flex;
    margin-left: auto;
    width: 5rem;
    max-height: 3rem;
    border: 2px solid black;
    border-radius: 7px;
    cursor: pointer;
    background-color: lightgreen;
    font-weight: 900;
`


const CartButton = styled.div`
    cursor: pointer;
    display: flex;

    span {
        font-size: 2.1rem;
        margin-left: 10%;
    }
`

const Quantity = styled.p`
    position: absolute; 
    bottom: 1.8rem;
    right: 45px;
`

const CartLabel = styled.p`
    align-self: flex-end;
    font-size: 0.9rem;
    margin-left: 0.2rem;
`

export default Cart; 