import React, { Component } from "react";
import './App.css';
import './components/home/Home.css';
import './components/projects/ProjectsGrid.css';
import ProjectsGrid from './components/projects/ProjectsGrid';
import Home from './components/home/Home';

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