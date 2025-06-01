import styled from "styled-components";
import { useState } from "react"; 

function Sidebar({tags, activeTags, setActiveTags, filterData}) {

    const [filterOpen, setFilterOpen] = useState(false);

    function handleChange(e) {
        const newActiveTags = new Set(activeTags);

        const tag = e.target.value; 

        if (activeTags.has(tag)) {
            newActiveTags.delete(tag); 
        } else {
            newActiveTags.add(tag);
        }
        setActiveTags(newActiveTags);
        filterData(newActiveTags); 
    }


    const tagsToRender = tags.map(tag => {
        return (<Tag key={tag} className="fade-in">
                    <input type="checkbox" name="tag" id={tag} value={tag} checked={activeTags.has(tag)} onChange={e => handleChange(e)} className="w-4 h-4 accent-blue-500"/>
                    <label htmlFor={tag} className="ml-2">{tag}</label>
                </Tag>);
    }) 

    return (
        <TagContainer>
            <TagTab onClick={() => setFilterOpen(!filterOpen)}>
                <p>Filter by tag</p>
                <span>{filterOpen ? "▲" : "▼"}</span>
            </TagTab>
            {filterOpen && tagsToRender}
        </TagContainer>
    );
}

const TagContainer = styled.ul`
    width: 250px; 
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Tag = styled.li`
    font-size: 0.8rem;
    
    animation: fade 0.3s ease-in;

    @keyframes fade {
    from {
        opacity: 0;
        transform: translateY(-6px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const TagTab = styled.div`
    background-color: grey;
    padding: 0.2rem;
    width: 75%;
    cursor: pointer;
    display: flex;
    padding: 0.5rem;

    
    & span {
        margin-left: auto;
    }
`

export default Sidebar; 