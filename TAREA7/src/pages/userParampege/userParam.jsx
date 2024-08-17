import React from 'react'
import { useParams } from 'react-router-dom'

function userParam() {
    const param = useParams();//ayuda a capturar el parametro de la url
    console.log(param,'param');
  return (
    <div>
        <ul>
            <li>
                <h2>
                    Nombre ID: {param.id}
                </h2>
            </li>
           
        </ul>
    </div>
  )
}

export default userParam