import React from 'react';
import './css/MyPopup.css';

function Janela({ visivel, fechar}) {

  

  if (!visivel) {
    return null;
  }
  return (
    <div>    
       <div className="modal-background" />
    <div className="janela">      
   
      <div className="conteudo">
   
      </div>
      <button className="fechar" onClick={fechar}>
        X
      </button> 
      <h1>Meu Carrinho</h1> 
        
    </div>
    </div>
  );
}

export default Janela;