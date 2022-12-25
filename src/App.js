/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import "./App.css";
import Julian, { JulianYear, JulianWeek, JulianDay } from "./Julian";

function MeditationCard() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>Meditation Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  meditaiton subtitle
                </Card.Subtitle>
                <Card.Text>
                  <p>Anapanasati</p>
                </Card.Text>
                <Card.Link href="#">dhammatalks</Card.Link>
                <Card.Link href="#">plum village</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

function ListExample() {
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
    </Nav>
  );
}

function ContainerFluid() {
  return (
    <Container>
      <Row>
        <ListExample></ListExample>
        <Col>
          <header className="App-header">
            <a
              className="App-link"
              href="https://shanenull.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              meditation session planner
            </a>
            <Col>
              <MeditationCard></MeditationCard>
              <hr />
              <JulianYear />
              <hr />
              <JulianWeek />
              <hr />
              <JulianDay />
            </Col>
          </header>
        </Col>
      </Row>
    </Container>
  );
}

function App() {
  return (
    <div className="App">
      <ContainerFluid />
    </div>
  );
}

export default App;
