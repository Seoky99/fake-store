import { useContext } from "react"; 
import { ItemsContext, ItemsDispatchContext } from "../ItemsContext";
import NoItems from "./NoItems"; 
import { styled, css } from "styled-components"; 

function CartPage() {

    const cartContents = useContext(ItemsContext); 
    const dispatch = useContext(ItemsDispatchContext);  

    let total = 0;
    const cartEmpty = cartContents.length === 0; 

    const items = cartContents.map(item => {
        const subtotal = (Math.round((Number(item.price) * Number(item.quantity)) * 100)/100).toFixed(2); 
        total += Number(subtotal); 

        return (
            <Item key={`${item.id}`}>
                <h4>{item.title}</h4>
                <p>{item.quantity}</p>
                <p>{item.price}</p>
                <p>{subtotal}</p>
                <DeleteButton onClick={() => handleDelete(item.id)}><span className="material-symbols-outlined">delete</span></DeleteButton>
            </Item>
        );
    })

    total = (Math.round(total * 100) / 100).toFixed(2);

    function handleDelete(cartItemID) {
        dispatch({
            type: 'delete', 
            cartItemID: cartItemID, 
        })
    }

    return (
        <PageContainer>
            <ItemContainer>
                <ItemLabel>
                    <h4>Items</h4>
                    <p>Quantity</p>
                    <p>Price</p>
                    <p>Subtotal</p>
                </ItemLabel>
                {items}
                {cartEmpty && <NoItems/>}
            </ItemContainer>
            <CheckoutContainer>
                <p>Your total is: {total}$</p>
                <CheckoutButton className={checkoutButtonRules}>Check out</CheckoutButton>
            </CheckoutContainer>
        </PageContainer>
    );

}

const PageContainer = styled.div`
    display: flex;
    padding: 10px;
    gap: 10px;
`

const sharedStyles = css`
    display: flex;
    width: 80%;
    padding: 10px;


    h4 {
        width: 60%;
    }

    p {
        width: 10%; 
    }

    button {
        width: 5%;
    }
`

const Item = styled.div`
    ${sharedStyles}
    border: 2px solid black;
    border-radius: 10px;

    p {
        border-left: 2px solid black;
        padding: 0.2rem;
    }
`;

const ItemLabel = styled.div`
    ${sharedStyles}
    border-bottom: 5px solid black;
`

const ItemContainer = styled.div`
    display: flex; 
    flex: 4;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

const DeleteButton = styled.button`
    margin-left: auto;
    width: 40px;
    height: 40px;
    background-color: black;
    color: white;   
    cursor: pointer;

    span {
        vertical-align: middle;
    }
`

const CheckoutContainer = styled.div`
    flex: 1; 
    padding: 10px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background-color: #D3D3D3;
    height: 10rem;
`

const CheckoutButton = styled.button`
`

const checkoutButtonRules = "cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2";





export default CartPage;