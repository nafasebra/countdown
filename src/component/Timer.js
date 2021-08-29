import React, { useState } from 'react'

function Timer() {

    const [stateTrue, setStateTrue] = useState(false);

    return (
        <div className="timer-container">
            <div className="timer">
                <p className="hour"></p>
                <span>:</span>
                
            </div>
            <button onClick={() => setStateTrue(!stateTrue)}>
                {stateTrue.toString()}
            </button>
        </div>
    )
}

export default Timer
