import React, { Component } from 'react';
import { connect } from 'react-redux';
import { grandma } from '../actions/pointsActions';
import { addGrandma } from '../actions/makersActions';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';

class Grandma extends Component{

 

    render(){

     const bum = () => {
         setInterval(()=>{this.props.grandma()},1000);
         this.props.addGrandma(); 
     };
           
      

        return(
            <div className="maker grandma" id="x">
                <Button onClick={()=> bum()} >DD</Button>
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
        
        },
        addGrandma: () => {
            dispatch(addGrandma())
        }
    };
  
  };
  
export default connect(mapStateToProps ,mapDispatchToProps)(Grandma);

