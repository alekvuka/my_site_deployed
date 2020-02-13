import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Projects from '../components/ProjectPage/Projects.js'
import SideMenuNormal from '../components/SideMenuNormal.js'
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import {RemoveScroll} from 'react-remove-scroll';
import CardColumns from 'react-bootstrap/CardColumns'
import '../App.css'

class ProjectPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      displayBuild: false,
    };
  }

  addProject = () => {
    this.setState((prevState, props) => ({
      prevState,
      displaySomething: true
    }))
  }

  componentDidMount() {
    let addProject = setInterval(() => this.addProject(), 500)
  }

  componentWillUnmount() {
     clearInterval(this.addProject);
  }

  render () {
  return (
    <div className="container-div">
    <Container id="outer-container" style={{ paddingTop: '1rem', position: 'fixed', overflow: 'scroll', height: '100vh' }}>
      <Row>
        <Col id="page-wrap" xs={11}>
            <h1 className="p4">Projects</h1>
            <CardColumns  style={{ paddingTop: '1rem' }}>
              <Projects />
            </CardColumns>
        </Col>
      </Row>
    </Container>
    < SideMenuNormal />
    </div>
  );}
}

export default ProjectPage;
