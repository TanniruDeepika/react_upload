import React from 'react'
import {NavLink} from 'react-router-dom'
import { useState,history } from 'react'
import '../App.css'
import Login from './Login'
const Register = () => {

 const[user,setUser]=useState({
  username:"",
email:"",
password:""
 });
 const handleInput=(event)=>{
  let name=event.target.name;
  let value=event.target.value;
  setUser({...user,[name]:value})
 }
const handleSubmit=async (event)=>{
  event.preventDefault();
 const {username,email,password}=user;
 try{
  const res=await fetch('/register',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      username,email,password
    })
  })
  if(res.status===400||!res){
    window.alert("already")
  
  }else{
    window.alert("register");
  history.push('/login');
  }
 }catch(error){
console.log(error);
 }
}
  return (
    <div><div className='container shadow my-5'>
    <div className='row'>
        <div className='col-md-5 d-flex flex-column align-items-center form text-white justify-content-center form order-2'>
            <h1 className='h1'>Hello, Friends!!</h1>
            <br/>
            <h1 className='h1'>Enter Your details to Register</h1>
        <h5>OR</h5>
        <NavLink to='/login' className='btn btn-outline-light rounded-pill pb-2 w-50'>
           Login
            </NavLink>
        </div>
        <div className='col-md-6'>
           
            <form  onSubmit={handleSubmit} method="POST">
              <div className='mb-3'>
                <label htmlFor='name' className='form-label'>
                  username
                </label>
                <input type="text" className="form-control" id="name" name="username" value={user.username} onChange={handleInput}/>
              </div>
<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Email address</label>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={user.email} onChange={handleInput}/>
<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>
<div class="mb-3">
<label for="exampleInputPassword1" class="form-label">Password</label>
<input type="password" class="form-control" id="exampleInputPassword1" name="password" value={user.password} onChange={handleInput}/>
</div>
<div class="mb-3 form-check">
<input type="checkbox" class="form-check-input" id="exampleCheck1"/>
<label class="form-check-label" for="exampleCheck1">I Agree Terms and Conditions</label>
</div>
<button type="submit" class="btn btn-outline-primary w-100 mt-4">Register</button>
</form>
        </div>
    </div>
</div></div>
  )
}

export default Register