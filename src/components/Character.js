// Write your Character component here
import styled from "styled-components"; 
import logoTwo from '../images/logoTwo.png'

const DisplayCharacters = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 1%;
    border: 2px solid #000055;
    margin: 1%;
    .h2{
        padding: 0 2%;
        justify-content: center;
    }
    h2:hover {
        text-shadow: 13px 12px 12px #000055;
    }
      div{
        font-size: large;
        background: lightgrey;
        }
        div:hover {
        text-shadow: 13px 12px 12px #000055;
    }
        
`;

function Character ({ character }){
    return (
        <DisplayCharacters>
            <h2>Name: {character.name} </h2>
            <div>Height: {character.height}</div>
            <div>Mass: {character.mass}</div>
            <div>Hair Color: {character.hair_color}</div>
            <div>Birthdate {character.birth_year}</div>
            </DisplayCharacters>
            
    );
};
export default Character