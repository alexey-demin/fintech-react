import React, { Component } from 'react';
import Counter from './Counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <Counter step = {1} init = {0} max = {5} message ={'Счетчик достиг минимального/максимального значения'}/>
    );
  }
}

export default App;
