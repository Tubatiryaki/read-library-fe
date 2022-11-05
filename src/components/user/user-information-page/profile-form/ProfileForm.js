import React from 'react'
import { Button, Form } from 'react-bootstrap'
import "./ProfileForm.scss";

const ProfileForm = () => {
  return (
    <>
    <Form className="profile-form">
      <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Address</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Birth Date</Form.Label>
        <Form.Control type="date"  />
      </Form.Group>

    
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
    </>
  )
}

export default ProfileForm