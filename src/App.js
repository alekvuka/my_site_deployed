import React from 'react';
import BackgroundAnimations from './components/BackgroundAnimations.js'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Lets from './components/Lets.js'
import Build from './components/Build.js'


function App() {
  return (
    <Container>
      <Row>
        <BackgroundAnimations />
        <BackgroundAnimations />
      </Row>
      <Row>
        <Lets />
      </Row>
      <Row>
        <Build />
      </Row>
    </Container>
  );
}

export default App;

// <Col><BackgroundAnimations /></Col>
// <Col md="auto"><BackgroundAnimations /></Col>
//<Col xs={10}><BackgroundAnimations /></Col>
