import styled from "styled-components";

function Card({cardInfo, handleClick}) {
    
    const {title, price, image, category, id} = cardInfo; 
    return (
        <StyledCard onClick={() => handleClick(id)}>
            <ImageContainer>
                <StyledImage src={`${image}`} alt="Image not found"></StyledImage>
            </ImageContainer>
            <ItemDescriptionContainer>
                <p>{title}</p>
                <p>{price}$</p>
            </ItemDescriptionContainer>
            <Tag>
                <h6>{category}<span className="material-symbols-outlined">label</span></h6>
            </Tag>
        </StyledCard>
    );
}

const StyledCard = styled.div`
    display: flex;
    flex-direction: column; 
    background-color: white;
    align-items: center;
    gap: 20px;
    padding: 10px;
    cursor: pointer;
    border: 4px solid black;
    border-radius: 10px;

    h3 {
        font-size: 1.2rem;
        height: 100px; 
    }

    animation: fade 0.5s ease-in;

    @keyframes fade {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const StyledImage = styled.img`
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
`

const ImageContainer = styled.div`
    width: 50%; 
    height: 200px;
    display: flex; 
    justify-content: center; 
    align-items: center;
    overflow: hidden; 
`

const ItemDescriptionContainer = styled.div`
    height: 150px;
    font-size: 1.2rem;
    border-bottom: 1px solid black;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;

    p + p {
        font-size: 1.2rem;
        margin-top: auto;
        align-self: flex-end;
    }
`

const Tag = styled.div`
    display: flex;
    align-items: center;
    background-color: coral;
    height: 20px;
    width: 100px;
    margin-left: auto;
    border-left: solid 2px black;
    font-size: 0.6rem;

    h6 {
        margin-left: auto;
    }

    span {
        margin-left: 3px;
        font-size: 0.8rem;
        vertical-align: middle;
    }
`


export default Card; 