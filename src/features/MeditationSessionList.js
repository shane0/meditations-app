import React from "react";
import Card from "react-bootstrap/Card";

function MeditationSessionList() {
  return (
    <Card style={{ width: "80%" }}>
      <Card.Body>
        <Card.Title>Sessions</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          focused collections
        </Card.Subtitle>
        <Card.Text>select a session</Card.Text>
        <Card.Link href="#">session one</Card.Link>
        <Card.Link href="#">session two</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default MeditationSessionList;
