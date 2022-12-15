import React from "react";
import './App.css';
import './components/about/AboutGrid.css';
import './components/projects/ProjectsGrid.css';
import ProjectsGrid from './components/projects/ProjectsGrid';
import AboutGrid from './components/about/AboutGrid';

// Analytics
import ReactGA from 'react-ga';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  const TRACKING_ID = "UA-134417733-1";
  ReactGA.initialize(TRACKING_ID);
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