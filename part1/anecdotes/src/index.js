import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { updateExpression } from '@babel/types';

const Button = (props) => {
    return (
        <button onClick={props.action}>{props.name}</button>
    )
}

//Random number from 0 to the length of the anecdotes array
const Random = (props) => {
    return (
        Math.floor(Math.random() * props.length)
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votesNumber, setVotes] = useState([0, 0, 0, 0, 0, 0])
    const anecdotes = props.anecdotes

    const UpdateAnecdote = () => {
        setSelected(Random(anecdotes))
    }

    const UpdateVotes = () => {
        let newVotes = [...votesNumber]
        newVotes[selected] += 1
        setVotes(newVotes)
    }

    console.log(selected)
    console.log(votesNumber)
    return (
        <div>
            <p>{anecdotes[selected]}</p>
            <p>Has {votesNumber[selected]} votes.</p>
            <Button action={() => UpdateAnecdote()} name={"Next anecdote"} />
            <Button action={() => UpdateVotes()} name={"Vote"} />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)