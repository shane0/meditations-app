import React from "react";
import Card from "react-bootstrap/Card";

function MeditationFilter() {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title>Filter</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">category</Card.Subtitle>
        <Card.Text>
          <ul>
            <li>Thai Forest</li>
            <li>Vajrayana</li>
            <li>Zen</li>
            <li>Therevada</li>
          </ul>
        </Card.Text>
        <Card.Link href="#">filter</Card.Link>
        <Card.Link href="#">search</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default MeditationFilter;
