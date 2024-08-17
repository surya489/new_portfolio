import React from "react";

import './Hero.css';
import Center from "../Center/Center";
import Button from "../Button/Button";

const Hero = ({ jobTitle, name }) => {
    return (
        <Center>
            <div className="hero_wrap">
                <div className="left col_50">
                    <div className="job_title primary">{jobTitle}</div>
                    <div className="intro">
                        <span>Hello, my name</span><br />
                        <span>is <span className="primary">{name}</span></span>
                    </div>
                    <div className="description">
                        Short text with details about you, what you do or your professional career. You can add more information on the about page.
                    </div>
                    <div className="btn_wrap">
                        <Button isPrimary isLink link='/'>Projects</Button>
                        <Button isLink link='/'>Linkedin</Button>
                    </div>
                </div>
                <div className="right col_50"></div>
            </div>
        </Center>
    )
}

export default Hero;