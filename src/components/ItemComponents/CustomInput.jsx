function CustomInput({customValue, setCustomValue}) {

    return (
        <input type="number" value={customValue} onChange={setCustomValue}></input>
    );
}

export default CustomInput; 