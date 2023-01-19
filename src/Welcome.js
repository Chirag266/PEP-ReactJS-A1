// write code for Welcome component here
import React from 'react';

const Welcome = ({name, isSubmit}) => {
    let sayHi = `Hey ! ${name}`;
    let greetMessage = `Welcome to LPU college.`;
    if(name.length !== 0 && isSubmit === true) {
        return (
            <div>
                <h1>{sayHi}</h1>
                <h2>{greetMessage}</h2>
                <h2>Assignment done by Chirag 12016723</h2>
            </div>
        );
    }else {
        return (
            <h2>Assignment done by Chirag 12016723</h2>
        )
    }
};

export default Welcome;
