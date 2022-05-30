import React from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterPageOne = () => {
    const navigate=useNavigate();
  return (
    <div>
      <form>
           Name:<br></br>
           <input placeholder='Enter Name'></input>
           <br></br>
           Email:<br/>
           <input placeholder='Enter Email'></input><br/>
         
           <button onClick={()=>{navigate("/register/two")}}>Next</button>
      </form>
    </div>
  )
}

export default RegisterPageOne
