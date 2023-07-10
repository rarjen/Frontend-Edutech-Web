import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row className="justify-content-between">
          <Col>
            <h5>JOIN US</h5>
            <ul>
              <li>How To Learn</li>
              <li>Terms & Condition</li>
              <li>Frequently Asked Questions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col>
            <h5>PROGRAM</h5>
            <ul>
              <li>Fullstack developer</li>
              <li>Become a Mentor</li>
              <li>Karrier</li>
            </ul>
          </Col>
          <Col>
            <h5>DEVELOPERS</h5>
            <ul>
              <li>Discussion Forum</li>
              <li>Hall of Fame</li>
              <li>Leaderboard</li>
              <li>Mentor</li>
            </ul>
          </Col>
          <Col>
            <h5>COMPANY</h5>
            <ul>
              <li>About Us</li>
              <li>Tutorial & Article</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="d-flex align-items-center justify-content-start">
            <p>Created by A&O Team</p>
          </Col>
          <Col className="d-flex align-items-center justify-content-end">
            <FontAwesomeIcon icon={faFacebook} className="mr-2" />
            <FontAwesomeIcon icon={faTwitter} className="mr-2" />
            <FontAwesomeIcon icon={faInstagram} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
