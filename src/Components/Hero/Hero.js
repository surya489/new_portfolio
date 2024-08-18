import React from "react";

import './Hero.css';
import Center from "../Center/Center";
import Button from "../Button/Button";

const Hero = ({ jobTitle, name }) => {
    return (
        <Center>
            <div className="hero_wrap">
                <div className="left col_50">
                    <div className="job_title f_16 mb_10 Nunito primary">{jobTitle}</div>
                    <h1 className="intro mb_20 PlayfairDisplayBold">
                        <span>Hello, my name</span><br />
                        <span>is <span className="primary">{name}</span></span>
                    </h1>
                    <div className="description f_20 mb_20 Nunito">
                        I'm a Front-end Developer passionate about designing user-friendly interfaces and responsive layouts. I love solving complex problems and am always eager to learn new technologies.
                    </div>
                    <div className="btn_wrap">
                        <Button isPrimary isLink link='/'>Projects</Button>
                        <Button isLink link='https://www.linkedin.com/in/jayasurya4899/'>Linkedin</Button>
                    </div>
                </div>
                <div className="right col_50">
                    <div class="curve"></div>
                </div>
            </div>
        </Center>
    )
}

export default Hero;