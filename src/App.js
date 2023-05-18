import React, { Component } from "react";
import './App.css';
import './components/about/AboutGrid.css';
import './components/projects/ProjectsGrid.css';
import ProjectsGrid from './components/projects/ProjectsGrid';
import AboutGrid from './components/about/AboutGrid';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<AboutGrid />} />
          <Route path="/projects" element={<ProjectsGrid />} />
        </Routes>
      </Router>
    );
  }
}

export default App;