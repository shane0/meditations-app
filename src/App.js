/* eslint-disable react/react-in-jsx-scope */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { JulianYear, JulianWeek, JulianDay } from "./components/Julian";
import MeditationCard from "./features/MeditationCard";
import Header from "./components/Header";
import MeditationFilter from "./features/MeditationFilter";
import MeditationSessionList from "./features/MeditationSessionList";
import TagList from "./features/Tags";
import AnapanaSatiCard from "./anapanasati/Anapanasati";
import AnapanaVideo from "./anapanasati/AnapanaVideo";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Router>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </Suspense>
            </Router>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col>
            <h3>sessions</h3>
            <MeditationSessionList />
            <MeditationCard title="tags" content={<TagList />} />
            <MeditationFilter />
          </Col>
          <Col>
            <h3>meditations</h3>
            <AnapanaSatiCard
              title="anapanasati"
              sub="breath all the way"
              content="guards the 6 sense doors"
              link="https://www.dhammatalks.org/suttas/MN/MN118.html"
              linkname="sutta mn 18"
              link2="https://plumvillage.org/library/sutras/discourse-on-the-full-awareness-of-breathing/"
              linkname2="plum village"
              order="1"
            />
          </Col>
          <Col>
            <h3>daily</h3>
            <MeditationCard
              title="illusion"
              sub="concentration on distinction"
              content="illusions are real for unreal, sources of hapiness for sources of suffering, permanent for impermanent, dependant for independant"
              link="https://youtu.be/2RavAQoqxOY"
              linkname="garfield"
              order="2"
            />
            <MeditationCard
              title="satipatthana"
              sub="establishing mindfulness"
              content=""
              link="https://www.dhammatalks.org/suttas/MN/MN10.html"
              linkname="mn 10"
              order="2"
            />
            <MeditationCard
              title="dzogchen"
              sub="short moments many times"
              content="continuous meditation reminders"
              link="https://shanenull.com/urgyen.html"
              linkname="urgyen slides"
              link2="https://youtu.be/5fv7ZNYFD24"
              linkname2="condensed video"
              order="3"
            />
          </Col>
        </Row>
        <hr />
        <Row className="p-5">
          <Col>
            <h3>resources</h3>
            <a
              className="App-link"
              href="https://www.rigpawiki.org/index.php?title=Nang_Jang"
              target="_blank"
              rel="noopener noreferrer"
            >
              nang-jang
            </a>
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
          </Col>
        </Row>
        <Row>
          <hr></hr>
          <h1>videos</h1>
          <Col>
            <AnapanaVideo />
            <br></br>
            <iframe
              className="video-alt"
              src="https://www.youtube.com/embed/2RavAQoqxOY"
              title="Primordial confusion"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>
          <Col>
            <h1>recollection</h1>
            <iframe
              className="video-alt"
              src="https://www.youtube.com/embed/aaNq1DenFh8"
              title="0303n4b1 The Five Recollections \ \ Thanissaro Bhikkhu \ \ Dhamma Talks"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
        <Header />
      </Container>
    </div>
  );
}

export default App;
