import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/about';




function App() { 
  return (
    <>
    
<Navbar title="textlove"/>
<div className="container my-3">
<Textform heading="Enter text to analyse"/>
<About/>
</div>

</>
  );
}

export default App;