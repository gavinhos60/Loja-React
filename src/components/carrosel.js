import React from 'react';
import Slider from 'react-slick';
import './css/carrossel.css';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../imagens/imagem1.png';
import image2 from '../imagens/imagem1.png';
import image3 from '../imagens/imagem1.png';

const settings = {
  
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  autoplaySpeed: 100,
  slidesToScroll: 1
   
  };
  
  function Carousel() {
    return (
      <div class="">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Image1" />
        </div>
        <div>
          <img src={image2} alt="Image2" />
        </div>
        <div>
          <img src={image3} alt="Image3" />
        </div>
        
      </Slider>
      <button class="slick-prev">Anterior</button>
  <button class="slick-next">Próximo</button>
      </div>
      
    );
  }
  
  export default Carousel;
