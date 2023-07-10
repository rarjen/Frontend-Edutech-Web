import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function NavbarDetail({ title }) {
  return (
    <Navbar
      bg="dark"
      variant="light"
      className="navbar"
      style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 999 }}
    >
      <Container>
        <Navbar.Brand style={{ color: "white" }}>
          Alpha & Omega
          <span>
            <h6 style={{ color: "white" }}>{title}</h6>
          </span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
