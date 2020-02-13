import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import SideMenuNormal from '../components/SideMenuNormal.js'

class BlogPage extends React.Component {

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
    let addProject = setTimeout(() => this.addProject(), 500)
  }

  componentWillUnmount() {
     clearTimeout(this.addProject);
  }

  render () {
  return (
    <div  >
    <Container id="outer-container" style={{ paddingTop: '1rem', position: 'fixed', height: '100vh' }}>
      <Row>
        <Col id="page-wrap" xs={11}>
            <h1 className="p4">Blogs</h1>
        </Col>
      </Row>
    </Container>
    < SideMenuNormal />
    </div>
  );}
}

export default BlogPage;
