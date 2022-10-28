import React from "react";


const UserTemplate = () => {
  
  return (
    <Container fluid className="p-0 overflow-hidden">
    <Row>
      <Col lg={3}>
        <AdminMenu />
      </Col>
      <Col lg={9}>
        <Container className="pt-5">{children}</Container>
      </Col>
    </Row>
  </Container>
  );
};

export default UserTemplate;