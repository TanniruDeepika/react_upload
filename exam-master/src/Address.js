import React from 'react'
import { useState } from 'react'
import './App.css'
const Address = () => {
    const[data,setData]=useState({
houseno:'',
colony:'',
city:''
    })
    const {houseno,colony,city}=data;
    const handler=e=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submit=e=>{
        e.preventDefault()
        console.log(data)
    }
  return (
    <div className='input'>

    <center>
        <h1></h1>
        <h1></h1>
        <h1 className='input'> Place your Order</h1>
<form onSubmit={submit} className='input'>
    <input type="text" name="houseno" value={houseno} onChange={handler} placeholder="House No" className='input'/>
    <input type="text" name="colony" value={colony} onChange={handler}placeholder="Colony" className='input'/>
    <input type="text" name="city" value={city} onChange={handler} placeholder="City" className='input'/>
    <button onClick={()=>alert('Order placed')}>Submit</button>
</form>
    </center>

    </div>
  )
}

export default Address