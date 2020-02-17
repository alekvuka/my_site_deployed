import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Projects from '../components/ProjectPage/Projects.js'
import SideMenuNormal from '../components/SideMenuNormal.js'
import CardColumns from 'react-bootstrap/CardColumns'
import '../App.css'
import { connect } from 'react-redux';

class ProjectPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      numberDisplayed: 0
    };
  }

  addProject = () => {

    this.setState((prevState, props) => ({
      prevState,
      displaySomething: true
    }))
  }

  displayProjects = () => {
    return this.props.projects.map((project) => {
       return <Projects key={project.id} description={project.description} website={project.website} github={project.github} name={project.name} />
    })
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
    <Container id="outer-container" style={{ paddingTop: '1rem', position: 'fixed', overflow: 'auto', height: '100vh' }}>
      <Row>
        <Col id="page-wrap" xs={11}>
            <h1 className="p4">Projects</h1>
            <CardColumns  style={{ paddingTop: '1rem'}}>
              {this.displayProjects()}
            </CardColumns>
        </Col>
      </Row>
    </Container>
    < SideMenuNormal />
    </div>
  );}
}

const mapStateToProps = state => {
  return {
    projects: state.projects
  };
};

export default connect(mapStateToProps)(ProjectPage);
