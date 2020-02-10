import React from 'react';
import BackgroundAnimations from './components/BackgroundAnimations.js'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Lets from './components/Lets.js'
import Build from './components/Build.js'
import Something from './components/Something.js'
import Together from './components/Together.js'


function App() {
  return (
    <Container>
      <Row>
        <Col xs={4}><Lets/></Col>
      </Row>
      <Row>
        <Col xs={6}><Build/></Col>
      </Row>
      <Row>
        <Col xs={9}><Something /></Col>
      </Row>
      <Row>
        <Col xs={10}><Together /></Col>
      </Row>
      <Row>
        <button></button>
      </Row>
    </Container>
  );
}

export default App;

// <Col><BackgroundAnimations /></Col>
// <Col md="auto"><BackgroundAnimations /></Col>
//<Col xs={10}><BackgroundAnimations /></Col>
// <Row>
//   <BackgroundAnimations />
//   <BackgroundAnimations />
// </Row>
