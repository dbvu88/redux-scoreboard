import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => {
    return (
        <div className="counter">
            <button 
            className="counter-action decrement" 
            onClick={() => props.updatePlayerScore(props.playerIndex, -1)}
            > - </button>
            {props.score}
            <button 
            className="counter-action decrement" 
            onClick={() => props.updatePlayerScore(props.playerIndex, 1)}
            > + </button>  
        </div>
    )
}

export default Counter;

Counter.propTypes = {
    playerIndex: PropTypes.number.isRequired,
    updatePlayerScore: PropTypes.func.isRequired,
    score: PropTypes.number.isRequired,
};