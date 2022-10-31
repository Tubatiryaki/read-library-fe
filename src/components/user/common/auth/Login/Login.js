import React from "react";
import { Button, Col, Container, Form, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.scss";
import {HiUserGroup} from "react-icons/hi"

const Login = () => {
  return (
    <Container className="account">
      <Row className="">
      
        <Col className="bcg">
        
       <HiUserGroup/>
        
        
          <Form noValidate className="account-login">
          
            <Link as={Link} to="/">
              Login
            </Link>
            <Link as={Link} to="/">
              Register
            </Link>
            
            

            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button className="mb-3" variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
