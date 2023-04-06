import React from 'react';
import whatsappimg from '../imagens/whatsapp.png'
import './css/whatsapp.css'

function Whatsapp() {
    const handleClick = () => {
      window.open('https://wa.me/seunumerodetelefonecompleto', '_blank');
    }
  
    return (
      <div id="whatsapp-botao">
        <a href="https://wa.me/11932036594" target="_blank" rel="noreferrer">
          <img src={whatsappimg} alt="WhatsApp" onClick={handleClick} />
        </a>
      </div>
    );
  }
  export default Whatsapp;
