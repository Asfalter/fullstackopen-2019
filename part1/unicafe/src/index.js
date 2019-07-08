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

const Statistics = (props) => {
    return (
        <div>
            <h1>Statistics</h1>
            <p>
                Good: {props.good}
            </p>
            <p>
                Neutral: {props.neutral}
            </p>
            <p>
                Bad: {props.bad}
            </p>
        </div>
    )
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Header title="Give us feedback" />
            <Button action={() => setGood(good + 1)} name="Good" />
            <Button action={() => setNeutral(neutral + 1)} name="Neutral" />
            <Button action={() => setBad(bad + 1)} name="Bad" />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)