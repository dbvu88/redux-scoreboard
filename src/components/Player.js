import React from 'react';
import Counter from './Counter';

const Player = props => {
    return (
        <div className="player">
            <div className="player-name">
                <button className="remove-player" onClick={props.removePlayer}>x</button>
                {props.name}
            </div>
            <div className="player-score">
                <Counter playerIndex={props.index} updatePlayerScore={props.updatePlayerScore} score={props.score}/>
            </div>
        </div>
    )
}

export default Player;
