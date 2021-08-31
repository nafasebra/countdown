import React, { useContext } from 'react'

import './textbox.css';

import { TimerContext } from '../context/TimeContext';


function Textbox() {

    let setHours = 0, setMinute = 0, setSecond = 0;
    const { setIsSetTimer, setTime } = useContext(TimerContext);

    const clickHandler = () => {
        if(setHours !== 0 && setMinute !== 0 && setSecond !== 0){
            setTime({
                second: setSecond,
                minute: setMinute,
                hours: setHours
            });
            setIsSetTimer(true);
        } else {
            alert('please fill the field time');
        }
    }

    return (
        <div className="input-container">
            <div className="time__input">
                <input 
                    type="text" 
                    className="hour__input"
                    maxLength="2"
                    placeholder="00"
                    onChange={(e) => setHours = e.target.value}
                />
                <p>:</p>
                <input 
                    type="text" 
                    className="minute__input"
                    maxLength="2"
                    placeholder="00"
                    onChange={(e) => setMinute = e.target.value}
                />
                <p>:</p>
                <input 
                    type="text" 
                    className="second__input"
                    maxLength="2"
                    placeholder="00"
                    onChange={(e) => setSecond = e.target.value}
                />
            </div>
            <button 
                className="start__button"
                onClick={() => clickHandler()}
            >
                Go to time 
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
        </div>
    )
}

export default Textbox
