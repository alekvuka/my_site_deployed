import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Nav from 'react-bootstrap/Nav'

class Projects extends React.Component {

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

  checkForGithub = () => {
    if(this.props.github){
      return <Nav.Link href={this.props.github}>GitHub</Nav.Link>
    }else{
      return ""
    }
  }

  checkForWebsite = () => {
    if(this.props.website){
      return <Nav.Link href={this.props.website}>Website</Nav.Link>
    }else{
      return ""
    }
  }

  componentDidMount() {
    let addProject = setInterval(() => this.addProject(), 500)
  }

  componentWillUnmount() {
     clearTimeout(this.addProject);
  }

  render () {
  return (
    <div>
    <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}>
      <Card border="warning" style={{ width: '18rem' }}>
         <Card.Body>
           <Card.Title>{this.props.name}</Card.Title>
           <Card.Text>
             {this.props.description}
           </Card.Text>
           <Nav className="justify-content-center" >
            <Nav.Item color={'red'}>
               {this.checkForGithub()}
            </Nav.Item>
            <Nav.Item>
               {this.checkForWebsite()}
            </Nav.Item>

            </Nav>
         </Card.Body>
       </Card>
       <br />
    </CSSTransitionGroup>
    </div>
  );}
}

export default Projects;
