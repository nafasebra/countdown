import React, { useState } from 'react'

function App() {

    const [state, setState] = useState(false);

    console.log(state);

    return (
        <React.Fragment>
            <h1>hello world :)</h1>
            <button onClick={() => setState(!state)}>{state.toString()}</button>
        </React.Fragment>
    )
}

export default App
