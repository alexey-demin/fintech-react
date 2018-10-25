import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-materialize';

class Counter extends Component {
  state = { count: parseInt(this.props.init) };

  isMax = () => {
    return this.state.count === this.props.max
  }

  isMin = () => {
    return this.state.count === -this.props.max
  }

  incrementCount = () => {
    if (this.isMax()) {
      return;
    }
    this.setState({
      count: this.state.count + this.props.step
    });
  }

  decrementCount = () => {
    if (this.isMin()) {
      return;
    }
    this.setState({
      count: this.state.count - this.props.step
    });
  }

  getInitialState = () => {
    this.setState({
      count: this.props.init
    });
  }

  render() {
    return (
      <div className="counter">
        <div className="buttons">
          <Button id = "button" waves='green' onClick = {this.incrementCount}>Up</Button>
          <Button id = "button" className='red' onClick = {this.decrementCount}>Down</Button>
          <Button id = "button" className='orange' onClick = {this.getInitialState}>Reset</Button>
        </div>
        <div className="outputText">
          <h1> Counter = {this.state.count}</h1>
          <h1 hidden = {!(this.isMax() || this.isMin())}>{this.props.message}</h1>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
    step: PropTypes.number.isRequired,
    init: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired
}

export default Counter;
