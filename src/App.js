import React from "react";
import './App.css';
import Projects from './components/Projects';

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
      <Route path="/projects" element={<Projects />} />
    </Routes>
  </Router>

  );
}