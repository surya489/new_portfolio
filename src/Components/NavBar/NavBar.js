import React from "react";

import './NavBar.css';

import Center from "../Center/Center";

const NavBar = () => {
    return (
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
    )
}

export default NavBar;