import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './background.css'

class BackgroundAnimations extends Component {
  constructor(props) {
      super(props);
      this.state = {items: ['hello :) Aleks']};
      this.handleAdd = this.handleAdd.bind(this);
    }

    render() {
      const items = this.state.items.map((item, i) => (
        <div key={item} onClick={() => this.handleRemove(i)}>
          {item}
        </div>
      ));

      return (
        <div>
          <CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false}>
            <h1>Let's</h1>
          </CSSTransitionGroup>

          <CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false}>
            <h1>Build</h1>
          </CSSTransitionGroup>

          <CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false}>
            <h1>Something</h1>
          </CSSTransitionGroup>

          <CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false}>
            <h1>Together</h1>
          </CSSTransitionGroup>
        </div>
      );
    }
}

export default BackgroundAnimations
