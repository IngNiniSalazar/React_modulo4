import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbarComponent.css'

function NavbarComponent() {
  return (
    <div >
   
      <ul className='horizontal'>
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? 'active' : '')} >Home|</NavLink>
        </li>
        <li>
          <NavLink to="/character" className={({isActive}) => (isActive ? 'active' : '')}>Character|</NavLink>
        </li>
        <li>
          <NavLink to="/location" className={({isActive}) => (isActive ? 'active' : '')}>Location|</NavLink>
        </li>
        <li>
          <NavLink to="/Episode" className={({isActive}) => (isActive ? 'active' : '')}>Episode</NavLink>
        </li>
       
      </ul>
      <hr />
    </div>
  )
}

export default NavbarComponent