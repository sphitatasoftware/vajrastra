import React from 'react';
import Sidebar from './Slidebar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';

function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;