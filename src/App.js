import React, { Component } from "react";
import './App.css';
import './components/about/AboutGrid.css';
import './components/projects/ProjectsGrid.css';
import ProjectsGrid from './components/projects/ProjectsGrid';
import AboutGrid from './components/about/AboutGrid';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Analytics
import ReactGA from 'react-ga';


class App extends Component {

  setGA = () => {
    const TRACKING_ID = "UA-134417733-1";
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview('Init page view');
  };

  componentDidMount() {
    this.setGA();
  };

  render() {
    return (
      <Router>
        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<AboutGrid />} />
          <Route path="/projects" element={<ProjectsGrid />} />
        </Routes>
      </Router>
      );
  }
}

export default App;