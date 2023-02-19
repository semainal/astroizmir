import React from 'react'
import Header from "../../components/header/Header"
import Posts from '../../components/posts/Posts'

import "./home.css"

export default function Home() {
  return (
  <>
   <p id='top'></p>
  <Header/>
 
  <div className='home'>

  <div class="card mb-3">
  <div className="card mb-2">
  
    
    <div className="row g-0">
    <div class="col-md-3">
    <img className='homeImg' src="https://cdn.pixabay.com/photo/2021/11/21/14/21/aquarius-6814306_960_720.png" alt="" />
    
      </div>
      
      <div class="col-md-9">
      
        <div class="card-body">
          <h4 className="homeCardTitle">Astroloji Nedir?</h4>
          <p className="homeInfoDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
        </div>
      </div>
    </div>
  </div>

  <div className='homePosts'>
  <div className='homeTitles'>Makaleler</div>
  <Posts/>


  </div>
  

 



  
  <a href="#top" id='sayfabasi'>Sayfa Başına Git</a>
  </div>
 
  </div>


  </>
    
  )
}
