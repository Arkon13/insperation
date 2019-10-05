import React from 'react';
import Home from './components/home';
import Song from './components/song';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
        <Route path= "/" exact component = {Home} />
        <Route path = "/song/:id" exact component = {Song} />
    </Router>
  );
}

export default App;
