import { useContext } from "react"; 
import { ItemsContext, ItemsDispatchContext } from "../ItemsContext"; 
import styled from "styled-components"; 

function CartPage() {

    const cartContents = useContext(ItemsContext); 
    const dispatch = useContext(ItemsDispatchContext);  

    function handleDelete(cartItemID) {
        dispatch({
            type: 'delete', 
            cartItemID: cartItemID, 
        })
    }

    const items = cartContents.map(item => {
        return (
            <Item key={`${item.itemID}`}>
                <h4>{item.title}</h4>
                <InteractableContainer>
                    <h5> Quantity:{item.quantity}</h5>
                    <DeleteButton onClick={() => handleDelete(item.itemID)}><span className="material-symbols-outlined">delete</span></DeleteButton>
                </InteractableContainer>
            </Item>
        );
    })


    return (
        <PageContainer>
            <ItemContainer>
                {items}
            </ItemContainer>
            <CheckoutButton>Check out</CheckoutButton>
        </PageContainer>
    );

}

const Item = styled.div`
    display: flex;
    width: 50%;
    border: 2px solid black;
    border-radius: 10px;
    padding: 10px;
`;

const ItemContainer = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    background-color: red;
    gap: 10px;
`

const InteractableContainer = styled.div`
    display: flex;
    background-color: coral;
    margin-left: auto;
    gap: 30px;
    align-items: center;
`

const DeleteButton = styled.button`
    width: 40px;
    height: 40px;
`

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const CheckoutButton = styled.button`
    width: 4rem; 
    margin-left: auto;
`




export default CartPage;