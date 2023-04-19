import React from 'react';
import number from "../Assets/Untitled.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";

function Header(){
    return(<>
    {/* create the blue-bar  */}
    <Card style={{ height: "18rem", backgroundColor: "blue" }}>
        <h1 style={{ marginLeft: "610px" }}>COVID</h1>
        <Card.Img
          src={number}
          style={{
            height: "40px",
            width: "40px",
            marginLeft: "730px",
            marginTop: "-49px",
          }}
        />
        <h2 style={{ color: "white", marginLeft: "570px", marginTop: "40px" }}>
          Covid19 Statistics
        </h2>
        <h6 style={{ color: "white", marginLeft: "420px", marginTop: "20px" }}>
          A website to provide you with all updates on Covid-19 statistics
          around the world
        </h6>
      </Card>

      {/* create a Nav-bar */}
      {/* <Navbar bg="dark" variant="dark" style={{ marginLeft: "-200px" }}>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Countries">All Countries</Nav.Link>
            <Nav.Link href="#pricing">My Records</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
    </>)
}
export default Header;