import { useState, useEffect } from 'react'//guardar una variable

import React from 'react';
import CharacterCard from './CharacterCard';

function CharacterPage(props) {

    const [pagina, setPagina] = useState(0) //eje central de la aplicacion
  const [personajes, setPersonajes] = useState([])//arreglo vacio
  const [info, setinfo] = useState([])

  useEffect(() => {
    // Este useEffect se ejecutará una única vez cuando el componente se monte
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
      .then((response) => response.json())
      .then((data) => {
        setinfo(data.info)
        setPersonajes(data.results)
      })//informacion de los personajes se guarde
    //setPagina(data.info.page)

  }, [pagina])

  useEffect(() => {
    const url = new URL(window.location)//toda la inf de la url
    const params = new URLSearchParams(url.search)//parametros de busqueda crea un objeto
    const page = params.get('page')// agarre las paginas

    if (page == 'null') setPagina(page)
    console.log(page)
  }, [])

  const addQueryParams = () => {
    const url = new URL(window.location)
    url.searchParams.set('page', parseInt(pagina) + 1)//iterar sobre los parametros que estan arriba y el set agrega
    window.history.replaceState({}, '', url)
    setPagina(parseInt(pagina) + 1)
  }

  const addQueryParams2 = () => {
    const url = new URL(window.location)
    url.searchParams.set('page', parseInt(pagina) + 1)//iterar sobre los parametros que estan arriba y el set agrega
    window.history.replaceState({}, '', url)
    if (pagina > 0) setPagina(parseInt(pagina) - 1)
  }


  return (
    <>

      <h1 className='titulo'>Personajes de Rick and morty</h1>
      <div className='flex-container'>
        <div className='card'>

          {personajes.length !== 0 && personajes.map((personaje) => (//repite el codigo cuantas veces hay el personaje
            <CharacterCard
              key={personaje.id}
              title={personaje.name}
              genre={personaje.gender}
              status={personaje.status}
              img={personaje.image}

            />
          ))}
        </div>

      </div>
      <div className='centrar' >
        <button  onClick={addQueryParams2} >&laquo;</button>
        <button  onClick={addQueryParams}>&raquo;</button>
      </div>
    </>
  );
  
}

export default CharacterPage