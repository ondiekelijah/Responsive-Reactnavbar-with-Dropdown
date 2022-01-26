import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './components/pages/Home'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Events from './components/pages/Events'
import Mission from './components/pages/Mission'
import Learn from './components/pages/Learn'



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about"element={<About />} />
        <Route path="/blog"element={<Blog />} />
        <Route path="/events"element={<Events />} />
        <Route path="/mission"element={<Mission />} />
        <Route path="/learn"element={<Learn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
