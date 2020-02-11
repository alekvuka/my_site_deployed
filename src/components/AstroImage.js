import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './background.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import photo from '../a.jpg'

class AstroImage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      display: true,
    };
  }

  componentDidMount() {
    let timer = setTimeout(() => this.setState({display: false}), 2250)
  }

  componentWillUnmount() {
     clearTimeout(this.timer);
  }

    render() {


      return (
        <div>
          <CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeaveTimeout={1000}>
            <img alt="astronauts" src={photo}/>
          </CSSTransitionGroup>
        </div>

      );
    }
}

export default AstroImage
