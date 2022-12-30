/* eslint-disable react/react-in-jsx-scope */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { JulianYear, JulianWeek, JulianDay } from "./components/Julian";
import MeditationCard from "./features/MeditationCard";
import Header from "./components/Header";
import MeditationFilter from "./features/MeditationFilter";
import MeditationSessionList from "./features/MeditationSessionList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Row>
          <Col>
            <h3>sessions</h3>
            <MeditationSessionList />
          </Col>
          <Col>
            <h3>meditations</h3>
            <MeditationCard />
          </Col>
          <Col>
            <h3>search & filter</h3>
            <MeditationFilter />
          </Col>
        </Row>
        <Row className="p-5">
          <hr />
          <Col>
            <h3>space = emptiness</h3>
            <p>cojoined</p>
          </Col>
          <Col>
            <h3>time = impermanence</h3>
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
              birdup meditation session planner
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
