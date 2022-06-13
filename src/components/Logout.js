import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect,history } from 'react'
import '../App.css'
const Logout = () => {
    const logout=async()=>{
        try{
            const res=await fetch('/logout',{
                method:"GET",
                headers:{
                    Accept:"application/json"
                },
                credentails:"include"
            });
if(res.status===401||!res){
    window.alert("please Logout later");
}else{
    history.pushState('/');
    window.location.reload();
}
        }catch(error){
console.log(error)
        }
    }
    useEffect(()=>{
        logout();
    },[])
  return (
    <div><centre>
        <br/>
        <br/>
        <h1></h1>
        <h1>
            Your are logged out
        </h1>
<br/>
<h3>Or <br/>
    Again <br/>
    Login</h3>
       
       <NavLink to='/con'  ><h4 className='add'>   Go to Contact</h4></NavLink>   
        </centre></div>
  )
}

export default Logout