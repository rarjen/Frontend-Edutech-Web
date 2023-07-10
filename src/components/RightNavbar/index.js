import React from "react";
import { Container, Navbar, Nav, Row } from "react-bootstrap";

export default function RightNavbar({ contents, handleClick }) {
  const handleNavLinkClick = (id) => {
    handleClick(id);
  };

  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-vertical" />
        <Navbar.Collapse id="navbar-vertical">
          <Nav className="flex-column justify-content-end">
            <Row className="p-2">
              <h5>Content Course</h5>
              <hr />
            </Row>
            {contents.map((content) => (
              <div key={content.id}>
                <Nav.Link onClick={() => handleNavLinkClick(content.id)}>
                  {content.titleSubCourse}
                </Nav.Link>
              </div>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
