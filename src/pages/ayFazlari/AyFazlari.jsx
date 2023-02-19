import React from 'react'
import "./ayFazlari.css"
import Header from '../../components/header/Header'
import ayEvreleri from "../../img/ayEvreleri.jpg"
import yeniAy from "../../img/yeniAy.jpg"
import hilal from "../../img/hilal.jpg"
import ilkDordun from "../../img/ilkDordun.jpg"
import buyuyenAy from "../../img/buyuyenAy.jpg"
import dolunay from "../../img/dolunay.jpg"
import kuculenAy from "../../img/kuculenAy.jpg"
import sonDordun from "../../img/sonDordun.jpg"
import balzamik from "../../img/balzamik.jpg"
import ayFazlari from "../../img/ayFazlari.jpg"

export default function AyFazlari() {
  return (

    <>
       <p id='top'></p>
    <Header/>
    <div className='ayFazlari'>
        <div className='ayFazlariTitles'>Ay Fazları</div>
        
        <div class="card mb-3">
        <div class="card mb-3">
        <h5 className="card-title">Ay Fazları (Evreleri) Ne Demek?</h5>
  <img className="ayFazlariImg card-img-top" src={ayEvreleri} alt=""/>
  <div class="card-body">
    <p class="card-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Error beatae, sequi assumenda fuga voluptatum pariatur tempora totam quidem distinctio ullam optio explicabo quaerat sit eligendi! Quos cupiditate doloribus beatae officia optio similique numquam, blanditiis eveniet molestias odio dicta ducimus in nesciunt voluptatum commodi. Nihil amet est natus nesciunt cumque provident distinctio! Voluptas et doloremque natus unde atque quas. Magni illum praesentium placeat dolorem sit ut error ea ipsum, aut laboriosam minus libero excepturi reprehenderit dolores sequi ipsa numquam consectetur velit veritatis sapiente pariatur. Accusamus, aliquam voluptas laborum a qui praesentium tempore atque illum, quia nemo voluptatibus officia consectetur distinctio aut.</p>
    <div className='burclarLink'>
            <a href="#yeniay">Yeni Ay</a>
            <a href="#hilal">Hilal</a>
            <a href="#ilkdordun">İlk Dördün</a>
            <a href="#buyuyenay">Büyüyen Ay</a>
            <a href="#dolunay">Dolunay</a>
            <a href="#kuculenay">Küçülen Ay</a>
            <a href="#sondordun">Son Dördün</a>
            <a href="#balzamik">Balzamik</a>
          
            </div>
  


  </div>
</div>

<div class="card mb-3">
        <h5 className="ayFazlariTitles card-title">Ay Fazları Dereceleri</h5>
  <img className="ayFazlariImg card-img-top" src={ayFazlari} alt=""/>
  <div class="card-body">
    <p class="card-text" id='yeniay' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Error beatae, sequi assumenda fuga voluptatum pariatur tempora totam quidem distinctio ullam optio explicabo quaerat sit eligendi! Quos cupiditate doloribus beatae officia optio similique numquam, blanditiis eveniet molestias odio dicta ducimus in nesciunt voluptatum commodi. Nihil amet est natus nesciunt cumque provident distinctio! Voluptas et doloremque natus unde atque quas. Magni illum praesentium placeat dolorem sit ut error ea ipsum, aut laboriosam minus libero excepturi reprehenderit dolores sequi ipsa numquam consectetur velit veritatis sapiente pariatur. Accusamus, aliquam voluptas laborum a qui praesentium tempore atque illum, quia nemo voluptatibus officia consectetur distinctio aut.</p>
    
  


  </div>
</div>

<div class="card mb-3">
    
  <div class="row g-0">
  <div class="col-md-4">
  <img className='ayFazlariSubImg' src={yeniAy} alt="" />
  <div className='ayFazlariSubTitles'>Yeni Ay</div>
  
    </div>
    
    <div class="col-md-8">
    
      <div class="card-body">
        <h5 classname="ayFazlariCardTitle">YENİ AY</h5>
        <p classname="ayFazlariText" id='hilal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
       
      </div>
    </div>
  </div>
</div>

<div className='card mb-3'>
<div className='burclarLink'>
            <a href="#yeniay">Yeni Ay</a>
            <a href="#hilal">Hilal</a>
            <a href="#ilkdordun">İlk Dördün</a>
            <a href="#buyuyenay">Büyüyen Ay</a>
            <a href="#dolunay">Dolunay</a>
            <a href="#kuculenay">Küçülen Ay</a>
            <a href="#sondordun">Son Dördün</a>
            <a href="#balzamik">Balzamik</a>
          
            </div>
</div>

<div class="card mb-3">
    
  <div class="row g-0">
  <div class="col-md-4">
  <img className='ayFazlariSubImg' src={hilal} alt="" />
  <div className='ayFazlariSubTitles'>Hilal</div>
  
    </div>
    
    <div class="col-md-8">
    
      <div class="card-body">
        <h5 classname="ayFazlariCardTitle">HİLAL</h5>
        <p classname="ayFazlariText" id='ilkdordun'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
      
      </div>
    </div>
  </div>
</div>

<div className='card mb-3'>
<div className='burclarLink'>
            <a href="#yeniay">Yeni Ay</a>
            <a href="#hilal">Hilal</a>
            <a href="#ilkdordun">İlk Dördün</a>
            <a href="#buyuyenay">Büyüyen Ay</a>
            <a href="#dolunay">Dolunay</a>
            <a href="#kuculenay">Küçülen Ay</a>
            <a href="#sondordun">Son Dördün</a>
            <a href="#balzamik">Balzamik</a>
          
            </div>
</div>
<div class="card mb-3">
    
  <div class="row g-0">
  <div class="col-md-4">
  <img className='ayFazlariSubImg' src={ilkDordun} alt="" />
  <div className='ayFazlariSubTitles'>İlk Dördün</div>
  
    </div>
    
    <div class="col-md-8">
    
      <div class="card-body">
        <h5 classname="ayFazlariCardTitle">İLK DÖRDÜN</h5>
        <p classname="ayFazlariText" id='buyuyenay'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
       
      </div>
    </div>
  </div>
</div>
<div className='card mb-3'>
<div className='burclarLink'>
            <a href="#yeniay">Yeni Ay</a>
            <a href="#hilal">Hilal</a>
            <a href="#ilkdordun">İlk Dördün</a>
            <a href="#buyuyenay">Büyüyen Ay</a>
            <a href="#dolunay">Dolunay</a>
            <a href="#kuculenay">Küçülen Ay</a>
            <a href="#sondordun">Son Dördün</a>
            <a href="#balzamik">Balzamik</a>
          
            </div>
</div>

<div class="card mb-3">
    
  <div class="row g-0">
  <div class="col-md-4">
  <img className='ayFazlariSubImg' src={buyuyenAy} alt="" />
  <div className='ayFazlariSubTitles'>Büyüyen ay</div>
  
    </div>
    
    <div class="col-md-8">
    
      <div class="card-body">
        <h5 classname="ayFazlariCardTitle">BÜYÜYEN AY</h5>
        <p classname="ayFazlariText" id='dolunay'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>

      </div>
    </div>
  </div>
</div>
<div className='card mb-3'>
<div className='burclarLink'>
            <a href="#yeniay">Yeni Ay</a>
            <a href="#hilal">Hilal</a>
            <a href="#ilkdordun">İlk Dördün</a>
            <a href="#buyuyenay">Büyüyen Ay</a>
            <a href="#dolunay">Dolunay</a>
            <a href="#kuculenay">Küçülen Ay</a>
            <a href="#sondordun">Son Dördün</a>
            <a href="#balzamik">Balzamik</a>
          
            </div>
</div>

<div class="card mb-3">
    
  <div class="row g-0">
  <div class="col-md-4">
  <img className='ayFazlariSubImg' src={dolunay} alt="" />
  <div className='ayFazlariSubTitles'>Dolunay</div>
  
    </div>
    
    <div class="col-md-8">
    
      <div class="card-body">
        <h5 classname="ayFazlariCardTitle">DOLUNAY</h5>
        <p classname="ayFazlariText" id='kuculenay'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
 
      </div>
    </div>
  </div>
</div>
<div className='card mb-3'>
<div className='burclarLink'>
            <a href="#yeniay">Yeni Ay</a>
            <a href="#hilal">Hilal</a>
            <a href="#ilkdordun">İlk Dördün</a>
            <a href="#buyuyenay">Büyüyen Ay</a>
            <a href="#dolunay">Dolunay</a>
            <a href="#kuculenay">Küçülen Ay</a>
            <a href="#sondordun">Son Dördün</a>
            <a href="#balzamik">Balzamik</a>
          
            </div>
</div>

<div class="card mb-3">
    
  <div class="row g-0">
  <div class="col-md-4">
  <img className='ayFazlariSubImg' src={kuculenAy} alt="" />
  <div className='ayFazlariSubTitles'>Küçülen Ay</div>
  
    </div>
    
    <div class="col-md-8">
    
      <div class="card-body">
        <h5 classname="ayFazlariCardTitle">KÜÇÜLEN AY</h5>
        <p classname="ayFazlariText" id='sondordun'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
   
      </div>
    </div>
  </div>
</div>
<div className='card mb-3'>
<div className='burclarLink'>
            <a href="#yeniay">Yeni Ay</a>
            <a href="#hilal">Hilal</a>
            <a href="#ilkdordun">İlk Dördün</a>
            <a href="#buyuyenay">Büyüyen Ay</a>
            <a href="#dolunay">Dolunay</a>
            <a href="#kuculenay">Küçülen Ay</a>
            <a href="#sondordun">Son Dördün</a>
            <a href="#balzamik">Balzamik</a>
          
            </div>
</div>

<div class="card mb-3">
    
  <div class="row g-0">
  <div class="col-md-4">
  <img className='ayFazlariSubImg' src={sonDordun} alt="" />
  <div className='ayFazlariSubTitles'>Son Dördün</div>
  
    </div>
    
    <div class="col-md-8">
    
      <div class="card-body">
        <h5 classname="ayFazlariCardTitle">SON DÖRDÜN</h5>
        <p classname="ayFazlariText" id='balzamik'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
    
      </div>
    </div>
  </div>
</div>
<div className='card mb-3'>
<div className='burclarLink'>
            <a href="#yeniay">Yeni Ay</a>
            <a href="#hilal">Hilal</a>
            <a href="#ilkdordun">İlk Dördün</a>
            <a href="#buyuyenay">Büyüyen Ay</a>
            <a href="#dolunay">Dolunay</a>
            <a href="#kuculenay">Küçülen Ay</a>
            <a href="#sondordun">Son Dördün</a>
            <a href="#balzamik">Balzamik</a>
          
            </div>
</div>

<div class="card mb-3">
    
  <div class="row g-0">
  <div class="col-md-4">
  <img className='ayFazlariSubImg' src={balzamik} alt="" />
  <div className='ayFazlariSubTitles'>Balzamik</div>
  
    </div>
    
    <div class="col-md-8">
    
      <div class="card-body">
        <h5 classname="ayFazlariCardTitle">BALZAMİK</h5>
        <p classname="ayFazlariText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
        <p classname="ayFazlariCardText"><small class="text-muted">Yönetici Gezegeni: MARS</small></p>
      </div>
    </div>
  </div>
</div>

<a href="#top" id='sayfabasi'>Sayfa Başına Git</a>
    </div>
    </div>

    </>
  )
}
