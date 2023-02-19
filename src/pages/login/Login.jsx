import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"


export default function Login() {
  return (
    <div className='background'>
    <div className="login">
        
      
        <span className="loginTitle">Giriş</span>
        <form  className="loginForm" >
            <label>Kullanıcı Adı</label>
            <input type="text" className="loginInput" placeholder="Enter your username" 
             />

            <label>Şifre</label>
            <input type="password" className="loginInput" placeholder="Enter your password" 
           />
        
            <button className="loginButton" type="submit"  >Giriş</button>
            <button className="loginRegisterButton">
              <Link className="link" to="/register">Kayıt</Link></button>
        
        
          
        </form>

        </div>
        
    </div>
  )
}
