import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.cssigniter.com/themeforest/aegean/images/dummy/slide2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
   
  <img
      className="d-block w-100"
      src="https://www.cssigniter.com/themeforest/aegean/images/dummy/slide0.jpg"  alt=''
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.cssigniter.com/themeforest/aegean/images/dummy/slide3.jpg"  alt=''
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider;