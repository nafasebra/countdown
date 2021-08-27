import React, { useState } from 'react'

function App() {

    const [isSetTime, setIsSetTime] = useState(false);
    const [stateTrue, setStateTrue] = useState(false);

    return (
        <React.Fragment>
            {
                !isSetTime ?
                    <div>
                        <input type="text" />
                        <button onClick={(e) => setIsSetTime(true)}>set time!</button>
                    </div>
                :
                <div>
                    <h1>hello world :)</h1>
                    <button onClick={() => setStateTrue(!stateTrue)}>
                        {stateTrue.toString()}
                    </button>
                </div>
            }
        </React.Fragment>
    )
}

export default App
