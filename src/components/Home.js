import React from 'react'
import Images from '../Products'
import Navbar from '../Navbar'
import { Data } from './Data'
import Address from '../Address'
import { NavLink } from 'react-router-dom'
import Contact from '../Contact'
const Home = () => {
  return (
    <div className='Home'>
        <center>
          <Navbar/>
          
            <h1>
            <h1></h1>
          <br/>
               Products App
            </h1>
            <Images slides={Data}/>
             
        <br/>
        <br/>
        <img src="https://1.bp.blogspot.com/-6j0O7KLU44g/VycGES9Gr4I/AAAAAAAAAWY/IT8jC_2lDMQKuCFUrwMpudemZVYVDjeEwCLcB/s1600/country-wise-mobile-phones-import.png"/>
        <Address/>
        <br/>
        <img src="http://static9.depositphotos.com/1036174/1097/i/950/depositphotos_10978730-stock-photo-3d-small-mobile-phone-and.jpg" className='image'/>
       <Contact/>
       </center>
    </div>
  )
}

export default Home