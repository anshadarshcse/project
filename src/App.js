
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c='Ansh'
  render() {
    return (
      <div>
        Hello my first class based componenet{this.c}
      </div>
    )
  }
}
