import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3 text-white">
          <Col className="p-0" md={40} sm={40}>
            <a
              className="github"
              href="https://github.com/gregwa1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="devicon-github-plain"></i>
            </a>
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            Gregoire Boisrond Jr &copy; 2019
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
