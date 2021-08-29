import React, { useContext } from 'react'

import './textbox.css';

import { TimerContext } from '../context/TimeContext';


function Textbox() {

    const { setIsSetTimer } = useContext(TimerContext);

    const clickHandler = () => setIsSetTimer(true);

    return (
        <div className="input-container">
            <input 
                type="text" 
                className="time__input"
                maxLength="8"
                placeholder="00:00:00"
            />
            <button 
                className="start__button"
                onClick={() => clickHandler()}
            >
                Go to time 
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
        </div>
    )
}

export default Textbox
