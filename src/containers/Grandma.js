import React, { Component } from 'react';
import { connect } from 'react-redux';
import { grandma } from '../actions/pointsActions';
import { addGrandma } from '../actions/makersActions'
import { bindActionCreators } from 'redux';

class Grandma extends Component{

 

    render(){

        const click = () => {
            const target = document.getElementById('x');
            target.addEventListener('click', alert('bum1'));
        };

        return(
            <div className="maker grandma" id="x" onClick={click}>
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
   
    
    bindActionCreators({
            grandma: grandma(),
            addGrandma: addGrandma()
              
              
        }, dispatch);
    
    
  };
  
export default connect(mapStateToProps ,mapDispatchToProps)(Grandma);

