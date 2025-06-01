import { useEffect, useState } from "react"; 
import { Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import ShopList from "./ShopList";
import Sidebar from "./Sidebar";
import LoadingAnimation from "./LoadingAnimation";

function ShopPage() {

    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(false);
    const [data, setData] = useState(null); 
    const [viewedData, setViewedData] = useState(null);

    const [tags, setTags] = useState(new Set()); 
    const [activeTags, setActiveTags] = useState(new Set()); 

    const params = useParams(); 
    const itemView = params.id !== undefined;      
    
    useEffect(() => {
        setTimeout(makeAFetch, 500);

        function gatherTags(initialData) {
            const newTags = new Set(); 
            console.log(initialData);
            initialData.forEach(elt => {
                if (!(newTags.has(elt.category))) {
                    newTags.add(elt.category); 
                } 
            });
            setTags(newTags);
        }

        function makeAFetch() {
            fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                    data = data.map(item => {
                        return {...item, price: Number(item.price).toFixed(2)}
                    })
                    setData(data); 
                    setViewedData(data); 
                    gatherTags(data); 
                })
            .catch(err => {console.log(err); setError(true);})
            .finally(() => {setLoading(false); });
        }
    }, [])

    if (loading) { return <LoadingDiv><LoadingAnimation/></LoadingDiv>; }
    if (error) { return <h1>ERROR DETECTED</h1>;}

    function returnCorrectItem(data, id) {
        return data.filter(elt => id === elt.id)[0]; 
    }

    function filterData(newTags) {

        if (newTags.size === 0) {
            setViewedData([...data]);
            return; 
        }

        const filteredData = data.filter(item => {
            return (newTags.has(item.category));  
        }); 

        setViewedData(filteredData);
    } 

    return (
        <>
            {!loading && !itemView && <ShopContent><Sidebar tags={Array.from(tags)} activeTags={activeTags} setActiveTags={setActiveTags} filterData={filterData}></Sidebar><ShopList data={viewedData}/></ShopContent>}
            {itemView && <Outlet context={returnCorrectItem(data, Number(params.id))}></Outlet>}
        </>
    );
}

const ShopContent = styled.div`
    display: flex;
    padding: 1.5rem;
`

const LoadingDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3%;
`

export default ShopPage;