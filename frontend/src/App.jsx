import React from 'react'
import Login from './assets/component/Login'
import Signup from './assets/component/Signup'
import Home from './assets/component/Home'
import AdminDashboard from './assets/component/AdminDashboard'
import {BrowserRouter as Router,Route,Routes,Link}
from 'react-router-dom'

const App = () => {
  return (
   <Router>
    <div>
      <nav>
        <Link to="/">User Management</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/' element={<Signup/>}/>
      <Route path='/' element={<AdminDashboard/>}/>
      
     
    </Routes>
   </Router>
  )
}

export default App