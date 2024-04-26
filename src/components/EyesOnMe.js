// Code EyesOnMe Component Here

import React, { useState, useEffect } from 'react';
//this is the EyesOnMe Component
//it tracks whether the user's focus is on the "Eyes on me" button.
// then returns a React component that renders a button with the text "Eyes on me".
 
function EyesOnMe (){
    //sets the state of isFocused to true when the button is focused
    //sets the state of isFocused to false when the button is not focused
    const [isFocused, setIsFocused] = useState(false);

   //handles the focus event on the button
    const handleFocus = () => {
        setIsFocused(true);
        console.log('Good!');
    };

    //handles the 'blur' event on the button.
    const handleBlur = () => {
        setIsFocused(false);
        console.log('Hey! Eyes on me!');
    };
    //a react hook that runs after the first render
    //adds event listeners for the 'focus' and 'blur' events on the button. 
    useEffect(() => {
        const handleFocusEvent = (event) => {
            if (event.target === document.getElementById('eyesButton')) {
                handleFocus();
            }
        };

        const handleBlurEvent = (event) => {
            if (event.target === document.getElementById('eyesButton')) {
                handleBlur();
            }
        };

        document.getElementById('eyesButton').addEventListener('focus', handleFocusEvent);
        document.getElementById('eyesButton').addEventListener('blur', handleBlurEvent);

        return () => {
            document.getElementById('eyesButton').removeEventListener('focus', handleFocusEvent);
            document.getElementById('eyesButton').removeEventListener('blur', handleBlurEvent);
        };
    }, []);

    return (
        <div>
            <button id="eyesButton" onClick={() => console.log('Clicked!')}>
                Eyes on me
            </button>
        </div>
    )
}

export default EyesOnMe;