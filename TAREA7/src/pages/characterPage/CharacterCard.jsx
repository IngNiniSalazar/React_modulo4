import React from 'react';
      import Title from '../../component/title';
      import Image from '../../component/imagen';
      import Details from '../../component/details';

      function CharacterCard(props) {
        // Recuerda que este es solo un componente funcional, 
        // tu debes incluir estilos para hacerlo más atractivo
        return (
          <div>
            {/* Nombre de el personaje */}
            <Title title={props.title}/>
            {/* Imagen de el personaje */}
            <Image url={props.img} />
            {/* Detalles de el personaje */}
            <Details 
              genre={props.genre} 
              status={props.status} 
            />
          </div>
        );
      }

      export default CharacterCard;
