import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
import Center from "../Center/Center";
import Projects from "../Projects/Projects";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";

const NavBar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const projectsRef = useRef(null);
    const pageRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const sectionScroll = (ref, isHome = false) => {
        const navbar = document.querySelector('.navbar .nav_wrap');
        const navbarHeight = navbar.offsetHeight;

        const computedStyles = window.getComputedStyle(navbar);
        const paddingTop = parseFloat(computedStyles.paddingTop);
        const paddingBottom = parseFloat(computedStyles.paddingBottom);

        const extraOffset = isHome ? paddingTop + paddingBottom + 1 : 0;
        const top = ref.current.getBoundingClientRect().top + window.scrollY - navbarHeight - extraOffset;

        window.scrollTo({ top, behavior: 'smooth' });
    };

    const openMenu = () => {
        setIsMobileMenu(!isMobileMenu);
    };

    return (
        <>
            <div className={`navbar ${isSticky || isMobileMenu ? 'sticky' : ''}`}>
                <Center noPaddingY>
                    <div className="nav_wrap Comfortaa">
                        <div className="logo_text">
                            <Link to="/" onClick={() => {
                                sectionScroll(pageRef, true);
                                setIsMobileMenu(false);
                            }}>Jaya Surya</Link>
                        </div>
                        <ul className={`menu_items ${isMobileMenu ? 'active' : ''}`}>
                            <li className="menu_item">
                                <Link to="/about" onClick={() => {
                                    sectionScroll(pageRef);
                                    setIsMobileMenu(false);
                                }}>About</Link>
                            </li>
                            <li className="menu_item">
                                <a href="#projects" onClick={(e) => {
                                    e.preventDefault();
                                    sectionScroll(projectsRef);
                                    setIsMobileMenu(false);
                                }}>Projects</a>
                            </li>
                            <li className="menu_item">
                                <a href="#contact" onClick={(e) => {
                                    e.preventDefault();
                                    sectionScroll(footerRef);
                                    setIsMobileMenu(false);
                                }}>Contact</a>
                            </li>
                        </ul>
                        <div className={`mobile_menu ${isMobileMenu ? 'active' : ''}`} onClick={openMenu}>
                            <span className="line"></span>
                        </div>
                    </div>
                </Center>
            </div>
            <Hero ref={pageRef} jobTitle="Front-end Developer" name='Jaya Surya' />
            <Projects ref={projectsRef} />
            <Footer ref={footerRef} />
        </>
    );
}

export default NavBar;
