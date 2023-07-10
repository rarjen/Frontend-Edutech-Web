import React from "react";
import { Container, Row } from "react-bootstrap";

export default function DetailVideo({
  description,
  detailDescription,
  category,
  lessons,
  requirements,
}) {
  return (
    <Container>
      <Row className="p-3">
        <h2 className="mb-4">About this course</h2>
        <h6>{description}</h6>
        <p className="mt-0">{detailDescription}</p>
      </Row>
      <hr />
      <Row className="p-3">
        <h4 className="mb-4">Category</h4>
        <p>{category}</p>
      </Row>
      <hr />
      <Row className="p-3">
        <h4 className="mb-4">Lessons</h4>
        {lessons.map((lesson) => (
          <ul className="ps-4">
            <li className="m-0" key={lesson.id}>
              {lesson.name}
            </li>
          </ul>
        ))}
      </Row>
      <hr />
      <Row className="p-3">
        <h3 className="mb-4">Requirements</h3>
        {requirements.map((require) => (
          <ul className="ps-4">
            <li className="m-0" key={require.id}>
              {require.name}
            </li>
          </ul>
        ))}
      </Row>
    </Container>
  );
}
