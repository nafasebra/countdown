import React, { useState } from 'react'

import Textbox from './component/Textbox';

function App() {

    const [isSetTime, setIsSetTime] = useState(false);
    const [stateTrue, setStateTrue] = useState(false);

    let goToTimeHandler = () => setIsSetTime(true);

    return (
        <div className="app-container">
            {
                !isSetTime ?
                    <Textbox clickHandler={goToTimeHandler} />
                :
                <div>
                    <h1>hello world :)</h1>
                    <button onClick={() => setStateTrue(!stateTrue)}>
                        {stateTrue.toString()}
                    </button>
                </div>
            }
        </div>
    )
}

export default App
