import { useOutletContext } from "react-router-dom";
import { useContext, useState } from "react"; 
import { ItemsDispatchContext } from "../ItemsContext";
import styled from "styled-components";
import CustomInput from "./CustomInput";

function ItemPage() {

    const data = useOutletContext();
    const dispatch = useContext(ItemsDispatchContext);

    const [ quantity, setQuantity ] = useState(1);
    const { title, price, image, description } = data; 

    function handleQuantity(e) {
        setQuantity(e.target.value); 
    }

    function handleQuantityButton(e) {
        e.target.name === 'inc' ? setQuantity(prev => prev+1) : setQuantity(prev => prev > 1 ? prev-1 : prev);
    }

    function handlePurchase() {
        dispatch({
            type: 'add',
            quantity: quantity,
            item: {...data},
        });
    }

    return (
        <Page>
            <Showcase>
                <StyledCard>
                    <img src={`${image}`} alt="Image not found"></img>
                </StyledCard>
                <ButtonContainer>
                    <button>LEFT</button>
                    <button>RIGHT</button>
                </ButtonContainer>
            </Showcase>
            <UserInterface>
                <ItemDescription>
                    <ItemTitle>{title}</ItemTitle>
                    <ItemPrice>{price}$</ItemPrice>
                    <p>{description}</p>
                </ItemDescription>
                <QuantityContainer>
                    <label htmlFor="quantity">Quantity:</label>
                    <button className={quantityButtonRules} name="dec" onClick={handleQuantityButton}>-</button>
                    <CustomInput customValue={quantity} setCustomValue={handleQuantity}></CustomInput>
                    <button className={quantityButtonRules} name="inc" onClick={handleQuantityButton}>+</button>
                </QuantityContainer>
                <PurchaseButton onClick={handlePurchase} type="button" className={purchaseButtonRules}>Purchase</PurchaseButton>
            </UserInterface>
        </Page>
    );
}

const Page = styled.div`
    display: flex; 
    width: 100%;
    justify-content: center;
`
const Showcase = styled.div`
    display: flex;
    width: 40%;
    align-items: center;
    flex-direction: column;
    padding: 2rem; 
`

const StyledCard = styled.button`
    display: flex;
    flex-direction: column; 
    gap: 20px;
    padding: 10px;
    max-width: 300px;
`;

const UserInterface = styled.div`
    display: flex; 
    flex-direction: column; 
    padding: 2rem;
    gap: 1rem;
`

const ItemTitle = styled.h3`
    font-size: 1.9rem; 
    font-weight: 800;
`

const ItemPrice = styled.p`
    font-size: 1.6rem;
    margin-bottom: 2rem;
`

const ItemDescription = styled.div`
    display: flex;
    flex-direction: column; 
    padding-bottom: 5px;
    border-bottom: 2px solid black;    
    max-width: 45ch;
`
const ButtonContainer = styled.div`
    display: flex; 
    justify-content: space-around;
    width: 100%;
    padding: 2rem;
`

const QuantityContainer = styled.div`
    display: flex; 
    gap: 0.4rem;
    align-items: center;
    margin-top: 3rem;

    label {
        margin-right: 1rem; 
    }

    button {
        font-weight: bold;
    }
`

const PurchaseButton = styled.button`
    height: 3rem;
    width: 10rem;
`
const purchaseButtonRules = "cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2";
const quantityButtonRules = "w-8 bg-gray-200 border border-transparent text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5";
 
export default ItemPage; 