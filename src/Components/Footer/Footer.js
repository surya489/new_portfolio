import React, { forwardRef } from "react";

import './Footer.css';
import Center from "../Center/Center";
import Contact from "../Contact/Contact";
const Footer = forwardRef((props, ref) => {
    return (
        <Center>
            <div ref={ref}>
                <Contact />
            </div>
        </Center>
    );
});

export default Footer;