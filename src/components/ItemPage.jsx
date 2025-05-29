import { useOutletContext } from "react-router-dom";
import { useContext, useState } from "react"; 
import { CartContext } from "./CartContext";
import styled from "styled-components";
import CustomInput from "./CustomInput";

function ItemPage() {

    const data = useOutletContext();
    const cartFunctions = useContext(CartContext);
    const [ quantity, setQuantity ] = useState(0);
    const {title, price, image, category, id } = data; 

    function handleQuantity(e) {
        setQuantity(e.target.value); 
    }

    function handlePurchase() {
        cartFunctions(id, quantity, title); 
    }

    return (
        <Page>
            <Showcase>
                <StyledCard>
                    <img src={`${image}`} alt="Image not found" width="300px"></img>
                </StyledCard>
                <ButtonContainer>
                    <button>LEFT</button>
                    <button>RIGHT</button>
                </ButtonContainer>
            </Showcase>
            <UserInterface>
                <h3>{title}</h3>
                <h3>{price}$</h3>
                <h6>{category}</h6>
                <label htmlFor="quantity">Quantity</label>
                <CustomInput customValue={quantity} setCustomValue={handleQuantity}></CustomInput>
                <button onClick={handlePurchase}>Buy now!</button>
            </UserInterface>
        </Page>
    );
}

const Page = styled.div`
    display: flex; 
    width: 100%;
    justify-content: space-around;
    background-color: coral;
`
const Showcase = styled.div`
    display: flex;
    width: 60%;
    align-items: center;
    flex-direction: column;
    background-color: blue;  
    padding: 2rem; 
`
const UserInterface = styled.div`
    display: flex; 
    flex-direction: column; 
    background-color: red; 
    padding: 2rem;
`
const ButtonContainer = styled.div`
    display: flex; 
    justify-content: space-around;
    background-color: red;
    width: 100%;
    padding: 2rem;
`
const StyledCard = styled.button`
    display: flex;
    flex-direction: column; 
    background-color: skyblue;
    gap: 20px;
    padding: 10px;
`;

export default ItemPage; 