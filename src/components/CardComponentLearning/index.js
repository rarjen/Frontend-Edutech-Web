import React from "react";
import { Card, Button, Row } from "react-bootstrap";

const CardComponentCart = ({ product, onBuyClick }) => {
  const handleBuyClick = () => {
    onBuyClick(product.courseId);
  };

  return (
    <Card className="mt-5">
      <div className="d-flex justify-content-center">
        <Card.Img
          variant="top"
          src={product.courseBanner}
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <Card.Body>
        <Card.Title>{product.courseTitle}</Card.Title>
        <Card.Text className="mb-3">Mentor: {product.instructorName}</Card.Text>
        <Row className="mt-3 p-2">
          <Button
            variant="success"
            className="px-5"
            style={{ width: "100%" }}
            onClick={handleBuyClick}
          >
            Checkout
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardComponentCart;
