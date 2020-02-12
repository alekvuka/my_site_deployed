import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './background.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

class Something extends Component {

  constructor(props) {
    super(props)
    this.state = {
      display: true,
      sentence: "Something",
      numberOfDots: 0
    };
  }

  changeSentance = () => {

    if(this.state.numberOfDots < 3){

      this.setState((prevState, props) => ({
        prevState,
        sentence: prevState.sentence + ".",
        numberOfDots: prevState.numberOfDots + 1
      }))}

  }


  componentDidMount() {
    let timer = setTimeout(() => this.setState({display: false}), 1500)
    let timer2 = setInterval(() => this.changeSentance(), 450)
  }

  componentWillUnmount() {
     clearTimeout(this.timer);
     clearInterval(this.timer2);
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
            {this.state.display ? <h1 className="p3">{this.state.sentence}</h1>: ""}
          </CSSTransitionGroup>
        </div>

      );
    }
}

//{this.state.display ? <h1 className="p3">Something...</h1>: ""}

export default Something
