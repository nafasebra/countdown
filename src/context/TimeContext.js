import React, { useState } from 'react';

export const TimerContext = React.createContext(); 

export const TimerProvider = (group) => {
    const [time, setTime] = useState({
        second: 0,
        minute: 0,
        hours: 0
    });

    return(
        <TimerContext.Provider value={[time, setTime]}>
            { group.children }
        </TimerContext.Provider>
    )
}