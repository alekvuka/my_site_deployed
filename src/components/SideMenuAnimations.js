import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './background.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { pushRotate as Menu } from 'react-burger-menu'
import { Sidenav } from 'rsuite';
import { Nav } from 'rsuite';
import {Icon} from 'rsuite';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SideMenuAnimations extends Component {

  constructor(props) {
    super(props)
    this.state = {
      display: true,
      color: "red"
    };
  }

  changeColor = () => {
    if(this.state.color === "black") {
      this.setState((prevState, props) => ({
        prevState,
        color: "red"
      }))
    } else {
      this.setState((prevState, props) => ({
        prevState,
        color: "black"
      }))
    }
  }



  componentDidMount() {
    let timer = setTimeout(() => this.setState({display: false}), 3000)
    let interval = setInterval(() => this.changeColor() , 750)
  }

  componentWillUnmount() {
     clearTimeout(this.timer);
     clearInterval(this.interval)
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
          <Menu disableAutoFocus right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } itemListClassName={ "my-items" } burgerBarClassName={ this.state.color === 'red' ? "background2" : "background1"}>
            <NavLink exact to="/" activeStyle={{ background: 'pink'}}><h1>Home</h1></NavLink>
            <NavLink exact to="/projects" activeStyle={{ background: 'pink'}}><h1>Projects</h1></NavLink>
            <NavLink exact to="/blog" activeStyle={{ background: 'pink'}}><h1>Blogs</h1></NavLink>
            <a href="https://www.linkedin.com/in/alekvuka/"><h1>LinkedIn</h1></a>
            <a href="https://github.com/alekvuka"><h1>GitHub</h1></a>
            <a href=""><h1>Email</h1></a>
            <a href=""><h1>Contact</h1></a>
          </Menu>
        </CSSTransitionGroup>
        </div>
      );
    }
}

export default SideMenuAnimations


// <nav class="bm-item-list" >
//     <NavLink to="/projects" exact activeStyle={{ background: 'darkblue'}}>Projects</NavLink>
// </nav>

// <nav class="bm-item-list" >
//   <a href=""><h1>Projects</h1></a>
//   <a href=""><h1>LinkedIn</h1></a>
//   <a href=""><h1>GitHub</h1></a>
//   <a href=""><h1>Email</h1></a>
// </nav>
//
// <nav class="bm-item-list" >
//   <a href=""><h1>Projects</h1></a>
//   <a href=""><h1>Blog</h1></a>
//   <a href=""><h1>LinkedIn</h1></a>
//   <a href=""><h1>GitHub</h1></a>
//   <a href=""><h1>Email</h1></a>
//   <a href=""><h1>Contact</h1></a>
// </nav>
