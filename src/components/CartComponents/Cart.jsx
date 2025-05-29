import { useNavigate } from "react-router-dom";

function Cart({cartContents}) {

    const navigate = useNavigate(); 

    function handleCartClick() {
        navigate(`/cart`);
    }

    return (
        <>
            <button onClick={handleCartClick}>
                <span className="material-symbols-outlined">shopping_cart</span>
            </button>
            <h3>{cartContents.length}</h3>
        </>
    );

}

export default Cart; 