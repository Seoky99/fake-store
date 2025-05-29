import Card from "./Card";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
`

function ShopList({data}) {

    const navigate = useNavigate(); 

    function handleClick(id) {
        navigate(`${id}`);
    }

    const elementList = data.map(elt => {
        return <Card cardInfo={elt} key={elt.id} handleClick={handleClick}></Card>;
    }) 

    return (
        <CardWrapper>
            {elementList}
        </CardWrapper>
    )
}

export default ShopList; 