import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProfileForm from '../../components/user/user-information-page/profile-form/ProfileForm'
import ProfileMenu from '../../components/user/user-information-page/profile-menu/ProfileMenu'

const UserInformationPage = () => {
  return (
    <>
    
      <Container>
        <Row>

          <Col xs={4}>
            <ProfileMenu />
          </Col>
          <Col xs={8}>

           
            <ProfileForm />
            



          </Col>
        </Row>
      </Container>
    </>
  )
}

export default UserInformationPage