import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export default function PNavbar() {
  const location = useLocation();
  const handleLogout = () => {
    Swal.fire({
      title: "Konfirmasi Logout",
      text: "Apakah Anda yakin ingin logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Logout",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        window.location.href = "/signin";
      }
    });
  };

  const isLoggedIn = !!localStorage.getItem("auth");
  const isLibrary = location.pathname !== "/my-learning/courses";

  return (
    <Navbar
      bg="light"
      variant="light"
      className="navbar"
      style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 999 }}
    >
      <Container>
        <Navbar.Brand href="/library">
          {isLibrary ? "Alpha & Omega" : "Library"}
        </Navbar.Brand>
        <div className="col-2">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <Nav className="me-auto">
          <NavDropdown title="KATEGORI" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Fullstack Developer
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Mobile Developer
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/something" className={"text-decoration-none"}>
                DevOps
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="TEKNOLOGI" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Java Springboot
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">NodeJS</NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/something" className={"text-decoration-none"}>
                Laravel
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/something" className={"text-decoration-none"}>
                Flutter
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="EXPLORE" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">GCP</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">AWS</NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/something" className={"text-decoration-none"}>
                Azure
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Cyber Security
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="PARTNERSHIP" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Google</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Amazon</NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/something" className={"text-decoration-none"}>
                Microsoft
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="justify-content-end">
          {isLoggedIn ? (
            <>
              <Nav.Link>
                <NavLink
                  to="/my-learning/all-courses"
                  className={"text-decoration-none"}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#808080",
                    }}
                  >
                    {isLibrary ? "My Learning" : ""}
                  </span>
                </NavLink>
              </Nav.Link>
              <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link>
                <Button variant="success" as={NavLink} to="/signin">
                  Sign In
                </Button>
              </Nav.Link>
              <Nav.Link>
                <Button variant="outline-success" as={NavLink} to="/signup">
                  Sign Up
                </Button>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
