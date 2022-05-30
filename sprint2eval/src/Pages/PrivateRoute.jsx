import React from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'

const PrivateRoute = () => {
  return (
      <>
    <div>
    <Link to="/dash"> Dashboard</Link>
    </div>
    <Routes>
        <Route path={"/dash"} element={<Dashboard />}></Route>
    </Routes>
      </>
    
  )
}

export default PrivateRoute
