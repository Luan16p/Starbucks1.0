import * as React from 'react';

import Carousel from 'react-bootstrap/Carousel';

export default function Carousel_(props: any) {
  return (
    <Carousel className="container-xxl">
      <Carousel.Item>
        <img className="d-block w-100" src={"https://github.com/Luan16p/data/blob/main/banner_3871229738_desktop.jpg?raw=true"} alt="First slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={"https://github.com/Luan16p/data/blob/main/banner_195590685_desktop.jpg?raw=true"} alt="Second slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={"https://github.com/Luan16p/data/blob/main/banner_1238876046_desktop.jpg?raw=true"} alt="Third slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}