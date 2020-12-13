import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Plant from './components/Plant';

// CSS

function App() {
  return (
    <div className="App">
        <header>
          <h1>Plant Folio</h1>
        </header>
        <nav>
          <Link to='/'>Landing</Link>
          <Link to='/library'>Library</Link>
        </nav>
        <main>
        <Route exact path="/" component={Landing} />
        <Route path="/library" component={Library} />
        <Route path="/plant/:slug" component={Plant} />
        </main>
    </div>
      
      
  );
}

export default App;
