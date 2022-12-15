import React, { useEffect } from "react";
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

const TRACKING_ID = "UA-134417733-1";
ReactGA.initialize(TRACKING_ID);


export default function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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