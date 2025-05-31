import styled from "styled-components"

const inputRules = "w-14 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5";

function CustomInput({customValue, setCustomValue}) {

    return (
        <StyledInput className={inputRules} type="number" min="1" value={customValue} onChange={setCustomValue}></StyledInput>
    );
}

const StyledInput = styled.input`
    &::-webkit-outer-spin-button, 
    &::-webkit-inner-spin-button {
        -webkit-appearance: none; 
        margin: 0;
    }

    &[type='number'] {
    -moz-appearance: textfield; /* Firefox */
    }

`; 

export default CustomInput; 