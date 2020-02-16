import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { pushRotate as Menu } from 'react-burger-menu'
import './App.css'
import HomePage from './containers/HomePage.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProjectPage from './containers/ProjectPage'
import BlogPage from './containers/BlogPage'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      displayMenu: false
    };
  }

  addMenu = () => {
    this.setState((prevState, props) => ({
      prevState,
      displayMenu: true
    }))
  }

  componentDidMount() {
    let menuTimer = setTimeout(() => this.addMenu(), 4500 )
  }

  componentWillUnmount() {
     clearTimeout(this.menuTimer);
  }

  render () {
  return (
    <Router>
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path="/projects" component={ProjectPage} />
      <Route exact path="/contact" component={ContactPageå} />
    </div>
    </Router>
  );}
}

export default App;
