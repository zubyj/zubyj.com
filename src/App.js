import React, { Component } from "react";
import './App.css';
import './components/Home.css';
import Home from './components/Home';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  }
}

export default App;