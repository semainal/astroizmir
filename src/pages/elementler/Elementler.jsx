import React from 'react'
import Header from '../../components/header/Header'
import "./elementler.css"
import elementler from "../../img/elementler.jpg"
import elementNitelik from "../../img/elementNitelik.jpg"

export default function Elementler() {
  return (

    <>
    <p id='top'></p>
    <Header/>
    <div className='elementler'>
        <div className='elementlerTitles'>Elementler</div>
        <div class="card mb-3">
        <div className="card mb-3">
    
    <div className="row g-0">
    
      
      <div className="col-md-12">
      
        <div class="card-body">
          <h5 classname="elementlerCardTitle">Element Ne Demek?</h5>
          <p classname="elementlerText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
          <p classname="elementlerCardText"><small class="text-muted">Yönettiği Burç: YENGEÇ</small></p>
        </div>
      </div>
    </div>
  </div>
  <div class="card mb-3 mt-5">
        <h5 className="elementlerTitles card-title">Elementler</h5>
  <img className="elementlerImg card-img-top" src={elementler} alt=""/>
  <div class="card-body">
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error beatae, sequi assumenda fuga voluptatum pariatur tempora totam quidem distinctio ullam optio explicabo quaerat sit eligendi! Quos cupiditate doloribus beatae officia optio similique numquam, blanditiis eveniet molestias odio dicta ducimus in nesciunt voluptatum commodi. Nihil amet est natus nesciunt cumque provident distinctio! Voluptas et doloremque natus unde atque quas. Magni illum praesentium placeat dolorem sit ut error ea ipsum, aut laboriosam minus libero excepturi reprehenderit dolores sequi ipsa numquam consectetur velit veritatis sapiente pariatur. Accusamus, aliquam voluptas laborum a qui praesentium tempore atque illum, quia nemo voluptatibus officia consectetur distinctio aut.</p>
    
  


  </div>
</div>

<div class="card mb-3">
    
    <div class="row g-0">
    
      
      <div class="col-md-12">
      
        <div class="card-body">
          <h5 classname="elementlerCardTitle">Nitelik Ne Demek?</h5>
          <p classname="elementlerText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
          <p classname="elementlerCardText"><small class="text-muted">Yönettiği Burç: YENGEÇ</small></p>
        </div>
      </div>
    </div>
  </div>

<div class="card mb-3 mt-5">
        <h5 className="elementlerTitles card-title">Nitelikler</h5>
  <img className="elementlerImg card-img-top" src={elementNitelik} alt=""/>
  <div class="card-body">
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error beatae, sequi assumenda fuga voluptatum pariatur tempora totam quidem distinctio ullam optio explicabo quaerat sit eligendi! Quos cupiditate doloribus beatae officia optio similique numquam, blanditiis eveniet molestias odio dicta ducimus in nesciunt voluptatum commodi. Nihil amet est natus nesciunt cumque provident distinctio! Voluptas et doloremque natus unde atque quas. Magni illum praesentium placeat dolorem sit ut error ea ipsum, aut laboriosam minus libero excepturi reprehenderit dolores sequi ipsa numquam consectetur velit veritatis sapiente pariatur. Accusamus, aliquam voluptas laborum a qui praesentium tempore atque illum, quia nemo voluptatibus officia consectetur distinctio aut.</p>
    
  


  </div>
</div>


<a href="#top" id='sayfabasi'>Sayfa Başına Git</a>



    </div>
    </div>
    </>
  )
}
