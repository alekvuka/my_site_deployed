import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './background.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { pushRotate as Menu } from 'react-burger-menu'

class SideMenu extends Component {

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
          transitionLeave={false}>
          <Menu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
            <nav class="bm-item-list" >
              <a href=""><h1>Projects</h1></a>
              <a href=""><h1>LinkedIn</h1></a>
              <a href=""><h1>GitHub</h1></a>
              <a href=""><h1>Email</h1></a>
            </nav>
          </Menu>
        </CSSTransitionGroup>

        </div>

      );
    }
}

export default SideMenu
