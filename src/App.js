/* eslint-disable react/react-in-jsx-scope */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { JulianYear, JulianWeek, JulianDay } from "./components/Julian";
import MeditationCard from "./features/MeditationCard";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Row>
          <Col>
            <MeditationCard className="p-5" />
            <br />
            <JulianYear />
            <br />
            <JulianWeek />
            <br />
            <JulianDay />
            <br />
            <a
              className="App-link"
              href="https://shanenull.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              meditation session planner
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
