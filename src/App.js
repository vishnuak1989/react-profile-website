import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './router/AppRouter.js';


class App extends Component {
  render() {
    return (
      <AppRouter />
    );
  }
}

export default App;
