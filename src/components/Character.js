// Write your Character component here
import react from "react";  
import styled from "styled-components"; 

const DisplayCharacters = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
`;

function Character ({ character }){
    return (
        <DisplayCharacters>
            <h2>Name: {character.name} </h2>
        </DisplayCharacters>
    );
};
export default Character