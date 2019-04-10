import React, { Component } from 'react';
import AddPlayerForm from '../components/AddPlayerForm';
import Player from '../components/Player';
import Header from '../components/Header';
import PropTypes from 'prop-types';

// 3 connect container to react-redux
// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player'

class Scoreboard extends Component {
    static propTypes = {
        players: PropTypes.array.isRequired
    };

    render = () => {
        console.log(this.props);
        const { dispatch, players } = this.props;
        const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
        const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
        const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);
        
        const playerComponents = players.map((player, index) => (
            <Player
            index={index}
            name={player.name}
            score={player.score}
            key={player.name}
            updatePlayerScore={updatePlayerScore}
            removePlayer={() => removePlayer(index)}
            />
        ))
        return (
            <div className="scoreboard">
                <Header players={players} />
                <div className="players">
                    { playerComponents }
                </div>
                <AddPlayerForm addPlayer={addPlayer} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        players: state
    }
}

// subscribe the scoreboard data's changes to mapStateToProps
export default connect(mapStateToProps)(Scoreboard);