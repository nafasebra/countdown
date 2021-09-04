import React, { useContext, useEffect, useState } from 'react'
import { TimerContext } from '../context/TimeContext';

import './timer.css'


function Timer() {

    const [playStatus, setPlayStatus] = useState(true);

    const { time, setTime, setIsSetTimer } = useContext(TimerContext);

    useEffect(() => {
        let timeOut = null;

        if(playStatus){
            timeOut = setTimeout(() => {
                if(time.second > 0){
                    setTime({
                        ...time,
                        second: time.second - 1
                    })
                } 
                else if(time.second === 0 && time.minute > 0) {
                    setTime({
                        ...time,
                        minute: time.minute - 1,
                        second: 59
                    })
                } else if(time.second === 0 && time.minute === 0 && time.hours > 0){
                    setTime({
                        hours: time.hours - 1,
                        minute: 59,
                        second: 59
                    })
                } else {
                    alert('Time out!');
                }
            }, 1000)
        } else {
            clearTimeout(timeOut);
        }

        return () => clearTimeout(timeOut)
    })


    return (
        <div className="timer-container">
            <div className="timer">
                <p className="hour">
                    {time.hours.toString().length === 1 ? "0" + time.hours : time.hours}
                </p>
                <p>:</p>
                <p className="minute">
                    {time.minute.toString().length === 1 ? "0" + time.minute : time.minute}
                </p>
                <p>:</p>
                <p className="second">
                    {time.second.toString().length === 1 ? "0" + time.second : time.second}
                </p>
            </div>

            <div className="time-control">
                <button 
                    className="play__button"
                    onClick={() => setPlayStatus(!playStatus)}    
                >
                    {
                        playStatus ?
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                        :
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                    }
                    
                </button>

                <button 
                    className="resume__button"
                    onClick={() => {
                        setTime({
                            hours: '',
                            minute: '',
                            second: ''
                        })
                        setIsSetTimer(false)
                    }}
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" /></svg>
                </button>
            </div>
        </div>
    )
}

export default Timer
