import './App.css';
import SimpleSlider from './components/carrosel';
import Header from './components/header';
import Whatsapp from './components/whatsapp'
import ShoppingCart from './components/carrinho'
function App() {
  return (
    <div className="App">
     <Header />
     <SimpleSlider />
     <Whatsapp />
  
    </div>
  );
}

export default App;
