import React from "react";
import eader from "./Header.css";
import { Container, Nav, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";

const Header = () => {
  return (
    <div className="header-container">
      <Container fluid>
        <Container className="nav-top">
          <Row className="row">
            <Col className="col">
              <TopNav />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

const TopNav = () => {
  const history = useHistory();
  const handleNavClick = (eventKey) => {
    history.push(`/${eventKey}`);
  };
  return (
    <div>
      <Nav
        variant="tabs"
        defaultActiveKey="advantage"
        onSelect={handleNavClick}
      >
        <Nav.Item>
          <Nav.Link eventKey="advantage">Advantage</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Mobile">Mobile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="signin">Sign In</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="register">Register</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Header;
