// Code Keypad Component Here
import React from 'react';
     
//renders the keypad component
function Keypad () {    
    //handles the change event of the input field
    const handleChange = () => {
      console.log('Entering password...');
    };
  
    return (
        <div>
          <input type="password" onChange={handleChange} />
        </div>
    );
  };
  
  export default Keypad;