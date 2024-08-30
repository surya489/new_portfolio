import React from "react";
import Typewriter from "typewriter-effect";

import './TypeWriterText.css';

const TypeWriterText = ({ textOne, textTwo, textThree }) => {
    return (
        <Typewriter
            options={{
                strings: [
                    textOne, textTwo, textThree
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 100,
                delay: 100,
                pauseFor: 2000
            }}
        />
    )
}

export default TypeWriterText;