import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TopBar.scss";
import { MdMail, MdPhone } from "react-icons/md";
import { settings } from "../../../../utils/settings";

const TopBar = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Row className="top-bar">
            <Col className="contact">
              <Nav.Link as={Link} to="/">
                <MdPhone /> {settings.phone1}
              </Nav.Link>

              <Nav.Link as={Link} to="/">
                <MdMail />
                {settings.email}
              </Nav.Link>
            </Col>

            <Col className="login">
              <div>
                <Nav.Link as={Link} to="/">
                  Login
                </Nav.Link>

                <span>&nbsp;|&nbsp;</span>
                <Nav.Link as={Link} to="/">
                  Register
                </Nav.Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
