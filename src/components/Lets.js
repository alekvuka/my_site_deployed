import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './background.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

class Lets extends Component {

  constructor(props) {
    super(props)
    this.state = {
      display: true,
    };
  }

  componentDidMount() {
    let timer = setTimeout(() => this.setState({display: false}), 3000)
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
            {this.state.display ? <h1 className="p">Let's</h1> : ""}
          </CSSTransitionGroup>
        </div>
      );
    }
}

export default Lets
