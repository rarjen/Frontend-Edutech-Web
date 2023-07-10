import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SquareComponent = ({ logo }) => {
  return (
    <Container fluid className="square-container mt-5 px-5">
      <Row className="align-items-center">
        <Col md="auto" className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </Col>
        <Col>
          <h2 className="heading">
            Siap menjadi seorang developer professional?
          </h2>
        </Col>
        <Col md="auto">
          <button className="btn btn-success me-3 px-4 py-2">
            Mulai Belajar Gratis!
          </button>
          <button className="btn btn-outline-success px-4 py-2">
            Punya Pertanyaan?
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default SquareComponent;
