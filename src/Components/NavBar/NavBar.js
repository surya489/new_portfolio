import React, { useState, useEffect, useRef } from "react";

import './NavBar.css';

import Center from "../Center/Center";
import Projects from "../Projects/Projects";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";

const NavBar = () => {

    const [isSticky, setIsSticky] = useState(false);
    const projectsRef = useRef(null);
    const pageRef = useRef(null);
    const FooterReg = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const sectionScroll = (ref, isHome) => {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const top = isHome
            ? ref.current.getBoundingClientRect().top + window.scrollY - navbarHeight - isHome
            : ref.current.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: 'smooth' });
    }

    return (
        <>
            <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
                <Center noPaddingY>
                    <div className="nav_wrap Comfortaa">
                        <div className="logo_text">
                            <a href="#home" onClick={() => sectionScroll(pageRef, '40')}>Jaya Surya</a>
                        </div>
                        <ul className="menu_items">
                            <li className="menu_item">
                                <a href="/" className="">About</a>
                            </li>
                            <li className="menu_item">
                                <a href="#projects" className="" onClick={() => sectionScroll(projectsRef)}>Projects</a>
                            </li>
                            <li className="menu_item">
                                <a href="#contact" onClick={() => sectionScroll(FooterReg)} className="">Contact</a>
                            </li>
                        </ul>
                    </div>
                </Center>
            </div>
            <Hero ref={pageRef} jobTitle="Front-end Developer" name='Jaya Surya' />
            <Projects ref={projectsRef} />
            <Footer ref={FooterReg} />
        </>
    );
}

export default NavBar;