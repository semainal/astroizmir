
import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {


  return (
    <div className="register">
    
    <span className="registerTitle">Kayıt</span>
    <form  className="registerForm" >
    <label>Kullabıcı Adı</label>
        <input type="text" className="registerInput" placeholder="Enter your username"
    
        />
        
        <label>E-mail</label>
        <input type="text" className="registerInput" placeholder="Enter your email" 
          
        />

        <label>Şifre</label>
        <input type="password" className="registerInput" placeholder="Enter your password"
        
        />
    
        <button className="registerButton" type="submit">Kayıt</button>
        <div className="errorSpan">
       
        </div>
        </form>

        <button className="registerLoginButton">
        <Link className="link" to="/login">Giriş</Link>
        </button>

        
        
</div>
  )
}