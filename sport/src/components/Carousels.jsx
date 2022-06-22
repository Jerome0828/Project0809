import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carousels() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={1000} 
      style={{display: 'block', width: '80vw', height: '30vw'}}>
      
      <Carousel.Item>
        <img
          className=""
          src="https://fakeimg.pl/350x200/ff0000/000"
          alt="First slide"
          style={{width: '80vw', height: '30vw'   }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className=""
          src="https://fakeimg.pl/350x200/ff0000,128/000,255"
          alt="Second slide"
          style={{width: '80vw', height: '30vw'   }}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div>
          <img
            className=""
            src="https://fakeimg.pl/200x100/?retina=1&text=こんにちは&font=noto"
            alt="Third slide"
            style={{width: '80vw', height: '30vw'   }}
          />
        </div>
        
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;