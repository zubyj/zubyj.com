import React, { Component } from "react";
import './App.css';
import './components/Home.css';
import './components/ProjectsGrid.css';
import ProjectsGrid from './components/ProjectsGrid';
import Home from './components/Home';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsGrid />} />
        </Routes>
      </Router>
    );
  }
}

export default App;