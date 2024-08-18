import React, { useState, useEffect } from "react";

import './NavBar.css';

import Center from "../Center/Center";

const NavBar = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return window.addEventListener('scroll', handleScroll);

    }, []);

    return (
        <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <Center noPaddingY>
                <div className="nav_wrap">
                    <div className="logo_text">
                        <a href="/">Jaya Surya</a>
                    </div>
                    <ul className="menu_items">
                        <li className="menu_item">
                            <a href="/" className="">About</a>
                        </li>
                        <li className="menu_item">
                            <a href="/" className="">Projects</a>
                        </li>
                        <li className="menu_item">
                            <a href="/" className="">Contact</a>
                        </li>
                    </ul>
                </div>
            </Center>
        </div>
    )
}

export default NavBar;