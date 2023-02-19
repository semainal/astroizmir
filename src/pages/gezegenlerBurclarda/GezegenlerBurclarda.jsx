import React, { useState }  from 'react'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import Header from '../../components/header/Header'

import "./gezegenlerBurclarda.css"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function GezegenlerBurclarda(props) {
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

    
    <div className='gezegenlerEvlerdeTitles'>Gezegenler Burçlarda</div>
    
    
    <div className="card mb-3">
    

    <div class="card">
   
        <div class="card-body">
          <h5 classname="gezegenlerCardTitle">Gezegenler Burçlarda Ne Demek?</h5>
          <p classname="gezegenelerText" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum facilis sequi placeat dolores quis laboriosam odit quas voluptas, minus impedit autem, aliquam nemo reiciendis alias numquam error sapiente molestiae nisi temporibus dolorem iste! Atque odio ad culpa odit in quas, dolore temporibus impedit aliquam, esse facilis quis tempora? Rerum ex explicabo vero quaerat commodi! Dicta deleniti esse reprehenderit iste adipisci sunt beatae provident in culpa, expedita delectus, illo autem facere cumque aliquam sapiente. Aliquid quia, autem facilis rem facere praesentium nihil fuga minima perspiciatis tempora iusto, sequi blanditiis, sapiente optio impedit nobis nulla architecto incidunt quidem iure explicabo dolore labore?</p>
          <p id='ay'></p>
          <div className='burclarLink'>
          <a href="#ay">Ay</a>
            <a href="#gunes">Güneş</a>
            <a href="#merkur">Merkür</a>
            <a href="#venus">Venüs</a>
            <a href="#mars">Mars</a>
            <a href="#jupiter">Jüpiter</a>
            <a href="#saturn">Satürn</a>
            <a href="#uranus">Uranüs</a>
            <a href="#neptun">Neptün</a>
            <a href="#pluton">Pluton</a>
            
            </div>
          
        </div>
      </div>
      
      <h5>AY Burçlarda
      </h5>
     
    <div class="card mb-3">
      <Accordion className='accordion' flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="ay1">KOÇ</AccordionHeader>
          <AccordionBody accordionId="ay1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="ay2">BOĞA</AccordionHeader>
          <AccordionBody accordionId="ay2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="ay3">İKİZLER</AccordionHeader>
          <AccordionBody accordionId="ay3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="ay4">YENGEÇ</AccordionHeader>
          <AccordionBody accordionId="ay4">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="ay5">ASLAN</AccordionHeader>
          <AccordionBody accordionId="ay5">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="ay6">BAŞAK</AccordionHeader>
          <AccordionBody accordionId="ay6">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="ay7">TERAZİ</AccordionHeader>
          <AccordionBody accordionId="ay7">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="ay8">AKREP</AccordionHeader>
          <AccordionBody accordionId="ay8">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="ay9">YAY</AccordionHeader>
          <AccordionBody accordionId="ay9">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="ay10">OĞLAK</AccordionHeader>
          <AccordionBody accordionId="ay10">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="ay11">KOVA</AccordionHeader>
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
          <AccordionHeader targetId="ay12">BALIK</AccordionHeader>
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
      <h5>GÜNEŞ Burçlarda
      </h5>
     
      <div className="card mb-3">
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="gunes1" >KOÇ</AccordionHeader>
          <AccordionBody accordionId="gunes1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="gunes2">BOĞA</AccordionHeader>
          <AccordionBody accordionId="gunes2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="gunes3">İKİZLER</AccordionHeader>
          <AccordionBody accordionId="gunes3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="gunes4">YENGEÇ</AccordionHeader>
          <AccordionBody accordionId="gunes4">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="gunes5">ASLAN</AccordionHeader>
          <AccordionBody accordionId="gunes5">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="gunes6">BAŞAK</AccordionHeader>
          <AccordionBody accordionId="gunes6">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="gunes7">TERAZİ</AccordionHeader>
          <AccordionBody accordionId="gunes7">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="gunes8">AKREP</AccordionHeader>
          <AccordionBody accordionId="gunes8">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="gunes9">YAY</AccordionHeader>
          <AccordionBody accordionId="gunes9">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="gunes10">OĞLAK</AccordionHeader>
          <AccordionBody accordionId="gunes10">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="gunes11">KOVA</AccordionHeader>
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
          <AccordionHeader targetId="gunes12">BALIK</AccordionHeader>
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
          <a href="#ay">Ay</a>
            <a href="#gunes">Güneş</a>
            <a href="#merkur">Merkür</a>
            <a href="#venus">Venüs</a>
            <a href="#mars">Mars</a>
            <a href="#jupiter">Jüpiter</a>
            <a href="#saturn">Satürn</a>
            <a href="#uranus">Uranüs</a>
            <a href="#neptun">Neptün</a>
            <a href="#pluton">Pluton</a>
           
            </div>
            </div>
      <h5>MERKÜR Burçlarda
      </h5>
      
      <div className="card mb-3">
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="merkur1" >KOÇ</AccordionHeader>
          <AccordionBody accordionId="merkur1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="merkur2">BOĞA</AccordionHeader>
          <AccordionBody accordionId="merkur2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="merkur3">İKİZLER</AccordionHeader>
          <AccordionBody accordionId="merkur3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="merkur4">YENGEÇ</AccordionHeader>
          <AccordionBody accordionId="merkur4">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="merkur5">ASLAN</AccordionHeader>
          <AccordionBody accordionId="merkur5">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="merkur6">BAŞAK</AccordionHeader>
          <AccordionBody accordionId="merkur6">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="merkur7">TERAZİ</AccordionHeader>
          <AccordionBody accordionId="merkur7">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="merkur8">AKREP</AccordionHeader>
          <AccordionBody accordionId="merkur8">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="merkur9">YAY</AccordionHeader>
          <AccordionBody accordionId="merkur9">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="merkur10">OĞLAK</AccordionHeader>
          <AccordionBody accordionId="merkur10">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="merkur11">KOVA</AccordionHeader>
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
          <AccordionHeader targetId="merkur12">BALIK</AccordionHeader>
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
          <a href="#ay">Ay</a>
            <a href="#gunes">Güneş</a>
            <a href="#merkur">Merkür</a>
            <a href="#venus">Venüs</a>
            <a href="#mars">Mars</a>
            <a href="#jupiter">Jüpiter</a>
            <a href="#saturn">Satürn</a>
            <a href="#uranus">Uranüs</a>
            <a href="#neptun">Neptün</a>
            <a href="#pluton">Pluton</a>
           
            </div>
            </div>
    <h5>VENÜS Burçlarda
      </h5>
    
      <div className="card mb-3">
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="venus1" >KOÇ</AccordionHeader>
          <AccordionBody accordionId="venus1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="venus2">BOĞA</AccordionHeader>
          <AccordionBody accordionId="venus2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="venus3">İKİZLER</AccordionHeader>
          <AccordionBody accordionId="venus3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="venus4">YENGEÇ</AccordionHeader>
          <AccordionBody accordionId="venus4">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="venus5">ASLAN</AccordionHeader>
          <AccordionBody accordionId="venus5">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="venus6">BAŞAK</AccordionHeader>
          <AccordionBody accordionId="venus6">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="venus7">TERAZİ</AccordionHeader>
          <AccordionBody accordionId="venus7">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="venus8">AKREP</AccordionHeader>
          <AccordionBody accordionId="venus8">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="venus9">YAY</AccordionHeader>
          <AccordionBody accordionId="venus9">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="venus10">OĞLAK</AccordionHeader>
          <AccordionBody accordionId="venus10">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="venus11">KOVA</AccordionHeader>
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
          <AccordionHeader targetId="venus12">BALIK</AccordionHeader>
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
          <a href="#ay">Ay</a>
            <a href="#gunes">Güneş</a>
            <a href="#merkur">Merkür</a>
            <a href="#venus">Venüs</a>
            <a href="#mars">Mars</a>
            <a href="#jupiter">Jüpiter</a>
            <a href="#saturn">Satürn</a>
            <a href="#uranus">Uranüs</a>
            <a href="#neptun">Neptün</a>
            <a href="#pluton">Pluton</a>
           
            </div>
            </div>
    <h5>MARS Burçlarda
      </h5>
    
      <div className="card mb-3">
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="mars1" >KOÇ</AccordionHeader>
          <AccordionBody accordionId="mars1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="mars2">BOĞA</AccordionHeader>
          <AccordionBody accordionId="mars2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="mars3">İKİZLER</AccordionHeader>
          <AccordionBody accordionId="mars3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="mars4">YENGEÇ</AccordionHeader>
          <AccordionBody accordionId="mars4">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="mars5">ASLAN</AccordionHeader>
          <AccordionBody accordionId="mars5">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="mars6">BAŞAK</AccordionHeader>
          <AccordionBody accordionId="mars6">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="mars7">TERAZİ</AccordionHeader>
          <AccordionBody accordionId="mars7">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="mars8">AKREP</AccordionHeader>
          <AccordionBody accordionId="mars8">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="mars9">YAY</AccordionHeader>
          <AccordionBody accordionId="mars9">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="mars10">OĞLAK</AccordionHeader>
          <AccordionBody accordionId="mars10">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="mars11">KOVA</AccordionHeader>
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
          <AccordionHeader targetId="mars12">BALIK</AccordionHeader>
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
          <a href="#ay">Ay</a>
            <a href="#gunes">Güneş</a>
            <a href="#merkur">Merkür</a>
            <a href="#venus">Venüs</a>
            <a href="#mars">Mars</a>
            <a href="#jupiter">Jüpiter</a>
            <a href="#saturn">Satürn</a>
            <a href="#uranus">Uranüs</a>
            <a href="#neptun">Neptün</a>
            <a href="#pluton">Pluton</a>
           
            </div>
            </div>
    <h5>JÜPİTER Burçlarda
      </h5>
    
      <div className="card mb-3">
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="jupiter1" >KOÇ</AccordionHeader>
          <AccordionBody accordionId="jupiter1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="jupiter2">BOĞA</AccordionHeader>
          <AccordionBody accordionId="jupiter2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="jupiter3">İKİZLER</AccordionHeader>
          <AccordionBody accordionId="jupiter3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="jupiter4">YENGEÇ</AccordionHeader>
          <AccordionBody accordionId="jupiter4">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="jupiter5">ASLAN</AccordionHeader>
          <AccordionBody accordionId="jupiter5">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="jupiter6">BAŞAK</AccordionHeader>
          <AccordionBody accordionId="jupiter6">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="jupiter7">TERAZİ</AccordionHeader>
          <AccordionBody accordionId="jupiter7">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="jupiter8">AKREP</AccordionHeader>
          <AccordionBody accordionId="jupiter8">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="jupiter9">YAY</AccordionHeader>
          <AccordionBody accordionId="jupiter9">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="jupiter10">OĞLAK</AccordionHeader>
          <AccordionBody accordionId="jupiter10">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="jupiter11">KOVA</AccordionHeader>
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
          <AccordionHeader targetId="jupiter12">BALIK</AccordionHeader>
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
          <a href="#ay">Ay</a>
            <a href="#gunes">Güneş</a>
            <a href="#merkur">Merkür</a>
            <a href="#venus">Venüs</a>
            <a href="#mars">Mars</a>
            <a href="#jupiter">Jüpiter</a>
            <a href="#saturn">Satürn</a>
            <a href="#uranus">Uranüs</a>
            <a href="#neptun">Neptün</a>
            <a href="#pluton">Pluton</a>
           
            </div>
            </div>
    <h5>SATÜRN Burçlarda
      </h5>
      
      <div className="card mb-3">
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="saturn1" >KOÇ</AccordionHeader>
          <AccordionBody accordionId="saturn1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="saturn2">BOĞA</AccordionHeader>
          <AccordionBody accordionId="saturn2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="saturn3">İKİZLER</AccordionHeader>
          <AccordionBody accordionId="saturn3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="saturn4">YENGEÇ</AccordionHeader>
          <AccordionBody accordionId="saturn4">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="saturn5">ASLAN</AccordionHeader>
          <AccordionBody accordionId="saturn5">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="saturn6">BAŞAK</AccordionHeader>
          <AccordionBody accordionId="saturn6">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="saturn7">TERAZİ</AccordionHeader>
          <AccordionBody accordionId="saturn7">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="saturn8">AKREP</AccordionHeader>
          <AccordionBody accordionId="saturn8">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="saturn9">YAY</AccordionHeader>
          <AccordionBody accordionId="saturn9">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="saturn10">OĞLAK</AccordionHeader>
          <AccordionBody accordionId="saturn10">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="saturn11">KOVA</AccordionHeader>
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
          <AccordionHeader targetId="saturn12">BALIK</AccordionHeader>
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
          <a href="#ay">Ay</a>
            <a href="#gunes">Güneş</a>
            <a href="#merkur">Merkür</a>
            <a href="#venus">Venüs</a>
            <a href="#mars">Mars</a>
            <a href="#jupiter">Jüpiter</a>
            <a href="#saturn">Satürn</a>
            <a href="#uranus">Uranüs</a>
            <a href="#neptun">Neptün</a>
            <a href="#pluton">Pluton</a>
           
            </div>
            </div>
    <h5>URANÜS Burçlarda
      </h5>
     
      <div className="card mb-3">
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="uranus1" >KOÇ</AccordionHeader>
          <AccordionBody accordionId="uranus1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="uranus2">BOĞA</AccordionHeader>
          <AccordionBody accordionId="uranus2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="uranus3">İKİZLER</AccordionHeader>
          <AccordionBody accordionId="uranus3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="uranus4">YENGEÇ</AccordionHeader>
          <AccordionBody accordionId="uranus4">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="uranus5">ASLAN</AccordionHeader>
          <AccordionBody accordionId="uranus5">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="uranus6">BAŞAK</AccordionHeader>
          <AccordionBody accordionId="uranus6">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="uranus7">TERAZİ</AccordionHeader>
          <AccordionBody accordionId="uranus7">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="uranus8">AKREP</AccordionHeader>
          <AccordionBody accordionId="uranus8">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="uranus9">YAY</AccordionHeader>
          <AccordionBody accordionId="uranus9">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="uranus10">OĞLAK</AccordionHeader>
          <AccordionBody accordionId="uranus10">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="uranus11">KOVA</AccordionHeader>
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
          <AccordionHeader targetId="uranus12">BALIK</AccordionHeader>
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
          <a href="#ay">Ay</a>
            <a href="#gunes">Güneş</a>
            <a href="#merkur">Merkür</a>
            <a href="#venus">Venüs</a>
            <a href="#mars">Mars</a>
            <a href="#jupiter">Jüpiter</a>
            <a href="#saturn">Satürn</a>
            <a href="#uranus">Uranüs</a>
            <a href="#neptun">Neptün</a>
            <a href="#pluton">Pluton</a>
           
            </div>
            </div>
    <h5>NEPTÜN Burçlarda
      </h5>
      
      <div className="card mb-3">
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="neptun1" >KOÇ</AccordionHeader>
          <AccordionBody accordionId="neptun1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="neptun2">BOĞA</AccordionHeader>
          <AccordionBody accordionId="neptun2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="neptun3">İKİZLER</AccordionHeader>
          <AccordionBody accordionId="neptun3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="neptun4">YENGEÇ</AccordionHeader>
          <AccordionBody accordionId="neptun4">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="neptun5">ASLAN</AccordionHeader>
          <AccordionBody accordionId="neptun5">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="neptun6">BAŞAK</AccordionHeader>
          <AccordionBody accordionId="neptun6">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="neptun7">TERAZİ</AccordionHeader>
          <AccordionBody accordionId="neptun7">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="neptun8">AKREP</AccordionHeader>
          <AccordionBody accordionId="neptun8">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="neptun9">YAY</AccordionHeader>
          <AccordionBody accordionId="neptun9">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="neptun10">OĞLAK</AccordionHeader>
          <AccordionBody accordionId="neptun10">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="neptun11">KOVA</AccordionHeader>
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
          <AccordionHeader targetId="neptun12">BALIK</AccordionHeader>
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
          <a href="#ay">Ay</a>
            <a href="#gunes">Güneş</a>
            <a href="#merkur">Merkür</a>
            <a href="#venus">Venüs</a>
            <a href="#mars">Mars</a>
            <a href="#jupiter">Jüpiter</a>
            <a href="#saturn">Satürn</a>
            <a href="#uranus">Uranüs</a>
            <a href="#neptun">Neptün</a>
            <a href="#pluton">Pluton</a>
           
            </div>
            </div>
    <h5>PLUTON Burçlarda
      </h5>
      
      <div className="card mb-3">
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="pluton1" >KOÇ</AccordionHeader>
          <AccordionBody accordionId="pluton1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="pluton2">BOĞA</AccordionHeader>
          <AccordionBody accordionId="pluton2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="pluton3">İKİZLER</AccordionHeader>
          <AccordionBody accordionId="pluton3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="pluton4">YENGEÇ</AccordionHeader>
          <AccordionBody accordionId="pluton4">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="pluton5">ASLAN</AccordionHeader>
          <AccordionBody accordionId="pluton5">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="pluton6">BAŞAK</AccordionHeader>
          <AccordionBody accordionId="pluton6">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="pluton7">TERAZİ</AccordionHeader>
          <AccordionBody accordionId="pluton7">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="pluton8">AKREP</AccordionHeader>
          <AccordionBody accordionId="pluton8">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="pluton9">YAY</AccordionHeader>
          <AccordionBody accordionId="pluton9">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="pluton10">OĞLAK</AccordionHeader>
          <AccordionBody accordionId="pluton10">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="pluton11">KOVA</AccordionHeader>
          <AccordionBody accordionId="pluton11">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="pluton12">BALIK</AccordionHeader>
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

export default GezegenlerBurclarda;