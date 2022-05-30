import React from 'react'
import {Routes, Route } from 'react-router-dom'
// import Dashboard from './Dashboard'
import RegisterPageOne from './RegisterPageOne'
import RegisterPageTwo from './RegisterPageTwo'
import { Link } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <div>
   
    <div style={{marginLeft:"500px", display:"flex", gap:"20px"}}>
      <Link to="/register/one"> Register 1</Link>
      <Link to="/register/two"> Register 2</Link>
    </div>
    <Routes>
       
       <Route path={"/register/one"} element={<RegisterPageOne />} ></Route>
       <Route path={"/register/two"} element={<RegisterPageTwo />} ></Route>
       <Route path={"/private"} element={<PrivateRoute />}></Route>
    </Routes>      
    </div>
  )
}

export default AllRoutes
