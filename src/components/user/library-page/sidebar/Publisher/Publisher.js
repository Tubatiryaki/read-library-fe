import React from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { FaFilter } from 'react-icons/fa';

const Publisher = () => {
  return (
    <Container className="auth-container">
    <Row className="author-row">
      
      
      <Col className="author">
      <p>Publisher</p>
      <InputGroup className="mb-3">
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
      <Form.Control aria-label="Text input with checkbox" />
    </InputGroup>
    <InputGroup className="mb-3">
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
      <Form.Control aria-label="Text input with checkbox" />
    </InputGroup>
    <InputGroup className="mb-3">
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
      <Form.Control aria-label="Text input with checkbox" />
    </InputGroup>
    <InputGroup className="mb-3">
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
      <Form.Control aria-label="Text input with checkbox" />
    </InputGroup>
    <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control aria-label="Text input with checkbox" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control aria-label="Text input with checkbox" />
      </InputGroup>
      </Col>
      
      <Button><FaFilter/>&nbsp;&nbsp;Filter</Button>
    </Row>
  </Container>
  )
}

export default Publisher