import React from 'react'
import About from './components/About'
import Contact from './Contact'
import Navbar from './Navbar.js'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Products from './Products'
import { Data } from './components/Data'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Address from './Address'
import { NavLink } from 'react-router-dom'
import Logout from './components/Logout'
import GPS from './components/GPS'
const App = () => {
  return (
    <div>
      <h1></h1>
          <h1></h1>
<Router>
  <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/about' element={<About/>} />
 

<Route path='/prod' element={<Products slides={Data} />} />
<Route path='/login' element={<Login/>} />
<Route path='/register' element={<Register/>} />
<Route path='/add' element={<Address/>}/>
<Route path='/con' element={<Contact/>}/>
<Route path='/logout' element={<Logout/>}/>
<Route path='/gps' element={<GPS/>}/>
  </Routes>
</Router>

    </div>
  )
}

export default App