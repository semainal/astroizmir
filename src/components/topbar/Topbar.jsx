import React from 'react'
import { Link } from 'react-router-dom'
import "./topbar.css"

export default function Topbar() {


  
  return (
    <div className='top'>
      <div className='top'>
   
   <div className="topLeft">
   
   <i className="topIcon fa-brands fa-facebook"></i>
   <i className="topIcon fa-brands fa-square-instagram"></i>
   <i className="topIcon fa-brands fa-linkedin"></i>
   <i className="topIcon fa-brands fa-square-twitter"></i>


   </div>
   <div className="topCenter">
     <ul className="topList">
         <li className="topListItem">
         <Link className="link" to="/" >Anasayfa</Link>
      
         </li>
         <li className="topListItem">
         <Link className="link" to="/about" >Hakkımızda</Link>
         </li>
         <li className="topListItem">
         <Link className="link" to="/contact" >İletişim</Link>
         </li>
         <li className="topListItem">
         <Link className="link" to="/write" >Write</Link>
         </li>

         <li className="topListItem">
         Çıkış
         </li>
        
         
         
        
     </ul>
   </div>
   <div className="topRight">
     
  
            <Link to="/settings">
            <img className="topImg" src=''
          alt="" />
            </Link>
          
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">Giriş</Link>
              </li>
            
              <li className="topListItem">
                <Link className="link" to="/register">Kayıt</Link>
              </li>
            </ul>
        



     
     
         
     <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
   </div>
 </div>
 </div>
  )
}

