import React from "react";
import Image from "react-bootstrap/Image";
// import second from './sliders'

function PCarousel({ src, width, height }) {
  return <Image src={src} width={width} height={height} />;
}

export default PCarousel;
