import React, { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {
 

   
    

    render() {
        
        return (
             <h1>{this.props.score.result}</h1> 
        );
    }
}



const mapStateToProps =(state)=> {
    return {
        score: state.points
    };
};

export default connect(mapStateToProps)(Header);