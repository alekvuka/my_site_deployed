import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Lets from './components/Lets.js'
import Build from './components/Build.js'
import Something from './components/Something.js'
import Together from './components/Together.js'
import { pushRotate as Menu } from 'react-burger-menu'
import './App.css'
import photo from './a.jpg'
import hello from './hello.jpg'
import SideMenu from './components/SideMenu.js'
import AstroImage from './components/AstroImage.js'
import HomePage from './containers/HomePage.js'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      displayMenu: false
    };
  }

  addMenu = () => {
    this.setState((prevState, props) => ({
      prevState,
      displayMenu: true
    }))
  }

  componentDidMount() {
    let menuTimer = setTimeout(() => this.addMenu(), 4500 )
  }

  componentWillUnmount() {
     clearTimeout(this.menuTimer);
  }

  render () {
  return (
    <div  >
      { this.state.displayMenu === true ? < SideMenu /> : ""}
      <HomePage />
    </div>
  );}
}

export default App;


// <Container id="outer-container" style={{ paddingTop: '1rem', position: 'fixed', height: '100vh' }}>
//   <Row>
//     <Col xs={4}><Lets/></Col>
//   </Row>
//   <Row  >
//     <Col xs={6}>
//       { this.state.displayBuild === true ? <Build/> : ""}
//     </Col>
//   </Row>
//   <Row >
//     <Col xs={9}>
//       { this.state.displaySomething === true ? <Something /> : ""}
//     </Col>
//   </Row>
//   <Row>
//     <Col id="page-wrap" xs={11}>
//     { this.state.displayTogether === true ? <Together /> : ""}
//     { this.state.displayMenuAndImage === true ? <AstroImage/> : ""}
//     </Col>
//   </Row>
// </Container>
// { this.state.displayMenuAndImage === true ? < SideMenu /> : ""}
// </div>
