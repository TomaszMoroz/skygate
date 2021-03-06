import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Header  from '../components/Header';
import Grandma from './Grandma';



import {Button} from 'react-bootstrap';



import  { handleClick } from '../actions/pointsActions';
import { grandma } from '../actions/pointsActions';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
       
          <Header />
        </header>
        
        <div className="column left"> <Button onClick={this.props.addPoints}>click me</Button></div>
        <div className="column center">   <Grandma /> </div>
        <div className="column right">  ilosc babc: {this.props.grandmas} </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    points: state.result,
    grandmas: state.makers.grandmas
  };
  
};

const mapDispatchToProps = (dispatch) => {
  return {
      addPoints: () => {
        dispatch(handleClick())
      
      }
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
