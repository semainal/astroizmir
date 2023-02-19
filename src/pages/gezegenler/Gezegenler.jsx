import React from 'react'
import Header from '../../components/header/Header'
import "./gezegenler.css"
import gunes from "../../img/gunes.png"
import ay from "../../img/ay.png"
import merkur from "../../img/merkur.png"
import venus from "../../img/venus.png"
import mars from "../../img/mars.png"
import jupiter from "../../img/jupiter.png"
import saturn from "../../img/saturn.png"
import uranus from "../../img/uranus.png"
import neptun from "../../img/neptun.png"
import pluton from "../../img/pluton.png"

export default function Gezegenler() {
  return (

    <>
     <p id='top'></p>
    <Header/>
    <div className='gezegenler'>
    <div className='gezegenlerTitles'>Gezegenler</div>

    <div class="card mb-3">
    <div class="card mb-3">
    
    <div class="row g-0">
    
      
      <div class="col-md-12">
      
        <div class="card-body">
          <h5 classname="gezegenlerCardTitle">Gezegenlerin Anlamı</h5>
          <p classname="gezegenelerText" id='gunes'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
         
          <div className='burclarLink'>
          <a href="#ay">Ay</a>
            <a href="#gunes">Güneş</a>
            <a href="#merkur">Merkür</a>
            <a href="#venus">Venüs</a>
            <a href="#mars">Mars</a>
            <a href="#jupiter">Jüpiter</a>
            <a href="#saturn">Satürn</a>
            <a href="#uranus">Uranüs</a>
            <a href="#neptün">Neptün</a>
            <a href="#pluton">Pluton</a>
            </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card mb-3">
    
  <div class="row g-0">
  <div class="col-md-2">
  <img className='gezegenlerImg' src={ay} alt="" />
  <div className='gezegenSubTitles'>AY</div>
  
    </div>
    
    <div class="col-md-10">
    
      <div class="card-body">
        <h5 classname="gezegenlerCardTitle">AY</h5>
        <p classname="gezegenelerText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
        <p classname="gezegenlerCardText" id="merkur"><small class="text-muted">Yönettiği Burç: YENGEÇ</small></p>
      </div>
    </div>
  </div>
</div>

   
<div class="card mb-3">
        <div className='burclarLink'>
          <a href="#ay">Ay</a>
            <a href="#gunes">Güneş</a>
            <a href="#merkur">Merkür</a>
            <a href="#venus">Venüs</a>
            <a href="#mars">Mars</a>
            <a href="#jupiter">Jüpiter</a>
            <a href="#saturn">Satürn</a>
            <a href="#uranus">Uranüs</a>
            <a href="#neptün">Neptün</a>
            <a href="#pluton">Pluton</a>
            </div>
            </div>

    <div class="card mb-3">

    <div class="row g-0">
    <div class="col-md-2">
    <img className='gezegenlerImg' src={gunes} alt="" />
    <div className='gezegenSubTitles'>GÜNEŞ</div>
    
      </div>
      
      <div class="col-md-10">
      
        <div class="card-body">
          <h5 classname="gezegenlerCardTitle">GÜNEŞ</h5>
          <p classname="gezegenlerText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
          <p classname="gezegenlerCardText" id="ay"><small class="text-muted">Yönettiği Burç: ASLAN</small></p>
        </div>
      </div>
    </div>
  </div>
  <div class="card mb-3">
        <div className='burclarLink'>
          <a href="#ay">Ay</a>
            <a href="#gunes">Güneş</a>
            <a href="#merkur">Merkür</a>
            <a href="#venus">Venüs</a>
            <a href="#mars">Mars</a>
            <a href="#jupiter">Jüpiter</a>
            <a href="#saturn">Satürn</a>
            <a href="#uranus">Uranüs</a>
            <a href="#neptün">Neptün</a>
            <a href="#pluton">Pluton</a>
            </div>
            </div>
<div class="card mb-3">
    
  <div class="row g-0">
  <div class="col-md-2">
  <img className='gezegenlerImg' src={merkur} alt="" />
  <div className='gezegenSubTitles'>MERKÜR</div>
  
    </div>
    
    <div class="col-md-10">
    
      <div class="card-body">
        <h5 classname="gezegenlerCardTitle">MERKÜR</h5>
        <p classname="gezegenelerText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
        <p classname="gezegenlerCardText" id="venus"><small class="text-muted">Yönettiği Burçlar: İKİZLER & BAŞAK</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3">
        <div className='burclarLink'>
          <a href="#ay">Ay</a>
            <a href="#gunes">Güneş</a>
            <a href="#merkur">Merkür</a>
            <a href="#venus">Venüs</a>
            <a href="#mars">Mars</a>
            <a href="#jupiter">Jüpiter</a>
            <a href="#saturn">Satürn</a>
            <a href="#uranus">Uranüs</a>
            <a href="#neptün">Neptün</a>
            <a href="#pluton">Pluton</a>
            </div>
            </div>
<div class="card mb-3">
    
  <div class="row g-0">
  <div class="col-md-2">
  <img className='gezegenlerImg' src={venus} alt="" />
  <div className='gezegenSubTitles' >VENÜS</div>
  
    </div>
    
    <div class="col-md-10">
    
      <div class="card-body">
        <h5 classname="gezegenlerCardTitle">VENÜS</h5>
        <p classname="gezegenelerText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
        <p classname="gezegenlerCardText" id="mars"><small class="text-muted">Yönettiği Burçlar: BOĞA & TERAZİ</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3">
        <div className='burclarLink'>
          <a href="#ay">Ay</a>
            <a href="#gunes">Güneş</a>
            <a href="#merkur">Merkür</a>
            <a href="#venus">Venüs</a>
            <a href="#mars">Mars</a>
            <a href="#jupiter">Jüpiter</a>
            <a href="#saturn">Satürn</a>
            <a href="#uranus">Uranüs</a>
            <a href="#neptün">Neptün</a>
            <a href="#pluton">Pluton</a>
            </div>
            </div>
<div class="card mb-3">
    
  <div class="row g-0">
  <div class="col-md-2">
  <img className='gezegenlerImg' src={mars} alt="" />
  <div className='gezegenSubTitles'>MARS</div>
  
    </div>
    
    <div class="col-md-10">
    
      <div class="card-body">
        <h5 classname="gezegenlerCardTitle">MARS</h5>
        <p classname="gezegenelerText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
        <p classname="gezegenlerCardText" id="jupiter"><small class="text-muted">Yönettiği Burçlar: KOÇ & AKREP</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3">
        <div className='burclarLink'>
          <a href="#ay">Ay</a>
            <a href="#gunes">Güneş</a>
            <a href="#merkur">Merkür</a>
            <a href="#venus">Venüs</a>
            <a href="#mars">Mars</a>
            <a href="#jupiter">Jüpiter</a>
            <a href="#saturn">Satürn</a>
            <a href="#uranus">Uranüs</a>
            <a href="#neptün">Neptün</a>
            <a href="#pluton">Pluton</a>
            </div>
            </div>

<div class="card mb-3">
    
  <div class="row g-0">
  <div class="col-md-2">
  <img className='gezegenlerImg' src={jupiter} alt="" />
  <div className='gezegenSubTitles'>JÜPİTER</div>
  
    </div>
    
    <div class="col-md-10">
    
      <div class="card-body">
        <h5 classname="gezegenlerCardTitle">JÜPİTER</h5>
        <p classname="gezegenelerText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
        <p classname="gezegenlerCardText" id="saturn"><small class="text-muted">Yönettiği Burçlar: YAY & BALIK</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3">
        <div className='burclarLink'>
          <a href="#ay">Ay</a>
            <a href="#gunes">Güneş</a>
            <a href="#merkur">Merkür</a>
            <a href="#venus">Venüs</a>
            <a href="#mars">Mars</a>
            <a href="#jupiter">Jüpiter</a>
            <a href="#saturn">Satürn</a>
            <a href="#uranus">Uranüs</a>
            <a href="#neptün">Neptün</a>
            <a href="#pluton">Pluton</a>
            </div>
            </div>

<div class="card mb-3">
    
  <div class="row g-0">
  <div class="col-md-2">
  <img className='gezegenlerImg' src={saturn} alt="" />
  <div className='gezegenSubTitles'>SATÜRN</div>
  
    </div>
    
    <div class="col-md-10">
    
      <div class="card-body">
        <h5 classname="gezegenlerCardTitle">SATÜRN</h5>
        <p classname="gezegenelerText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
        <p classname="gezegenlerCardText" id="uranus"><small class="text-muted">Yönettiği Burçlar: OĞLAK & KOVA</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3">
        <div className='burclarLink'>
          <a href="#ay">Ay</a>
            <a href="#gunes">Güneş</a>
            <a href="#merkur">Merkür</a>
            <a href="#venus">Venüs</a>
            <a href="#mars">Mars</a>
            <a href="#jupiter">Jüpiter</a>
            <a href="#saturn">Satürn</a>
            <a href="#uranus">Uranüs</a>
            <a href="#neptün">Neptün</a>
            <a href="#pluton">Pluton</a>
            </div>
            </div>

<div class="card mb-3">
    
  <div class="row g-0">
  <div class="col-md-2">
  <img className='gezegenlerImg' src={uranus} alt="" />
  <div className='gezegenSubTitles'>URANÜS</div>
  
    </div>
    
    <div class="col-md-10">
    
      <div class="card-body">
        <h5 classname="gezegenlerCardTitle">URANÜS</h5>
        <p classname="gezegenelerText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
        <p classname="gezegenlerCardText" id="neptun"><small class="text-muted">Kollektif Gezegen</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3">
        <div className='burclarLink'>
          <a href="#ay">Ay</a>
            <a href="#gunes">Güneş</a>
            <a href="#merkur">Merkür</a>
            <a href="#venus">Venüs</a>
            <a href="#mars">Mars</a>
            <a href="#jupiter">Jüpiter</a>
            <a href="#saturn">Satürn</a>
            <a href="#uranus">Uranüs</a>
            <a href="#neptün">Neptün</a>
            <a href="#pluton">Pluton</a>
            </div>
            </div>

<div class="card mb-3">
    
  <div class="row g-0">
  <div class="col-md-2">
  <img className='gezegenlerImg' src={neptun} alt="" />
  <div className='gezegenSubTitles'>NEPTÜN</div>
  
    </div>
    
    <div class="col-md-10">
    
      <div class="card-body">
        <h5 classname="gezegenlerCardTitle">NEPTÜN</h5>
        <p classname="gezegenelerText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
        <p classname="gezegenlerCardText" id="pluton"><small class="text-muted">Kollektif Gezegen</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3">
        <div className='burclarLink'>
          <a href="#ay">Ay</a>
            <a href="#gunes">Güneş</a>
            <a href="#merkur">Merkür</a>
            <a href="#venus">Venüs</a>
            <a href="#mars">Mars</a>
            <a href="#jupiter">Jüpiter</a>
            <a href="#saturn">Satürn</a>
            <a href="#uranus">Uranüs</a>
            <a href="#neptün">Neptün</a>
            <a href="#pluton">Pluton</a>
            </div>
            </div>
<div class="card mb-3">
    
  <div class="row g-0">
  <div class="col-md-2">
  <img className='gezegenlerImg' src={pluton} alt="" />
  <div className='gezegenSubTitles'>PLUTON</div>
  
    </div>
    
    <div class="col-md-10">
    
      <div class="card-body">
        <h5 classname="gezegenlerCardTitle">PLUTON</h5>
        <p classname="gezegenelerText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
        <p classname="gezegenlerCardText"><small class="text-muted">Kollektif Gezegen</small></p>
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
