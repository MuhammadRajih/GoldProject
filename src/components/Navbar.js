import React from "react";
import '../style.css'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Navigasi() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div>
                        <button href="#" className="buttonHome btn btn-primary"></button><span className="sr-only"></span>
                    </div>
                    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-md-end mr-5" id="navbarNavDropdown">
                        <div className="navbar-nav mr-5">
                            <ul className="navbar-nav ">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#" >Our Services </a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Why Us</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Testimonial</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
        // 
        // <Navbar style={{backgroundColor: "#cfd4ed"}} className="navbar navbar-expand-lg justify-content-center">
        //      <Container>
        //         <Col>
        //          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //          </Col>
        //          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //          <Navbar.Collapse id="basic-navbar-nav">
        //          <Nav className="">
        //              <Nav.Link href="#home">Home</Nav.Link>
        //              <Nav.Link href="#link">Link</Nav.Link>
        //              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //              <NavDropdown.Item href="#action/3.2">
        //                  Another action
        //              </NavDropdown.Item>
        //              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //              <NavDropdown.Divider />
        //              <NavDropdown.Item href="#action/3.4">
        //                  Separated link
        //              </NavDropdown.Item>
        //              </NavDropdown>
        //          </Nav>
        //          </Navbar.Collapse>
        //      </Container>
        //  </Navbar>
    )
}

export default Navigasi;