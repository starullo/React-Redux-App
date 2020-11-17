import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './App.css';
import Generator from './components/Generator';
import Saved from './components/Saved';
function App(props) {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>{props.isLoading ? 'One moment while we access our massive amazing database' : 'RANDOM CAT FACTS 2000'}</h1>
        <Generator />
        <Saved />
    </div>
  );
}
 const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
    }
 }

export default connect(mapStateToProps, {})(App);
