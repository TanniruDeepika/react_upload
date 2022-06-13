import React from 'react'
import { Data } from './components/Data'
import { NavLink } from 'react-router-dom'
const ProductList = () => {
  return (
    <div>
        {
            Data.map((slide,Index)=>{
                <li>{slide.title}<br/>
                {slide.price}</li>
                
            })
            
        }
          <NavLink to='/prod'  ><h4 className='add'>Buy</h4></NavLink>   
    </div>
  )
}

export default ProductList