import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jokes from './components/Jokes';
import Nav from './components/Nav';
import Favourites from './components/Favourites';

class App extends React.Component {
  render(){
  return (
    <div className="container">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Jokes/>}/>
          <Route path="/favourites" element={<Favourites/>}/>
        </Routes>
      </Router>
    </div>
  );
  }
}

export default App;