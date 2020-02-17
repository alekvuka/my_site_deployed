import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Lets from '../components/HomePage/Lets.js'
import Build from '../components/HomePage/Build.js'
import Something from '../components/HomePage/Something.js'
import Together from '../components/HomePage/Together.js'
import { pushRotate as Menu } from 'react-burger-menu'
import '../App.css'
import photo from '../a.jpg'
import SideMenuAnimations from '../components/SideMenuAnimations.js'
import SideMenuNormal from '../components/SideMenuNormal.js'
import AstroImage from '../components/AstroImage.js'
import { connect } from 'react-redux';


class HomePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      displayLets: false,
      displayBuild: false,
      displaySomething: false,
      displayTogether: false,
      displayMenuAndImage: false,
      displayImage: false,
      displayNormalMenu:false,
      hasSeen: false
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

  addMenuImage = () => {
    this.setState((prevState, props) => ({
      prevState,
      displayMenuAndImage: true,
    }))
  }

  checkIfSeen = () => {
    if(this.props.seenAnimations){
      this.setState((prevState, props) => ({
        prevState,
        displayTogether: true,
        displayImage: true,
        displayMenuNormal:true,
        displayLets: false
      }))
    }else{
      let buildTimer = setTimeout(() => this.addBuild(), 750)
      let somethingTimer = setTimeout(() => this.addSomething(), 1500)
      let togetherTimer = setTimeout(() => this.addTogether(), 4500)
      let menuAndImageTimer = setTimeout(() => this.addMenuImage(), 4500 )
      let setSeen = setTimeout(() =>this.props.seen(), 5000)
      this.setState((prevState, props) => ({
        prevState,
        displayLets: true
      }))
    }

  }

  componentDidMount() {
    this.checkIfSeen()
  }

  componentWillUnmount() {
     clearTimeout(this.buildTimer);
     clearTimeout(this.somethingTimer);
     clearTimeout(this.togetherTimer);
     clearTimeout(this.menuAndImageTimer);
     clearTimeout(this.setSeen)
  }

  render () {
  return (
    <div  >
    <Container id="outer-container" style={{ paddingTop: '1rem', position: 'fixed', height: '100vh' }}>
      <Row>
        <Col xs={5}>
          { this.state.displayLets === true ?   <Lets/> : ""}
        </Col>
      </Row>
      <Row  >
        <Col xs={7}>
          { this.state.displayBuild === true ? <Build/> : ""}
        </Col>
      </Row>
      <Row >
        <Col xs={9}>
          { this.state.displaySomething === true ? <Something /> : ""}
        </Col>
      </Row>
      <Row>
        <Col id="page-wrap" xs={11}>
        { this.state.displayTogether === true ? <Together /> : ""}
        { this.state.displayMenuAndImage === true ? <AstroImage/> : ""}
        { this.state.displayImage === true ? <AstroImage/> : ""}
        </Col>
      </Row>
    </Container>
    { this.state.displayMenuAndImage === true ? < SideMenuAnimations /> : ""}
    { this.state.displayMenuNormal === true ? < SideMenuNormal /> : ""}
    </div>
  );}
}

const mapStateToProps = state => {
  return {
    seenAnimations: state.seenAnimations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    seen: () => {
      dispatch({type:"SEEN"})
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
