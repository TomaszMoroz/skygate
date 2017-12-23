import React, { Component } from 'react';
import logo from './logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.points.result}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (sate) => {
  return {
    points: state.points
  };
  
};

const mapDispatchToProps = (dispatch) => {
  return {
      displayPoints:  () => {
        dispatch({
          type: 'HANDLECLICK',
          payload: 1
        });
      }
  };

};

export default App;
