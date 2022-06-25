import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carousels(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={1000} style={{ height: '60vh', width: '100%'}} >
     
      <Carousel.Item>
          <img
            className=""
            src={require('./icon/1.jpg')}
            alt="First slide"
            style={{ height: '60vh', width: '100%'}}
          />
      </Carousel.Item>
      
      <Carousel.Item>

        <img
          className=""
          src="https://fakeimg.pl/350x200/ff0000,128/000,255"
          alt="Second slide"
          style={{ height: '60vh' }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <div>
          <img
            className=""
            src="https://fakeimg.pl/350x200/ff0000/000"
            alt="Third slide"
            style={{ height: '60vh'}}
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;