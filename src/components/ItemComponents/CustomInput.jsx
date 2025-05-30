function CustomInput({customValue, setCustomValue}) {

    return (
        <input type="number" min="1" value={customValue} onChange={setCustomValue}></input>
    );
}

export default CustomInput; 