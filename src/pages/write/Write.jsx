import "./write.css"
import React from 'react'

export default function Write() {
  return (
    <div className="write">
   <img className="writeImg"
    src="https://cdn.pixabay.com/photo/2014/08/09/21/30/solar-system-414388_960_720.jpg"
    alt="" />
    
    <form className="writeForm" >
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input type="text" placeholder="Başlık" className="writeInput"  />
        </div>

        <div className="writeFormGroup">
            <textarea placeholder="Makaleyi Yazabilirsiniz.." type="text" className="writeInput writeText" ></textarea>
        </div>

        <button className="writeSubmit" type="submit">
            Yayınla
        </button>
        
    </form>


    </div>
  )
}



