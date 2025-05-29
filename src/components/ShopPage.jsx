import { useEffect, useState } from "react"; 
import { Outlet, useParams } from "react-router-dom";
import ShopList from "./ShopList";

function ShopPage() {

    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(false);
    const [data, setData] = useState(null); 

    const params = useParams(); 
    const itemView = params.id !== undefined;      

    useEffect( () => {

        //setTimeout(makeAFetch, 2000);

        function makeAFetch() {
            fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {console.log("THEN data fetching here"); console.log(data); setData(data);})
            .catch(err => {console.log(err); setError(true);})
            .finally(() => {setLoading(false);});
        }
        makeAFetch(); 
    }, [])

    if (loading) {
        return <h1>what the</h1>;
    }

    if (error) {
        return <h1>ERROR DETECTED</h1>;
    }

    function returnCorrectItem(data, id) {
        return data.filter(elt => id === elt.id)[0]; 
    }

    return (
        <>
            <h1>This is the shop page</h1>
            {!loading && !itemView && <ShopList data={data}/>}
            {itemView && <Outlet context={returnCorrectItem(data, Number(params.id))}></Outlet>}
        </>
    );
}

export default ShopPage;