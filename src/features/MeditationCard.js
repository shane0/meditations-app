import React from "react";
import Card from "react-bootstrap/Card";

function MeditationCard() {
  return (
    <Card style={{ width: "50%" }}>
      <Card.Body>
        <Card.Title>Anapanasati</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          the roots with the breath
        </Card.Subtitle>
        <Card.Text>
          <p>Anapanasati</p>
        </Card.Text>
        <Card.Link href="#">dhammatalks</Card.Link>
        <Card.Link href="#">plum village</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default MeditationCard;
