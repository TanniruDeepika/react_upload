import React from 'react'
import { useState } from 'react'
import { Data } from './components/Data'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import About from './components/About'
import ProductList from './ProductList'
const Products = ({slides,title}) => {
    const [current,setCurrent]=useState(0);
    const [use ,setUse]=useState('');
    const length=slides.length;
const nextSlide=()=>{
    setCurrent(current===length-1?0:current+1);
}
    const prevSlide=()=>{
        setCurrent(current===0?length-1:current-1)
    }
    if(!Array.isArray(slides)||slides.length<=0){
        return null;
    }
  return (
    <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow'  onClick={nextSlide}/>
        {
            Data.map((slide,index)=>{
                return (
                    <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index} 
                  >
                    {index === current && (
                      <img src={slide.image}   className='image'  />
                    )}
                   <div className='name'>
                    
                 {slide.title}
        <br/>
       Price: {slide.price}
       <br></br>
       

       
       <NavLink to='/gps'  ><h4 className='add'>GPS</h4></NavLink> 
       <br/>
       <NavLink to='/prod'  ><h4 className='add'>Buy</h4></NavLink> 
       <br/>
    </div>
                    
                    </div>
                )
            })
        }
    </section>
  )
}

export default Products;