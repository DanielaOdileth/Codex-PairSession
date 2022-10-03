import React, { useState } from 'react';

export default function Homepage() {
const [showMessage, setShowMessage] = useState(false);

    
    return (
        <div>
            <h1>Welcome to the new app</h1>
            <p>ClicK on the button to display the meesage</p>
            <button onClick={() => setShowMessage(!showMessage)}>ClicK me </button>
            {showMessage && <p>You are cool :D</p>}
        </div>
    )
}