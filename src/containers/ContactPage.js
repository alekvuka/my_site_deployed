import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
//import './background.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ContactForm from '../components/ContactPage/ContactForm.js'
import SideMenuNormal from '../components/SideMenuNormal.js'
import CardColumns from 'react-bootstrap/CardColumns'

class ContactPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
    };
  }

    render() {
      return (

        <div className="container-div">
        <Container id="outer-container" style={{ paddingTop: '1rem', position: 'fixed', overflow: 'auto', height: '100vh' }}>
          <Row>
            <Col id="page-wrap" xs={11}>
                <h1 className="p4">Contact</h1>
                <ContactForm />
            </Col>
          </Row>
        </Container>
        < SideMenuNormal />
        </div>


      );
    }
}

export default ContactPage
