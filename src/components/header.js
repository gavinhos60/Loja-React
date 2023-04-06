import './css/header.css'
import '../App.css'


function Header() {

  return (
   <header>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <div class="container">
      
        <div class="box seletor">Novidades</div>
        <div class="box">Midas Bazar</div>
        <div class="box">Produtos</div>
        <div class="box">FAQ</div>
        <div class="box">Sobre nós</div>
        <div class="logo"></div>        
     
    
      <input type="text" placeholder='BUSCAR'/>
      <div class="pesquisa">
      <button className="material-icons">search</button>
      <button className="material-icons">account_circle</button>
      <button className="material-icons">shopping_cart</button>
      </div>
    </div>
   </header>
   
  );
}

export default Header;


