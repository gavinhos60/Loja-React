import React, { useState } from 'react';
import './css/carrinho.css'
import image1 from '../imagens/shorts.png';


function ShoppingCart(props) {
    
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter((item) => item !== itemToRemove));
  };

  const totalItems = cartItems.length;

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

    
  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice}</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      
      <div class="produtos">
        <div class="produto1">
            <img src={image1} alt='shorts'/>
        <button onClick={() => addToCart({ id: 1, name: 'Shorts1', price: 10 })}>
            Adicionar ao carrinho
        </button>
        </div>
        <div class="produto1">
            <img src={image1} alt='shorts'/>
        <button onClick={() => addToCart({ id: 1, name: 'Shorts2', price: 20 })}>
            Adicionar ao carrinho
        </button>
        </div>
      </div>
    
    </div>
  );
}


export default ShoppingCart;
