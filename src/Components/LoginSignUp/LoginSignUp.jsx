
import React, { useState } from 'react';

import './LoginSignUp.css'

import user from '../Assets/person.png'
import password from '../Assets/password.png'
import email from '../Assets/email.png' 

export const LoginSignUp = () => {
    const[action ,setAction] = useState("Sign Up");
  return (
    <div className="screen">
    <div className = 'container'>
       <div className="header">
        <div className="text">
            {action}
        </div>
        <div className="underline"></div>
       </div>
       <div className="inputs">
        {action==="Login"? <div></div> : <div className="input">
            <img src={user} alt="" />
            <input type="text" placeholder='Name' />
        </div>}
        

        <div className="input">
            <img src={email} alt="" />
            <input type="email"placeholder='Email' />
        </div>

        <div className="input">
            <img src={password} alt="" />
            <input type="password" placeholder='password' />
        </div>
       </div>
       {action ==="Sign Up" ? <div></div> : <div className="forgetpassword">forgot password ? <span>click here!</span></div>}
       
       <div className="submit-container">
        <div className={action=== "Login" ? "submit gray": "submit"} onClick={()=>{setAction("Sign Up")}} >Sign up</div>
        <div className={action==="Sign Up" ? "submit gray": "submit"} onClick={()=>{setAction("Login")}}>Login</div>
       </div>
    </div>
    </div>
  )
}
