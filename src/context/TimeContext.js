import React, { useState } from 'react';

export const TimerContext = React.createContext({
    time: {
        second: 0,
        minute: 0,
        hours: 0
    },
    isSetTimer: false,
    setTime: () => {},
    setIsSetTimer: () => {}
}); 