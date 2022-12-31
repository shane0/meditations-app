/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import React from "react";
import Card from "react-bootstrap/Card";
import Sequence from "../components/Order";

function MeditationCard(props) {
  return (
    <Card style={{ width: "80%" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.sub}</Card.Subtitle>
        <Card.Text>
          <p>{props.content}</p>
          <Sequence order={props.order} />
        </Card.Text>
        <Card.Link href={props.link}>{props.linkname}</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default MeditationCard;
