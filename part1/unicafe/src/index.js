import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
            <h1>
                {props.title}
            </h1>
        </div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.action}>{props.name}</button>
    )
}

//Check if feedback has been given
const History = (props) => {
    if (props.all === 0) {
        return (
            <p>No feedback given</p>
        )
    }

    return (
        <div>
            <Statistics array={props.array} />
        </div>
    )
}

const Statistic = (props) => {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}

const Statistics = (props) => {
    return (
        <div>
            <h1>Statistics</h1>
            <table>
                <tbody>
                    <Statistic text="Good" value={props.array[0]} />
                    <Statistic text="Neutral" value={props.array[1]} />
                    <Statistic text="Bad" value={props.array[2]} />
                    <Statistic text="All" value={props.array[3]} />
                    <Statistic text="Average" value={props.array[4]} />
                    <Statistic text="Positive" value={props.array[5]} />
                </tbody>
            </table>
        </div>
    )
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const all = good + neutral + bad
    const average = ((good - bad) / all).toFixed(1)
    const positive = ((good / all) * 100).toFixed(1) + '%'
    const statisticsArray = [good, neutral, bad, all, average, positive]

    return (
        <div>
            <Header title="Give us feedback" />
            <Button action={() => setGood(good + 1)} name="Good" />
            <Button action={() => setNeutral(neutral + 1)} name="Neutral" />
            <Button action={() => setBad(bad + 1)} name="Bad" />
            <History all={all} array={statisticsArray} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)