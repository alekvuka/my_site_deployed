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

class SideMenu extends Component {

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
          <Menu disableAutoFocus right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } itemListClassName={ "my-items" } burgerBarClassName={ this.state.color === 'red' ? "background2" : "background1"}>

            <NavLink to="/projects" activeStyle={{ background: 'pink'}}><h1>Projects</h1></NavLink>
            <a href="/"><h1>Home</h1></a>
            <a href="/projects"><h1>Projects</h1></a>
            <a href="/blog"><h1>Blog</h1></a>
            <a href="https://www.linkedin.com/in/alekvuka/"><h1>LinkedIn</h1></a>
            <a href="https://github.com/alekvuka"><h1>GitHub</h1></a>
            <a href=""><h1>Email</h1></a>
            <a href=""><h1>Contact</h1></a>

          </Menu>
        </div>
      );
    }
}

export default SideMenu
