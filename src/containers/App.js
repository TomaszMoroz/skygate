import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Header  from '../components/Header'

import logo from '../logo.svg';
import  { handleClick } from '../actions/pointsActions'
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <img src={logo} className="App-logo" alt="logo" />
          <Header pass={this.props.points}/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> {this.props.points} and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    points: state.result
  };
  
};

const mapDispatchToProps = (dispatch) => {
  return {
      addPoints: () => {
        dispatch(handleClick)
      
      }
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
