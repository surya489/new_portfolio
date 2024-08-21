import React, { useState, useEffect, useRef } from "react";

import './NavBar.css';

import Center from "../Center/Center";
import Projects from "../Projects/Projects";
import Hero from "../Hero/Hero";

const NavBar = () => {

    const [isSticky, setIsSticky] = useState(false);
    const projectsRef = useRef(null);
    const pageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToProjects = () => {
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        pageRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
                <Center noPaddingY>
                    <div className="nav_wrap Comfortaa">
                        <div className="logo_text">
                            <a href="#home" onClick={scrollToTop}>Jaya Surya</a>
                        </div>
                        <ul className="menu_items">
                            <li className="menu_item">
                                <a href="/" className="">About</a>
                            </li>
                            <li className="menu_item">
                                <a href="#projects" className="" onClick={scrollToProjects}>Projects</a>
                            </li>
                            <li className="menu_item">
                                <a href="/" className="">Contact</a>
                            </li>
                        </ul>
                    </div>
                </Center>
            </div>
            <Hero ref={pageRef} jobTitle="Front-end Developer" name='Jaya Surya' />
            <Projects ref={projectsRef} />
        </>
    );
}

export default NavBar;