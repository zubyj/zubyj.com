import React from "react";
import './App.css';

import ProjectsGrid from './components/projects/ProjectsGrid';
import AboutGrid from './components/about/AboutGrid';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
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