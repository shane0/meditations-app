/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import React from "react";
import Card from "react-bootstrap/Card";
import "../App.css";

const messages = [
  "Breathing in, I know I am breathing in. Breathing out, I know I am breathing out.",
  "Breathing in a long breath, I know I am breathing in a long breath.  Breathing out a long breath, I know I am breathing out a long breath.",
  "Breathing in a short breath, I know I am breathing in a short breath. Breathing out a short breath, I know I am breathing out a short breath.",
  "Breathing in, I am aware of my whole body. Breathing out, I am aware of my whole body.",
  "Breathing in, I calm my whole body. Breathing out, I calm my whole body.",
  "Breathing in, I feel joyful. Breathing out, I feel joyful.",
  "Breathing in, I feel happy.  Breathing out, I feel happy.",
  "Breathing in, I am aware of my mental formations.  Breathing out, I am aware of my mental formations.",
  "Breathing in, I calm my mental formations. Breathing out, I calm my mental formations.",
  "Breathing in, I am aware of my mind. Breathing out, I am aware of my mind.",
  "Breathing in, I make my mind happy. Breathing out, I make my mind happy.",
  "Breathing in, I concentrate my mind.  Breathing out, I concentrate my mind.",
  "Breathing in, I liberate my mind. Breathing out, I liberate my mind.",
  "Breathing in, I observe the impermanent nature of all dharmas.  Breathing out, I observe the impermanent nature of all dharmas.",
  "Breathing in, I observe the disappearance of desire. Breathing out, I observe the disappearance of desire.",
  "Breathing in, I observe the no-birth, no-death nature of all phenomena. Breathing out, I observe the no-birth, no-death nature of all phenomena.",
];

const OneBreath = (props) => {
  return (
    <>
      <li className="no-bullets">{props.message}</li>
    </>
  );
};

const MapInstructions = () => {
  return (
    <div>
      <ol>
        {messages.map((message) => (
          // eslint-disable-next-line react/jsx-key
          <OneBreath message={message} />
        ))}
      </ol>
    </div>
  );
};

function AnapanaSatiCard(props) {
  return (
    <Card className="anapana" style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.sub}</Card.Subtitle>
        <Card.Text>
          <p>{props.content}</p>
          <MapInstructions />
        </Card.Text>
        <Card.Link href={props.link}>{props.linkname}</Card.Link>
        <Card.Link href={props.link2}>{props.linkname2}</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default AnapanaSatiCard;
