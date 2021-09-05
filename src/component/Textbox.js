import React, { useContext, useEffect } from 'react'

import './textbox.css';

import { TimerContext } from '../context/TimeContext';

function Textbox() {

    const { setIsSetTimer, setTime, time } = useContext(TimerContext);

    const clickHandler = () => {
        if(time.hours !== 0 && time.minute !== 0 && time.second !== 0){
            setIsSetTimer(true);
        } else {
            alert('please fill the field time');
        }
    }

    const onChangeHandler = (e, unit) => {
        let regexNumber = /^[0-9]*$/;
        if(e.target.value.match(regexNumber))
            setTime({...time, [unit]: e.target.value})
    }

    return (
        <div className="input-container">
            <div className="time__input">
                <input 
                    type="text" 
                    className="hour__input"
                    maxLength="2"
                    placeholder="00"
                    value={time.hours}
                    onChange={(e) => onChangeHandler(e, "hours")}
                />
                <p>:</p>
                <input 
                    type="text" 
                    className="minute__input"
                    maxLength="2"
                    placeholder="00"
                    value={time.minute}
                    onChange={(e) => onChangeHandler(e, "minute")}
                />
                <p>:</p>
                <input 
                    type="text" 
                    className="second__input"
                    maxLength="2"
                    placeholder="00"
                    value={time.second}
                    onChange={(e) => onChangeHandler(e, "second")}
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
