import React from 'react'
import { Col, Button, Form, Container, Nav, Navbar, Row } from "react-bootstrap";

import "./HomeSearch.scss";
import {
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';



const HomeSearch = () => {
  return (
    <>
      <Form onSubmit="/library-page">

        <Container>
          <Col className="contact" >



            <input className='form-control' placeholder="Book, publisher or author name isbn" aria-label="Search" type='Search' />



          </Col>
        </Container>



      </Form>

    </>
  );
}

export default HomeSearch