import { MDBContainer, MDBInputGroup } from "mdb-react-ui-kit";
import React from "react";
import { Button, Container, Nav } from "react-bootstrap";
import Spacer from "../../components/common/spacer/Spacer";

import HomeSearch from "../../components/user/home/home-search/HomeSearch";
import MenuBar from "../../components/user/home/menubar/MenuBar";
import TopBar from "../../components/user/home/topbar/TopBar";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <>

      <div className="home-main" >
        <TopBar />
        <MenuBar />
        <Spacer />
        <HomeSearch />
        <Container>
          <Nav className="justify-content-center" defaultActiveKey="/home" as="ul" >
            <Nav.Item as="li">
              ________________________. or .________________________
            </Nav.Item>
          </Nav>
        </Container>
        <div style={{ height: 30 }}></div>
        <MDBContainer>
          <MDBInputGroup tag="form" className='justify-content-center'>
            <Button href="/library-page">Explore books</Button>
          </MDBInputGroup>
        </MDBContainer>
      </div>
    </>
  );
};

export default HomePage;
