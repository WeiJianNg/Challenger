import React from "react";

import { Button, Navbar, Nav, NavDropdown} from "react-bootstrap"

const Header = ({isLoginPage}) => {
  return (
      <div>
            {
              !isLoginPage ?
              <Navbar bg="dark" variant="dark" className="justify-content-between">
                <Navbar.Brand href="#home">Challengers</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Profile</Nav.Link>
                    <NavDropdown title="Friends" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">See Friends</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.2">Add Friends</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Button variant="danger">Log Out</Button>
                </Navbar.Collapse>
              </Navbar>
              :
              <Navbar bg="dark" variant="dark" className="justify-content-between">
                <Navbar.Brand href="#home">Challengers</Navbar.Brand>
              </Navbar>
            }
      </div>
  );
};

export default Header;