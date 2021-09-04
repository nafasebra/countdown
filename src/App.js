import React, { useState } from 'react'

import Textbox from './component/Textbox';
import Timer from './component/Timer';

import { TimerContext } from './context/TimeContext';


function App() {

    const [ time, setTime ] = useState({
        second: '',
        minute: '',
        hours: ''
    });

    const [ isSetTimer, setIsSetTimer ] = useState(false);

    return (
        <TimerContext.Provider value={{
            time,
            isSetTimer,
            setTime,
            setIsSetTimer
        }}>
            <h1 className="app-name">Countdown</h1>
            <div className="app-container">
                {
                    isSetTimer === false ?
                        <Textbox />
                    :
                    <Timer />
                }
            </div>
        </TimerContext.Provider>
    )
}

export default App
