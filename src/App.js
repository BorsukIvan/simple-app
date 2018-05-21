import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

const Com = ({ variable }) => (<span>{console.warn(variable)}</span>);

Com.defaultProps = {
    variable: null,
};

class App extends Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Com variable={undefined}/>
      </div>
    );
  }
}

export default App;
