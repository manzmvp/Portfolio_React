import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Contact from './contents/Contact';
import Skills from './contents/Skills';
import Education from './contents/Education';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
        <Route path="/education">
            <Education />
        </Route>
        <Route path="/skills">
            <Skills />
        </Route>
      </div>
    </Router>
  );
}
export default App;