import React from 'react'
import "./header.css"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import astroizmirHeader1 from "../../img/astroizmirHeader1.png"
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <>
    <div className="header">
    <div className="headerTitles">
      <span className="headerTitleSm">Astro</span>
      <span className="headerTitleLg">İzmir</span>
    </div>
    <img className="headerImg" src={astroizmirHeader1}alt="" />
   
    <div className="headerCenter">
      <ul className="headerList nav justify-content-center">
      <li className="headerListItem nav-item dropdown">
       
       <a className="nav-item dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Gezegenler</a>
       <ul class="dropdown-menu">
         <li><a class="dropdown-item" ><Link className="link" to="/gezegenler" >Gezegenler</Link></a></li>
         <li><a class="dropdown-item" ><Link className="link" to="/gezegenlerEvlerde" >Gezegenler Evlerde</Link></a></li>
         <li><a class="dropdown-item" ><Link className="link" to="/gezegenlerBurclarda" >Gezegenler Burçlarda</Link></a></li>
   </ul>
       </li>

          
          <li className="headerListItem nav-item" >
          <Link className="link" to="/burclar" >Burçlar</Link>
          </li>
          
          <li className="headerListItem nav-item"  >
          <Link className="link" to="/evler" >Evler</Link>
          </li>

          <li className="headerListItem nav-item"  >
          <Link className="link" to="/ayFazlari" >Ay Fazları</Link>
          </li>
          <li className="headerListItem nav-item"  >
          <Link className="link" to="/elementler" >Elementler</Link>
          </li>

          <li className="headerListItem nav-item dropdown">
       
          <a className="nav-item dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Açılar</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" ><Link className="link" to="/acilar" >Açılar</Link></a></li>
            <li><a class="dropdown-item" ><Link className="link" to="/aciKaliplari" >Açı Kalıpları</Link></a></li>
            
      </ul>
          </li>

          <li className="headerListItem nav-item dropdown">
       
       <a className="nav-item dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Transitler</a>
       <ul class="dropdown-menu">
         <li><a class="dropdown-item" ><Link className="link" to="/transitlerEvlerde" >Transitler Evlerde</Link></a></li>
         <li><a class="dropdown-item" ><Link className="link" to="/transitlerBurclarda" >Transitler Burçlarda</Link></a></li>
       
   </ul>
       </li>

          
         
      </ul>
    </div>
  </div>
  </>
  )
}
