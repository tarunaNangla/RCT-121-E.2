
import React from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterPageTwo = () => {
    const navigate=useNavigate();
  return (
    <div>
      <form>
      <form>
           Address:<br></br>
           <input placeholder='Enter address'></input>
           <br></br>
           Phone Number:<br/>
           <input placeholder='Enter phone number'></input><br/>
           <button onClick={()=>{navigate("/register/one")}}>Prev</button>
           <button onClick={()=>{navigate("/register/one")}}>Next</button>
      </form>
      </form>
    </div>
  )
}

export default RegisterPageTwo
