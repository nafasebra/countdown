import React, { useState } from 'react'

import Textbox from './component/Textbox';
import Timer from './component/Timer';

function App() {

    const [isSetTime, setIsSetTime] = useState(false);

    let goToTimeHandler = () => setIsSetTime(true);

    return (
        <div className="app-container">
            {
                !isSetTime ?
                    <Textbox clickHandler={goToTimeHandler} />
                :
                <Timer />
            }
        </div>
    )
}

export default App
