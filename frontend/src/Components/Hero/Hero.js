import React, { forwardRef } from "react";
import './Hero.css';
import Center from "../Center/Center";
import Button from "../Button/Button";
import TypeWriterText from "../TypeWriterText/TypeWriterText";

const Hero = forwardRef(({ jobTitle, name, headerHeight }, ref) => {

    return (
        <Center className='hero_section'>
            <div className="hero_wrap" style={{ marginTop: headerHeight }} ref={ref}>
                <div className="left col_100">
                    <div className="job_title f_16 mb_10 Nunito primary">{jobTitle}</div>
                    <h1 className="intro mb_20 PlayfairDisplayBold">
                        <span>Greetings, <span className='wave'>👋 </span></span><br />
                        <span>I'm <TypeWriterText
                            textOne={`${name},`}
                            textTwo='a UI Enthusiast,'
                            textThree='an Innovative Developer.'
                        /></span>
                    </h1>
                    <div className="description f_20 mb_20 Nunito">
                        I'm a Front-end Developer passionate about designing user-friendly interfaces and responsive layouts. I love solving complex problems and am always eager to learn new technologies.
                    </div>
                    <div className="btn_wrap">
                        <Button isPrimary isLink isTarget link='https://www.linkedin.com/in/jayasurya4899/'>LinkedIn</Button>
                        <Button isLink isTarget link='https://github.com/surya489'>Git Hub</Button>
                    </div>
                </div>
                <div className="right col_40">
                    <div className="curve"></div>
                </div>
            </div>
        </Center>
    );
});

export default Hero;
