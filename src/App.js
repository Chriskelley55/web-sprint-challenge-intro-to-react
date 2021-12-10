import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character';
import logoTwo from './images/logoTwo.png'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then(resp => {
      console.log(resp.data)
      setCharacters(resp.data)
    })
    .catch(err => console.log(err))
  },[])
// console.log(characters)

  return (
    <div className="App">
      <h1 className="Header">Star Wars</h1>
      {characters.map(character => <Character character={character} key={character.name}/>)}
      <img src={logoTwo} alt="Disney, Pixar, Marvel, Star Wars, Nat Geo" />
    </div>
  );
}

export default App;
