import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

const StyledCard = styled.button`
        display: flex;
        flex-direction: column; 
        background-color: skyblue;
        gap: 20px;
        padding: 10px;
        cursor: pointer;
`;

function ItemPage() {

    const data = useOutletContext();
    console.log(data);
    const {title, price, image, category} = data; 

    return (
        <>
            <button>LEFT</button>
            <StyledCard>
                <img src={`${image}`} alt="Image not found" height="300px"></img>
                <h3>{title}</h3>
                <h3>{price}$</h3>
                <h6>{category}</h6>
            </StyledCard>
            <button>RIGHT</button>
            <input type="number"></input>
        </>
    );

}

export default ItemPage; 