import React from 'react'
import { Link } from 'react-router-dom'
import { Routes,Route} from 'react-router-dom'
import RegisterPageOne from './RegisterPageOne'


const Dashboard = () => {
  return (
      <>
    <div>
      <Link to="/register/one"> Register 1</Link>
      {/* <Link to="/register/two"> Register 2</Link> */}
    </div>
    
    <Routes>
        {/* <Route path={"/"} element={<Dashboard />} ></Route> */}
       <Route path={"/register/one"} element={<RegisterPageOne />} ></Route>
     
    </Routes>
      </>
    
  )
}

export default Dashboard


