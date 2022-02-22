import React from "react";
import './App.css';
import Projects from './components/Projects';
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
      <Route path="/" element={<Projects />} />
      <Route path="/about" element={<AboutGrid />} />
    </Routes>
  </Router>
  );
}