import React from "react";
import { useHistory } from "react-router-dom"
import { Button, Navbar, Nav, NavDropdown} from "react-bootstrap";
import {useCookies} from "react-cookie";

const Header = ({isLoginPage}) => {
    const [cookie, setCookie] = useCookies()
    const history = useHistory();

    function logout() {
        setCookie("user", "", {
            path:"/"
        });
        setCookie("isAuthenticated", false, {
            path: "/"
        });
        history.push("/login");
    }

    return (
        <div>
            {
                !isLoginPage ?
                    <Navbar bg="dark" variant="dark" className="justify-content-between">
                        <Navbar.Brand href="#home">Challenge-Me!</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="/profile">Profile</Nav.Link>
                                <NavDropdown title="Friends" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">See Friends</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">Add Friends</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        <Button variant="danger" onClick={logout}>Log Out</Button>
                        </Navbar.Collapse>
                    </Navbar>
                :
                    <Navbar bg="dark" variant="dark" className="justify-content-between">
                        <Navbar.Brand href="#home">Challenge-Me!</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/signup">Sign Up</Nav.Link>
                            <Nav.Link href="/login">Sign In</Nav.Link>
                        </Nav>
                    </Navbar>
            }
      </div>
    );
};

export default Header;