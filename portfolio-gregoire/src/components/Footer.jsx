import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3 text-light">
          <Col className="p-0" md={3} sm={12}>

            Gregoire Boisrond Jr
            
          </Col>
          <Col className="p-0 d-flex justify-content-end text-light" md={3} >
             Gregoire Boisrond Jr &copy; 2019
          </Col>

        </Row>

      </Container> 
    </footer>
  )
}

export default Footer;