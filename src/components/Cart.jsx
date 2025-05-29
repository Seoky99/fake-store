function Cart({cartContents}) {

    return (
        <>
            <button>
                <span className="material-symbols-outlined">shopping_cart</span>
            </button>
            <h3>{cartContents.length}</h3>
        </>
    );

}

export default Cart; 