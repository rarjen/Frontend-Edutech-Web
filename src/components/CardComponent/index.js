import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CardComponent = ({ product, onBuyClick, onWishlistClick }) => {
  const handleBuyClick = () => {
    onBuyClick(product.id);
  };

  const handleWishlistClick = () => {
    onWishlistClick(product.id);
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
        <Row>
          <Col>
            <Button
              variant="btn btn-success"
              className="px-5"
              style={{ width: "100%" }}
              onClick={handleBuyClick}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </Button>
          </Col>
          <Col>
            <Button
              variant="outline-success"
              className="px-5"
              style={{ width: "100%" }}
              onClick={handleWishlistClick}
            >
              <FontAwesomeIcon icon={faHeart} />
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
