import React from "react";
import { Card, Button } from "react-bootstrap";

const CardComponent = ({ product, onBuyClick }) => {
  const handleBuyClick = () => {
    onBuyClick(product.id);
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
        <Card.Text className="mb-3">{product.price.display}</Card.Text>
        <Card.Text className="mb-3">Mentor: {product.instructor}</Card.Text>
        <Button
          variant="primary"
          className="w-100 btn btn-success"
          onClick={handleBuyClick}
        >
          Beli
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
