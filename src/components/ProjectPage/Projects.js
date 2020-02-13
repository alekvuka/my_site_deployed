import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import {RemoveScroll} from 'react-remove-scroll';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

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
      <Card border="primary" style={{ width: '18rem' }}>
         <Card.Body>
           <Card.Title>Primary Card Title</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the bulk
             of the card's content.
           </Card.Text>
               <Button variant="outline-primary" >GitHub</Button>
               {"   "}
               <Button variant="outline-danger" >WebSite</Button>
         </Card.Body>
       </Card>
       <br />
    </CSSTransitionGroup>
    </div>
  );}
}

export default Projects;
