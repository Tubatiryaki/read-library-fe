import React from 'react'
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap'

const Categories = () => {
  return (
    <Container className="auth-container">
    <Row className="author-row">
      
      
      <Col className="author">
      <p>Categories</p>
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
      
    </Row>
  </Container>
  )
}

export default Categories