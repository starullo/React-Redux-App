import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './App.css';
import Generator from './components/Generator';
import Saved from './components/Saved';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>RANDOM CAT FACTS!</h1>
        <Generator />
        <Saved />
    </div>
  );
}


export default App;
