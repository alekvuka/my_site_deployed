import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Lets from './components/Lets.js'
import Build from './components/Build.js'
import Something from './components/Something.js'
import Together from './components/Together.js'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      displayBuild: false,
      displaySomething: false,
      displayTogether: false
    };
  }

  addBuild = () => {
    this.setState((prevState, props) => ({
      prevState,
      displayBuild: true
    }))
  }

  addSomething = () => {
    this.setState((prevState, props) => ({
      prevState,
      displaySomething: true
    }))
  }

  addTogether = () => {
    this.setState((prevState, props) => ({
      prevState,
      displayTogether: true
    }))
  }


  componentDidMount() {
    let buildTimer = setTimeout(() => this.addBuild(), 1000)
    let somethingTimer = setTimeout(() => this.addSomething(), 2000)
    let togetherTimer = setTimeout(() => this.addTogether(), 3000)
  }

  componentWillUnmount() {
     clearTimeout(this.buildTimer);
     clearTimeout(this.somethingTimer);
     clearTimeout(this.togetherTimer);
  }

  render () {
  return (
    <Container>
      <Row>
        <Col xs={4}><Lets/></Col>
      </Row>
      <Row>
        <Col xs={6}>
          { this.state.displayBuild === true ? <Build/> : ""}
        </Col>
      </Row>
      <Row>
        <Col xs={9}>
          { this.state.displaySomething === true ? <Something /> : ""}
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
        { this.state.displayTogether === true ? <Together /> : ""}
        </Col>
      </Row>
      <Row>
        <button></button>
      </Row>
    </Container>
  );}
}

export default App;

// <Col><BackgroundAnimations /></Col>
// <Col md="auto"><BackgroundAnimations /></Col>
//<Col xs={10}><BackgroundAnimations /></Col>
// <Row>
//   <BackgroundAnimations />
//   <BackgroundAnimations />
// </Row>
