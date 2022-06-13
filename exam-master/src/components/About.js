import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
const About = () => {
  return (
    <div>
       <center>
       <h1 className='head'>Best of Indian Products<br/>
About this app</h1>
<p className='p'>Best of Indian products is a marketplace where buyers around the world.<br/> can get products online at low prices and good quality through sellers with minimum charges.<br/> Our goal is to be the best destination for Indians buyers worldwide and sellers of India.</p>
<h1>---------------------------------------------------------------------------</h1>
<label>Version</label>
<p>
1.0s
<br/>
Updated on
Sep 14, 2020
Requires Android
4.2
<br/>
Updated on
Sep 14, 2020
Requires Android
4.2 and up
Downloads
100,000+ downloads.
<br/>
Released on
Aug 22, 2018
<br/>
Offered by
Egbert Reuben Ventures Private Limited
</p>
<NavLink to='/'  className='log1'>Back to Home</NavLink>
<br/>
<NavLink to='/prod' className='log1'>Go to products</NavLink>
       </center>
    </div>
  )
}

export default About