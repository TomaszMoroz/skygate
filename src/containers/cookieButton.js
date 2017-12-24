import React, {Component} from 'react';
import { connect } from 'react-redux';
import  { handleClick } from '../actions/pointsActions';
import {Button} from 'react-bootstrap'


class addPoint extends Component {
    render(){
        return(
            <div className="point">
                <h1>test</h1>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)  => {
    return {
        addPoints: () => {
          dispatch(handleClick)
        
        }
    };
}

export default connect(mapDispatchToProps)(addPoint);