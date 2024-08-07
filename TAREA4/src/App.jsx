import { useState, useEffect } from 'react'//guardar una variable
import Card from './component/CharacterCard'
import Portada from './component/Portada'
import './App.css'



function App() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [genre, setGenre] = useState("");
    const [status, setStatus] = useState("");
    const rickAndMortyCharacterId=99;
    useEffect( () => {
      fetch("https://rickandmortyapi.com/api/character/"+rickAndMortyCharacterId)
      .then((response) => response.json())
      .then((data) => {
          // Acá podemos procesamos la respuesta de el endpoint
          console.log(data, "data"); // Resultado de el endpoint

          // Utiliza la variable result para actualziar las variables de estado de el paso 1
          setName(data.name);
          setImage(data.image);
          setGenre(data.genre);
          setStatus(data.status)})
      
    }, [])  

  return (
    
    <div>
    <h1>Personajes de Rick and morty</h1>
    {/* 
      Paso 3. Ahora debes renderizar el componente CharacterCard.jsx 
      enviandole como propiedades la información consultada 
      desde la API y que guardaste en las variables de estado de el paso 1 
    */}
    <Card 
      name={name}
      image={image}
      genre={genre}
      status={status}
    />
  </div>
  );
}

export default App;