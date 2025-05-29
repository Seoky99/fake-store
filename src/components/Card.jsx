import styled from "styled-components";

const StyledCard = styled.button`
        display: flex;
        flex-direction: column; 
        background-color: skyblue;
        gap: 20px;
        padding: 10px;
        cursor: pointer;
`;

function Card({cardInfo, handleClick}) {
    
    const {title, price, image, category, id} = cardInfo; 
    return (
        <StyledCard onClick={() => handleClick(id)}>
            <img src={`${image}`} alt="Image not found" height="300px"></img>
            <h3>{title}</h3>
            <h3>{price}$</h3>
            <h6>{category}</h6>
        </StyledCard>
    );
}

export default Card; 