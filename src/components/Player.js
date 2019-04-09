import React from 'react';
import Counter from './Counter';

const Player = props => {
    return (
        <div className="player">
            <div className="player-name">
                <button className="remove-player" onClick={props.onRemove}>x</button>
                {props.name}
            </div>
            <div className="player-score">
                <Counter onChange={props.onScoreChange} score={props.score}/>
            </div>
        </div>
    )
}

export default Player;