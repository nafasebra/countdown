import React, { useContext, useState } from 'react'
import { TimerContext } from '../context/TimeContext';

import './timer.css'


function Timer() {

    const { time } = useContext(TimerContext);

    return (
        <div className="timer-container">
            <div className="timer">
                <p className="hour">{time.hours}</p>
                <p>:</p>
                <p className="minute">{time.minute}</p>
                <p>:</p>
                <p className="second">{time.second}</p>
            </div>
        </div>
    )
}

export default Timer
