import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";

const SubNavbar = () => {
  return (
    <Container fluid className="bg-dark text-white subNavbar">
      <Container>
        <h2 className="text-white">My Learning</h2>
      </Container>
      <Nav className="justify-content-center">
        <Nav.Link
          as={NavLink}
          to="/my-learning/all-courses"
          className="text-white"
        >
          My Courses
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to="/my-learning/my-wishlist"
          className="text-white"
        >
          My Wishlist
        </Nav.Link>
        <Nav.Link as={NavLink} to="/my-learning/chart" className="text-white">
          Chart
        </Nav.Link>
      </Nav>
    </Container>
  );
};

export default SubNavbar;
