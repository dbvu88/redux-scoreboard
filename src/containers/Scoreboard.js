import React from 'react';
import Stopwatch from '../components/Stopwatch';
import Counter from '../components/Counter';
import Stats from '../components/Stats';
import AddPlayerForm from '../components/AddPlayerForm';
// const INITIAL_STATE = {
//     players: [
//         {
//             name: 'Jim Hoskins',
//             score: 31
//         },
//         {
//             name: 'Andrew Chalkley',
//             score: 20
//         },
//         {
//             name: 'Alena Holligan',
//             score: 50
//         }
//     ]
// }

const Scoreboard = props => {
    const players =  [
        {
            name: 'Jim Hoskins',
            score: 31
        },
        {
            name: 'Andrew Chalkley',
            score: 20
        },
        {
            name: 'Alena Holligan',
            score: 50
        }
    ]
    return (
        <div>
            <Stopwatch />
            <Stats players={players}/>
            <Counter />
            <AddPlayerForm />
        </div>
    )
}

export default Scoreboard;