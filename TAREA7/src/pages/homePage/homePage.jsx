import React from 'react'
import { Link } from 'react-router-dom'


const HomePage = () => {
    const userId=10;
    return (
       
        <div className='titulo'>
             <h1>THE RICKY AND MORTY API</h1>
            <ul>
                <li className='ricky'>    
                    <img src='ricky' alt=''/>
                </li>    
            </ul>
        </div>
    )
}

export default HomePage