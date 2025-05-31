import styled from "styled-components"

function Header() {
    return (
        <HeaderWrapper>
            <h1>Fake Store</h1>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.div`
    display: flex;
    background-color: coral;
    justify-content: center;
    font-size: 3rem;
    padding: 2rem;
    
    h1 {
        font-family: "playfair_displaybold";
    }
`;

export default Header; 