import React, { forwardRef } from "react";

import './About.css';
import Center from "../Center/Center";
import SecTitle from "../SecTitle/SecTitle"; // A Glimpse into Me

const About = forwardRef((props, ref) => {

    const text = [
        {
            text: "Hi, I'm Jaya Surya, a web developer with a passion for creating beautiful, functional, and user-centered digital experiences. I am always looking for new and innovative ways to bring my client's visions to life."
        },
        {
            text: "I believe that design is about more than just making things look pretty - it's about solving problems and creating intuitive, enjoyable experiences for users."
        },
        {
            text: "While I'm working on a website, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project."
        }
    ]

    return (
        <Center>
            <div className="pb_30" ref={ref}>
                <SecTitle tag="h2">A Glimpse into Me</SecTitle>
            </div>
            <div className="biography">
                {text.map((item, index) => {
                    return (
                        <div className="biography_text Nunito f_20">{item.text}</div>
                    )
                })}
            </div>
        </Center>
    )
})

export default About;