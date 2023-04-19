import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ marginLeft: "-200px" }}>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Countries">All Countries</Nav.Link>
            <Nav.Link href="/myRecords">My Records</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
