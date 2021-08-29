import React, { useState } from 'react'

function Timer() {

    const [stateTrue, setStateTrue] = useState(false);

    return (
        <div className="timer-container">
            <div className="timer">
                <p className="hour"></p>
                <p>:</p>
                <p className="minute"></p>
                <p>:</p>
                <p className="second"></p>
                <p>:</p>
            </div>
            <button onClick={() => setStateTrue(!stateTrue)}>
                {stateTrue.toString()}
            </button>
        </div>
    )
}

export default Timer
