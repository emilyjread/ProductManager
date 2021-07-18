import React from 'react'
import Main from './views/Main'
import Detail from './views/Detail';
import {Router} from '@reach/router'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Main path="/api/products"/>
      <Detail path="/api/products/:id"/>

      </Router>
    </div>
  );
}

export default App;
