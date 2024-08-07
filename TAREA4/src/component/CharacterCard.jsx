import React from 'react';
      import Title from './title';
      import Image from './imagen';
      import Details from './details';

      function Card(props) {
        // Recuerda que este es solo un componente funcional, 
        // tu debes incluir estilos para hacerlo más atractivo
        return (
          <div>
            {/* Nombre de el personaje */}
            <Title title={props.name}/>
            {/* Imagen de el personaje */}
            <Image url={props.image} />
            {/* Detalles de el personaje */}
            <Details 
              genre={props.genre} 
              status={props.status} 
            />
          </div>
        );
      }

      export default Card;
