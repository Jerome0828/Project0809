import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carousels(props) {
  const [index, setIndex] = useState(0);
  const [img , setImg] = useState();
  const [style, setStyle] = useState(['60vh'])

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect( () => {
    if ( typeof props.gif == 'object' ) {
      setImg(props.gif)
    }
  }, [props])

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={1500} style={{ height: style[0] }} >
      {img && Object.keys(img).map( (val) => {
        return (
          <Carousel.Item>
            <img
              className="w-100"
              src={`data:image/jpeg;base64,${img[val]}`}
              style={{ height: style[0]}}
            />
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}

export default Carousels;