import React from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../img/logo.png";

const MyNav = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Courses" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Full-Stack-Developing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Data-Science
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  AWD-DEVOPS
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#link">Instructors</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNav;
