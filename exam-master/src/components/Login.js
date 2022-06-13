import React from 'react'
import {NavLink} from 'react-router-dom'
import { useState } from 'react'
import Register from './Register'
const Login = () => {
  const[user,setUser]=useState({
    email:'',
    password:''
  })
  const handleChange=(event)=>{
    let name=event.target.name
    let value=event.target.value

    setUser({...user,[name]:value})
  }
  const handleSubmit=async (event)=>{
    event.preventDefault();
    const{email,password}=user;
    try{
      const res=await fetch('/login',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email,password
        })
      });
      
      if(res.status===400||!res){
        window.alert("Invalid")
      }else{
        window.alert("Login successful");
        window.location.reload();
      }
    }catch (error){
console.log(error);
    }
    
  }
  return (
    <div>
        <div className='container shadow my-5'>
            <div className='row'>
                <div className='col-md-5 d-flex flex-column align-items-center form'>
                    <h1 className='display-4 fw-bolder'>Welcome back</h1>
                    <p className='lead text-center'>Enter Your Credential</p>
                <h5>OR</h5>
                <NavLink to='/register' >
                    Register
                    </NavLink>
                </div>
                <div className='col-md-6'>
                    <h1 className='display-6 fw-bolder mb-5'>Login</h1>
                    <form onSubmit={handleSubmit} method="POST">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={user.email} onChange={handleChange}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" name="password" value={user.password} onChange={handleChange}>Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Remember me</label>
  </div>
  <button type="submit" class="btn btn-primary w-100">Login</button>
</form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login