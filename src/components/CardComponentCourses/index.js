import React from "react";
import { Card, Button, Row } from "react-bootstrap";

const CardComponentCart = ({ product, onDetailClick }) => {
  const handleDetailClick = () => {
    onDetailClick(product.id);
  };

  return (
    <Card className="mt-5">
      <div className="d-flex justify-content-center">
        <Card.Img
          variant="top"
          src={product.bannerUrl}
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="mb-3">{product.description}</Card.Text>
        <Row className="p-2">
          <Button
            variant="dark"
            className="px-5"
            style={{ width: "100%" }}
            onClick={handleDetailClick}
          >
            Detail Course
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardComponentCart;
