import styled from "styled-components"

const HeaderWrapper = styled.div`
    display: flex;
    background-color: coral;
    justify-content: center;
`;

function Header() {
    return (
        <HeaderWrapper>
            <h1>Fake Store</h1>
        </HeaderWrapper>
    );
}

export default Header; 