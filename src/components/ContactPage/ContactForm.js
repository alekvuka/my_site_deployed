import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
//import './background.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Contact.css'

class ContactForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
    };
  }

    render() {
      return (
        <div style={{ margin: 'auto'}} >
          <CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeaveTimeout={1000}>
            <Form style={{ paddingTop: '1rem'}}>
              <Form.Group controlId="formBasicEmail" style={{ width: '30vw'}}>
                <Form.Label style={{ color: 'blue', 'font-weight':'bold'}}>Name</Form.Label>
                <Form.Control type="name" placeholder="" />
              </Form.Group>
              <Form.Group style={{ width: '30vw'}}>
                <Form.Label style={{ color: 'blue', 'font-weight':'bold'}}>Email</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
              <Form.Group style={{ width: '30vw'}}>
                <Form.Label style={{ color: 'blue', 'font-weight':'bold'}}>E</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Button class='contactButton' variant="primary" style={{margin: 'auto'}}>
                Submit
              </Button>
            </Form>
          </CSSTransitionGroup>
        </div>

      );
    }
}

export default ContactForm
