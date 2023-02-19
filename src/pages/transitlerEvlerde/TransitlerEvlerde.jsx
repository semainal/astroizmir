import React, { useState }  from 'react'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import Header from '../../components/header/Header'

import "./transitlerEvlerde.css"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function TransitlerEvlerde(props) {
  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <>
     <p id='top'></p>
    <Header/>
    
    
    <div className='gezegenlerEvlerde'>

    
    <div className='gezegenlerEvlerdeTitles'>Ev Transitleri</div>
    
    
    <div className="card mb-3">
    

    <div class="card">
   
        <div class="card-body">
          <h5 classname="gezegenlerCardTitle">Ev Transitleri Ne Demek?</h5>
          <p classname="gezegenelerText" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
          <p id='ay'></p>
          <div className='burclarLink'>
          <a href="#ay">T.Ay</a>
            <a href="#gunes">T.Güneş</a>
            <a href="#merkur">T.Merkür</a>
            <a href="#venus">T.Venüs</a>
            <a href="#mars">T.Mars</a>
            <a href="#jupiter">T.Jüpiter</a>
            <a href="#saturn">T.Satürn</a>
            <a href="#uranus">T.Uranüs</a>
            <a href="#neptun">T.Neptün</a>
            <a href="#pluton">T.Pluton</a>
            
            </div>
          
        </div>
      </div>
      
      <h5>Transit AY Evlerde
      </h5>
     
    <div class="card mb-3">
      <Accordion className='accordion' flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="ay1">Ay 1.Evde</AccordionHeader>
          <AccordionBody accordionId="ay1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="ay2">Ay 2.Evde</AccordionHeader>
          <AccordionBody accordionId="ay2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="ay3">Ay 3.Evde</AccordionHeader>
          <AccordionBody accordionId="ay3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="ay4">Ay 4.Evde</AccordionHeader>
          <AccordionBody accordionId="ay4">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="ay5">Ay 5.Evde</AccordionHeader>
          <AccordionBody accordionId="ay5">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="ay6">Ay 6.Evde</AccordionHeader>
          <AccordionBody accordionId="ay6">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="ay7">Ay 7.Evde</AccordionHeader>
          <AccordionBody accordionId="ay7">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="ay8">Ay 8.Evde</AccordionHeader>
          <AccordionBody accordionId="ay8">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="ay9">Ay 9.Evde</AccordionHeader>
          <AccordionBody accordionId="ay9">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="ay10">Ay 10.Evde</AccordionHeader>
          <AccordionBody accordionId="ay10">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="ay11">Ay 11.Evde</AccordionHeader>
          <AccordionBody accordionId="ay11">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
        <p id='gunes'></p>
          <AccordionHeader targetId="ay12">Ay 12.Evde</AccordionHeader>
          <AccordionBody accordionId="ay12">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
   
    
    <div class="card mb-3">
        <div className='burclarLink'>
        <a href="#ay">T.Ay</a>
            <a href="#gunes">T.Güneş</a>
            <a href="#merkur">T.Merkür</a>
            <a href="#venus">T.Venüs</a>
            <a href="#mars">T.Mars</a>
            <a href="#jupiter">T.Jüpiter</a>
            <a href="#saturn">T.Satürn</a>
            <a href="#uranus">T.Uranüs</a>
            <a href="#neptun">T.Neptün</a>
            <a href="#pluton">T.Pluton</a>
            </div>
            </div>
      <h5>Transit GÜNEŞ Evlerde
      </h5>
     
      <div className="card mb-3">
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="gunes1" >Güneş 1.Evde</AccordionHeader>
          <AccordionBody accordionId="gunes1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="gunes2">Güneş 2.Evde</AccordionHeader>
          <AccordionBody accordionId="gunes2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="gunes3">Güneş 3.Evde</AccordionHeader>
          <AccordionBody accordionId="gunes3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="gunes4">Güneş 4.Evde</AccordionHeader>
          <AccordionBody accordionId="gunes4">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="gunes5">Güneş 5.Evde</AccordionHeader>
          <AccordionBody accordionId="gunes5">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="gunes6">Güneş 6.Evde</AccordionHeader>
          <AccordionBody accordionId="gunes6">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="gunes7">Güneş 7.Evde</AccordionHeader>
          <AccordionBody accordionId="gunes7">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="gunes8">Güneş 8.Evde</AccordionHeader>
          <AccordionBody accordionId="gunes8">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="gunes9">Güneş 9.Evde</AccordionHeader>
          <AccordionBody accordionId="gunes9">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="gunes10">Güneş 10.Evde</AccordionHeader>
          <AccordionBody accordionId="gunes10">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="gunes11">Güneş 11.Evde</AccordionHeader>
          <AccordionBody accordionId="gunes11">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
        <p id='merkur'></p>
          <AccordionHeader targetId="gunes12">Güneş 12.Evde</AccordionHeader>
          <AccordionBody accordionId="gunes12">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
    
    <div class="card mb-3">
    <div className='burclarLink'>
    <a href="#ay">T.Ay</a>
            <a href="#gunes">T.Güneş</a>
            <a href="#merkur">T.Merkür</a>
            <a href="#venus">T.Venüs</a>
            <a href="#mars">T.Mars</a>
            <a href="#jupiter">T.Jüpiter</a>
            <a href="#saturn">T.Satürn</a>
            <a href="#uranus">T.Uranüs</a>
            <a href="#neptun">T.Neptün</a>
            <a href="#pluton">T.Pluton</a>
           
            </div>
            </div>
      <h5>Transit MERKÜR Evlerde
      </h5>
      
      <div className="card mb-3">
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="merkur1" >Merkür 1.Evde</AccordionHeader>
          <AccordionBody accordionId="merkur1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="merkur2">Merkür 2.Evde</AccordionHeader>
          <AccordionBody accordionId="merkur2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="merkur3">Merkür 3.Evde</AccordionHeader>
          <AccordionBody accordionId="merkur3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="merkur4">Merkür 4.Evde</AccordionHeader>
          <AccordionBody accordionId="merkur4">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="merkur5">Merkür 5.Evde</AccordionHeader>
          <AccordionBody accordionId="merkur5">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="merkur6">Merkür 6.Evde</AccordionHeader>
          <AccordionBody accordionId="merkur6">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="merkur7">Merkür 7.Evde</AccordionHeader>
          <AccordionBody accordionId="merkur7">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="merkur8">Merkür 8.Evde</AccordionHeader>
          <AccordionBody accordionId="merkur8">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="merkur9">Merkur 9.Evde</AccordionHeader>
          <AccordionBody accordionId="merkur9">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="merkur10">Merkür 10.Evde</AccordionHeader>
          <AccordionBody accordionId="merkur10">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="merkur11">Merkür 11.Evde</AccordionHeader>
          <AccordionBody accordionId="merkur11">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
        <p id='venus'></p>
          <AccordionHeader targetId="merkur12">Merkür 12.Evde</AccordionHeader>
          <AccordionBody accordionId="merkur12">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>

    <div class="card mb-3">
    <div className='burclarLink'>
    <a href="#ay">T.Ay</a>
            <a href="#gunes">T.Güneş</a>
            <a href="#merkur">T.Merkür</a>
            <a href="#venus">T.Venüs</a>
            <a href="#mars">T.Mars</a>
            <a href="#jupiter">T.Jüpiter</a>
            <a href="#saturn">T.Satürn</a>
            <a href="#uranus">T.Uranüs</a>
            <a href="#neptun">T.Neptün</a>
            <a href="#pluton">T.Pluton</a>
           
            </div>
            </div>
    <h5>Transit VENÜS Evlerde
      </h5>
    
      <div className="card mb-3">
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="venus1" >Venüs 1.Evde</AccordionHeader>
          <AccordionBody accordionId="venus1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="venus2">Venüs 2.Evde</AccordionHeader>
          <AccordionBody accordionId="venus2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="venus3">Venüs 3.Evde</AccordionHeader>
          <AccordionBody accordionId="venus3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="venus4">Venüs 4.Evde</AccordionHeader>
          <AccordionBody accordionId="venus4">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="venus5">Venüs 5.Evde</AccordionHeader>
          <AccordionBody accordionId="venus5">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="venus6">Venüs 6.Evde</AccordionHeader>
          <AccordionBody accordionId="venus6">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="venus7">Venüs 7.Evde</AccordionHeader>
          <AccordionBody accordionId="venus7">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="venus8">Venüs 8.Evde</AccordionHeader>
          <AccordionBody accordionId="venus8">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="venus9">Venüs 9.Evde</AccordionHeader>
          <AccordionBody accordionId="venus9">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="venus10">Venüs 10.Evde</AccordionHeader>
          <AccordionBody accordionId="venus10">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="venus11">Venüs 11.Evde</AccordionHeader>
          <AccordionBody accordionId="venus11">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
        <p id='mars'></p>
          <AccordionHeader targetId="venus12">Venüs 12.Evde</AccordionHeader>
          <AccordionBody accordionId="venus12">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>

    <div class="card mb-3">
    <div className='burclarLink'>
    <a href="#ay">T.Ay</a>
            <a href="#gunes">T.Güneş</a>
            <a href="#merkur">T.Merkür</a>
            <a href="#venus">T.Venüs</a>
            <a href="#mars">T.Mars</a>
            <a href="#jupiter">T.Jüpiter</a>
            <a href="#saturn">T.Satürn</a>
            <a href="#uranus">T.Uranüs</a>
            <a href="#neptun">T.Neptün</a>
            <a href="#pluton">T.Pluton</a>
           
            </div>
            </div>
    <h5>Transit MARS Evlerde
      </h5>
    
      <div className="card mb-3">
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="mars1" >Mars 1.Evde</AccordionHeader>
          <AccordionBody accordionId="mars1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="mars2">Mars 2.Evde</AccordionHeader>
          <AccordionBody accordionId="mars2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="mars3">Mars 3.Evde</AccordionHeader>
          <AccordionBody accordionId="mars3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="mars4">Mars 4.Evde</AccordionHeader>
          <AccordionBody accordionId="mars4">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="mars5">Mars 5.Evde</AccordionHeader>
          <AccordionBody accordionId="mars5">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="mars6">Mars 6.Evde</AccordionHeader>
          <AccordionBody accordionId="mars6">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="mars7">Mars 7.Evde</AccordionHeader>
          <AccordionBody accordionId="mars7">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="mars8">Mars 8.Evde</AccordionHeader>
          <AccordionBody accordionId="mars8">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="mars9">Mars 9.Evde</AccordionHeader>
          <AccordionBody accordionId="mars9">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="mars10">Mars 10.Evde</AccordionHeader>
          <AccordionBody accordionId="mars10">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="mars11">Mars 11.Evde</AccordionHeader>
          <AccordionBody accordionId="mars11">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
        <p id='jupiter'></p>
          <AccordionHeader targetId="mars12">Mars 12.Evde</AccordionHeader>
          <AccordionBody accordionId="mars12">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>

    <div class="card mb-3">
    <div className='burclarLink'>
    <a href="#ay">T.Ay</a>
            <a href="#gunes">T.Güneş</a>
            <a href="#merkur">T.Merkür</a>
            <a href="#venus">T.Venüs</a>
            <a href="#mars">T.Mars</a>
            <a href="#jupiter">T.Jüpiter</a>
            <a href="#saturn">T.Satürn</a>
            <a href="#uranus">T.Uranüs</a>
            <a href="#neptun">T.Neptün</a>
            <a href="#pluton">T.Pluton</a>
           
            </div>
            </div>
    <h5>Transit JÜPİTER Evlerde
      </h5>
    
      <div className="card mb-3">
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="jupiter1" >Jüpiter 1.Evde</AccordionHeader>
          <AccordionBody accordionId="jupiter1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="jupiter2">Jüpiter 2.Evde</AccordionHeader>
          <AccordionBody accordionId="jupiter2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="jupiter3">Jüpiter 3.Evde</AccordionHeader>
          <AccordionBody accordionId="jupiter3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="jupiter4">Jüpiter 4.Evde</AccordionHeader>
          <AccordionBody accordionId="jupiter4">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="jupiter5">Jüpiter 5.Evde</AccordionHeader>
          <AccordionBody accordionId="jupiter5">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="jupiter6">Jüpiter 6.Evde</AccordionHeader>
          <AccordionBody accordionId="jupiter6">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="jupiter7">Jüpiter 7.Evde</AccordionHeader>
          <AccordionBody accordionId="jupiter7">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="jupiter8">Jüpiter 8.Evde</AccordionHeader>
          <AccordionBody accordionId="jupiter8">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="jupiter9">Jüpiter 9.Evde</AccordionHeader>
          <AccordionBody accordionId="jupiter9">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="jupiter10">Jüpiter 10.Evde</AccordionHeader>
          <AccordionBody accordionId="jupiter10">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="jupiter11">Jüpiter 11.Evde</AccordionHeader>
          <AccordionBody accordionId="jupiter11">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
        <p id='saturn'></p>
          <AccordionHeader targetId="jupiter12">Jüpiter 12.Evde</AccordionHeader>
          <AccordionBody accordionId="jupiter12">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>

    <div class="card mb-3">
    <div className='burclarLink'>
    <a href="#ay">T.Ay</a>
            <a href="#gunes">T.Güneş</a>
            <a href="#merkur">T.Merkür</a>
            <a href="#venus">T.Venüs</a>
            <a href="#mars">T.Mars</a>
            <a href="#jupiter">T.Jüpiter</a>
            <a href="#saturn">T.Satürn</a>
            <a href="#uranus">T.Uranüs</a>
            <a href="#neptun">T.Neptün</a>
            <a href="#pluton">T.Pluton</a>
           
            </div>
            </div>
    <h5>Transit SATÜRN Evlerde
      </h5>
      
      <div className="card mb-3">
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="saturn1" >Satürn 1.Evde</AccordionHeader>
          <AccordionBody accordionId="saturn1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="saturn2">Satürn 2.Evde</AccordionHeader>
          <AccordionBody accordionId="saturn2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="saturn3">Satürn 3.Evde</AccordionHeader>
          <AccordionBody accordionId="saturn3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="saturn4">Satürn 4.Evde</AccordionHeader>
          <AccordionBody accordionId="saturn4">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="saturn5">Satürn 5.Evde</AccordionHeader>
          <AccordionBody accordionId="saturn5">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="saturn6">Satürn 6.Evde</AccordionHeader>
          <AccordionBody accordionId="saturn6">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="saturn7">Satürn 7.Evde</AccordionHeader>
          <AccordionBody accordionId="saturn7">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="saturn8">Satürn 8.Evde</AccordionHeader>
          <AccordionBody accordionId="saturn8">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="saturn9">Satürn 9.Evde</AccordionHeader>
          <AccordionBody accordionId="saturn9">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="saturn10">Satürn 10.Evde</AccordionHeader>
          <AccordionBody accordionId="saturn10">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="saturn11">Satürn 11.Evde</AccordionHeader>
          <AccordionBody accordionId="saturn11">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
        <p id='uranus'></p>
          <AccordionHeader targetId="saturn12">Satürn 12.Evde</AccordionHeader>
          <AccordionBody accordionId="saturn12">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>

    <div class="card mb-3">
    <div className='burclarLink'>
    <a href="#ay">T.Ay</a>
            <a href="#gunes">T.Güneş</a>
            <a href="#merkur">T.Merkür</a>
            <a href="#venus">T.Venüs</a>
            <a href="#mars">T.Mars</a>
            <a href="#jupiter">T.Jüpiter</a>
            <a href="#saturn">T.Satürn</a>
            <a href="#uranus">T.Uranüs</a>
            <a href="#neptun">T.Neptün</a>
            <a href="#pluton">T.Pluton</a>
           
            </div>
            </div>
    <h5>Transit URANÜS Evlerde
      </h5>
     
      <div className="card mb-3">
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="uranus1" >Uranüs 1.Evde</AccordionHeader>
          <AccordionBody accordionId="uranus1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="uranus2">Uranüs 2.Evde</AccordionHeader>
          <AccordionBody accordionId="uranus2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="uranus3">Uranüs 3.Evde</AccordionHeader>
          <AccordionBody accordionId="uranus3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="uranus4">Uranüs 4.Evde</AccordionHeader>
          <AccordionBody accordionId="uranus4">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="uranus5">Uranüs 5.Evde</AccordionHeader>
          <AccordionBody accordionId="uranus5">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="uranus6">Uranüs 6.Evde</AccordionHeader>
          <AccordionBody accordionId="uranus6">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="uranus7">Uranüs 7.Evde</AccordionHeader>
          <AccordionBody accordionId="uranus7">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="uranus8">Uranüs 8.Evde</AccordionHeader>
          <AccordionBody accordionId="uranus8">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="uranus9">Uranüs 9.Evde</AccordionHeader>
          <AccordionBody accordionId="uranus9">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="uranus10">Uranüs 10.Evde</AccordionHeader>
          <AccordionBody accordionId="uranus10">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="uranus11">Uranüs 11.Evde</AccordionHeader>
          <AccordionBody accordionId="uranus11">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
        <p id='neptun'></p>
          <AccordionHeader targetId="uranus12">Uranüs 12.Evde</AccordionHeader>
          <AccordionBody accordionId="uranus12">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>

    <div class="card mb-3">
    <div className='burclarLink'>
    <a href="#ay">T.Ay</a>
            <a href="#gunes">T.Güneş</a>
            <a href="#merkur">T.Merkür</a>
            <a href="#venus">T.Venüs</a>
            <a href="#mars">T.Mars</a>
            <a href="#jupiter">T.Jüpiter</a>
            <a href="#saturn">T.Satürn</a>
            <a href="#uranus">T.Uranüs</a>
            <a href="#neptun">T.Neptün</a>
            <a href="#pluton">T.Pluton</a>
           
            </div>
            </div>
    <h5>Transit NEPTÜN Evlerde
      </h5>
      
      <div className="card mb-3">
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="neptun1" >Neptün 1.Evde</AccordionHeader>
          <AccordionBody accordionId="neptun1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="neptun2">Neptün 2.Evde</AccordionHeader>
          <AccordionBody accordionId="neptun2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="neptun3">Neptün 3.Evde</AccordionHeader>
          <AccordionBody accordionId="neptun3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="neptun4">Neptün 4.Evde</AccordionHeader>
          <AccordionBody accordionId="neptun4">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="neptun5">Neptün 5.Evde</AccordionHeader>
          <AccordionBody accordionId="neptun5">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="neptun6">Neptün 6.Evde</AccordionHeader>
          <AccordionBody accordionId="neptun6">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="neptun7">Neptün 7.Evde</AccordionHeader>
          <AccordionBody accordionId="neptun7">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="neptun8">Neptün 8.Evde</AccordionHeader>
          <AccordionBody accordionId="neptun8">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="neptun9">Neptün 9.Evde</AccordionHeader>
          <AccordionBody accordionId="neptun9">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="neptun10">Neptün 10.Evde</AccordionHeader>
          <AccordionBody accordionId="neptun10">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="neptun11">Neptün 11.Evde</AccordionHeader>
          <AccordionBody accordionId="neptun11">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
        <p id='pluton'></p>
          <AccordionHeader targetId="neptun12">Neptün 12.Evde</AccordionHeader>
          <AccordionBody accordionId="neptun12">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>

    <div class="card mb-3">
    <div className='burclarLink'>
    <a href="#ay">T.Ay</a>
            <a href="#gunes">T.Güneş</a>
            <a href="#merkur">T.Merkür</a>
            <a href="#venus">T.Venüs</a>
            <a href="#mars">T.Mars</a>
            <a href="#jupiter">T.Jüpiter</a>
            <a href="#saturn">T.Satürn</a>
            <a href="#uranus">T.Uranüs</a>
            <a href="#neptun">T.Neptün</a>
            <a href="#pluton">T.Pluton</a>
           
            </div>
            </div>
    <h5>Transit PLUTON Evlerde
      </h5>
      
      <div className="card mb-3">
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="pluton1" >Pluton 1.Evde</AccordionHeader>
          <AccordionBody accordionId="pluton1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="pluton2">Pluton 2.Evde</AccordionHeader>
          <AccordionBody accordionId="pluton2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="pluton3">Pluton 3.Evde</AccordionHeader>
          <AccordionBody accordionId="pluton3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="pluton4">Pluton 4.Evde</AccordionHeader>
          <AccordionBody accordionId="pluton4">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="pluton5">Pluton 5.Evde</AccordionHeader>
          <AccordionBody accordionId="pluton5">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="pluton6">Pluton 6.Evde</AccordionHeader>
          <AccordionBody accordionId="pluton6">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="pluton7">Pluton 7.Evde</AccordionHeader>
          <AccordionBody accordionId="pluton7">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="pluton8">Pluton 8.Evde</AccordionHeader>
          <AccordionBody accordionId="pluton8">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="pluton9">Pluton 9.Evde</AccordionHeader>
          <AccordionBody accordionId="pluton9">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="pluton10">Pluton 10.Evde</AccordionHeader>
          <AccordionBody accordionId="pluton10">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="pluton11">Pluton 11.Evde</AccordionHeader>
          <AccordionBody accordionId="pluton11">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="pluton12">Pluton 12.Evde</AccordionHeader>
          <AccordionBody accordionId="pluton12">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
    <a href="#top" id='sayfabasi'>Sayfa Başına Git</a>
    </div>
    
    </div>
   
    </>
  );
}

export default TransitlerEvlerde;