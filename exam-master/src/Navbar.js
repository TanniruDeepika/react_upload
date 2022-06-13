
import React from 'react'
import './App.css'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div  >
      <ul>
        <li>
       <NavLink to='/' className='home'>Home</NavLink>
        </li>
        <li>
        <NavLink to='/about'className='home'>About</NavLink>
        </li>
        <li>
        <NavLink to='/con ' className='home'>Contact</NavLink>
        </li>
        <li>
        <NavLink to='/prod' className='home'>Products</NavLink>
        </li>
        <NavLink to='/logout' className='log'>Logout</NavLink>
        <NavLink to='/login' className='log'>Login</NavLink>
        <NavLink to='/register' className='log'>Register</NavLink>
        
        
      </ul>
      
    </div>
  )
}

export default Navbar