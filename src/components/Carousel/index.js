import React from "react";
import { Carousel } from "react-bootstrap";

export default function PCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ik.imagekit.io/6v306xm58/banner3.png?updatedAt=1688097049900"
          alt="First slide"
        />
        <Carousel.Caption style={{ textAlign: "left" }}>
          <h2>Becoming a Fullstack Developer</h2>
          <h6>
            The Edutech platform bridges the gap between the education and the
            professional world, and preparing young talents for the Industry
            4.0.
          </h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ik.imagekit.io/6v306xm58/banner1.png?updatedAt=1688097047312"
          alt="Second slide"
        />

        <Carousel.Caption style={{ textAlign: "left" }}>
          <h2>Experienced Mentors</h2>
          <h6>
            Learning and being guided by experienced mentors who have been
            working in the industry for decades.
          </h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ik.imagekit.io/6v306xm58/banner2.png?updatedAt=1688097044984"
          alt="Third slide"
        />
        <Carousel.Caption style={{ textAlign: "left" }}>
          <h2>Exclusive Learning Method</h2>
          <h6>
            With an intensive learning method, mentors assist participants in
            identifying challenges and guiding them according to each
            participant's learning style.
          </h6>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
