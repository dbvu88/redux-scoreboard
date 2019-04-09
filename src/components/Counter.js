import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => {
    return (
        <div className="counter">
            <button 
            className="counter-action decrement" 
            // onClick={() => props.onChange(-1)}
            > - </button>
            
            <button 
            className="counter-action decrement" 
            // onClick={() => props.onChange(1)}
            > + </button>  
        </div>
    )
}

export default Counter;

Counter.propTypes = {
    // onChange: React.PropTypes.func.isRequired,
    // score: React.PropTypes.number.isRequired,
};