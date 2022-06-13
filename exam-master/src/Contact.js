import React from 'react'
import { useState } from 'react';
import './App.css'
const Contact = () => {
 
    const[data,setData]=useState({
      email:'',
      message:'',
      
          })
          const {email,message}=data;
          const handler=e=>{
              setData({...data,[e.target.name]:[e.target.value]})
          }
          const submit=e=>{
              e.preventDefault()
              console.log(data)
          }
        return (
          <div >
      
          <center>
              <h1></h1>
              <h1></h1>
              <h1 className='input'> Any Queries ??</h1>
      <form onSubmit={submit} className='input'>
          <input type="text" name="email" value={email} onChange={handler} placeholder="E-mail" className='con'/>
          <input type="text" name="message" value={message} onChange={handler}placeholder="Message" className='con1'/>
      
          <button onClick={()=>alert('Submitted')}>Submit</button>
      </form>
          </center>
      
          </div>
  )
}

export default Contact