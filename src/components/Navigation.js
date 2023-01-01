import React from "react";
import Nav from "react-bootstrap/Nav";

function HomeNav() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Sessions</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Meditations</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/meditations-app/games/rma.html" eventKey="link-3">
          ria
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <input style={{ align: "left" }}></input>
      </Nav.Item>
    </Nav>
  );
}

export default HomeNav;
