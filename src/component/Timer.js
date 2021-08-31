import React, { useContext, useState } from 'react'
import { TimerContext } from '../context/TimeContext';

import './timer.css'


function Timer() {

    const [playStatus, setPlayStatus] = useState(true);
    const { time, setTime } = useContext(TimerContext);

    const timeOut = () => {
        if(time.second > 0){
            setTime({
                ...time,
                second: time.second - 1
            })
        } else if(time.second === 0 && time.minute > 0) {
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
    }
 
    
    playStatus ? setTimeout(timeOut, 1000) : clearTimeout(timeOut);


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
                    onClick={() => setPlayStatus(!playStatus ? true : false)}    
                >
                    {
                        playStatus ?
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="45.975px" height="45.975px" viewBox="0 0 45.975 45.975" style={{enableBackground: 'new 0 0 45.975 45.975'}} xmlSpace="preserve" fill="#ffffff">
                                <g>
                                    <g>
                                        <path d="M13.987,0c-2.762,0-5,2.239-5,5v35.975c0,2.763,2.238,5,5,5s5-2.238,5-5V5C18.987,2.238,16.75,0,13.987,0z" />
                                        <path d="M31.987,0c-2.762,0-5,2.239-5,5v35.975c0,2.762,2.238,5,5,5s5-2.238,5-5V5C36.987,2.239,34.749,0,31.987,0z" />
                                    </g>
                                </g>
                            </svg>
                        :
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 320.001 320.001" style={{enableBackground: 'new 0 0 320.001 320.001'}} xmlSpace="preserve">
                                <path d="M295.84,146.049l-256-144c-4.96-2.784-11.008-2.72-15.904,0.128C19.008,5.057,16,10.305,16,16.001v288  c0,5.696,3.008,10.944,7.936,13.824c2.496,1.44,5.28,2.176,8.064,2.176c2.688,0,5.408-0.672,7.84-2.048l256-144  c5.024-2.848,8.16-8.16,8.16-13.952S300.864,148.897,295.84,146.049z" fill="#ffffff" />
                            </svg>
                    }
                    
                </button>
            </div>
        </div>
    )
}

export default Timer
