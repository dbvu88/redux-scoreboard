import React from 'react';
import PropTypes from 'prop-types'

const Stats = props => {
    const playerCount = props.players.length;
    const totalPoints = props.players.reduce( (total, player) => { 
        return total + player.score;
    }, 0);

    return (
        <table className="stats">
        <tbody>
            <tr>
                <td>Players:</td>
                <td>{playerCount}</td>
            </tr>
            <tr>
                <td>total Points:</td>
                <td>{totalPoints}</td>
            </tr>
        </tbody>
        </table>
    )
}

export default Stats;

Stats.propTypes = {
    players: PropTypes.array.isRequired,
}