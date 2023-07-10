import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const CardComponentWishlist = ({ product, onBuyClick, onDeleteClick }) => {
  const handleBuyClick = () => {
    onBuyClick(product.courseId);
  };
  const handleDeleteClick = () => {
    onDeleteClick(product.id);
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
          <Col>
            <Button
              variant="success"
              className="px-5"
              style={{ width: "100%" }}
              onClick={handleBuyClick}
            >
              Checkout
            </Button>
          </Col>
          <Col>
            <Button
              variant="danger"
              className="px-5"
              style={{ width: "100%" }}
              onClick={handleDeleteClick}
            >
              Delete
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardComponentWishlist;
