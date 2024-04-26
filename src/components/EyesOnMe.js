// Code EyesOnMe Component Here

import React, { useState, useEffect } from 'react';

function EyesOnMe (){
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
        console.log('Good!');
    };

    const handleBlur = () => {
        setIsFocused(false);
        console.log('Hey! Eyes on me!');
    };

    useEffect(() => {
        const handleFocusEvent = (event) => {
            if (event.target === document.getElementById('eyes-button')) {
                handleFocus();
            }
        };

        const handleBlurEvent = (event) => {
            if (event.target === document.getElementById('eyes-button')) {
                handleBlur();
            }
        };

        document.getElementById('eyes-button').addEventListener('focus', handleFocusEvent);
        document.getElementById('eyes-button').addEventListener('blur', handleBlurEvent);

        return () => {
            document.getElementById('eyes-button').removeEventListener('focus', handleFocusEvent);
            document.getElementById('eyes-button').removeEventListener('blur', handleBlurEvent);
        };
    }, []);

    return (
        <div>
            <button id="eyes-button" onClick={() => console.log('Clicked!')}>
                Eyes on me
            </button>
        </div>
    )
}

export default EyesOnMe;