import React from 'react'
import Header from '../../components/header/Header'
import "./settings.css"

export default function Settings() {
  return (
    <>
    <Header/>
    <div className="settings">
    <div className="settingsWrapper">

    <div class="card mb-3">
    
    <div class="row g-0">
    
      
      <div class="col-md-12">
      
        <div class="card-body">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">
              Bilgilerini Güncelle
          </span>
          <span className="settingsDeleteTitle">
              Hesabı Sil
          </span>
      </div>
      <form className="settingsForm" >
          <label>Profil</label>
          <div className="settingsPP">
              <img 
              src=""
              alt="" 
              />
              <label htmlFor="fileInput">
                  <i className="settingsPPIcon fa-regular fa-circle-user"></i>
              </label>
              <input type="file" id="fileInput" style={{display:"none"}} />
          </div>
          <label>Kullanıcı Adı</label>
          <input type="text"   />
          <label>E-mail</label>
          <input type="email"  />
          <label>Şifre</label>
          <input type="password" />
          <button className="settingsSubmit" type="submit">Güncelle</button>
          
      
      </form>
        </div>
      </div>
    </div>
  </div>
      
    </div>
  </div>
  </>
  )
}
