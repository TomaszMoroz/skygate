import React, { Component } from 'react';
import { connect } from 'react-redux';
import { grandma } from '../actions/pointsActions';

class Grandma extends Component{
    render(){

        

        return(
            <div className="maker grandma" >
                {this.props.howMany.grandmas}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        howMany: state.makers
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        grandma: () => {
          dispatch(grandma())
        
        }
    };
  
  };
  
export default connect(mapStateToProps ,mapDispatchToProps)(Grandma);

