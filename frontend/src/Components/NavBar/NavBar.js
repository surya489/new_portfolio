import React, { useState, useEffect, useRef } from "react";
import './NavBar.css';
import Center from "../Center/Center";
import Projects from "../Projects/Projects";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import About from '../About/About';

const NavBar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const projectsRef = useRef(null);
    const pageRef = useRef(null);
    const footerRef = useRef(null);
    const aboutRef = useRef(null);
    const navbarRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState('0');

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const updateFooterWrapHwight = () => {
            if (navbarRef.current) {
                setHeaderHeight(navbarRef.current.offsetHeight);
            }
        }
        updateFooterWrapHwight();
        window.addEventListener('resize', updateFooterWrapHwight);

        return () => {
            window.addEventListener('resize', updateFooterWrapHwight);
        };
    }, [navbarRef]);

    const sectionScroll = (ref, isHome = false) => {
        const navbar = document.querySelector('.navbar .nav_wrap');
        const navbarHeight = navbar.offsetHeight;

        const top = isHome ? 0 : ref.current.getBoundingClientRect().top + window.scrollY - navbarHeight;
        console.log(top);
        window.scrollTo({ top, behavior: 'smooth' });
    };

    const openMenu = () => {
        setIsMobileMenu(!isMobileMenu);
    };

    return (
        <>
            <div className={`navbar ${isSticky || isMobileMenu ? 'sticky' : ''}`} ref={navbarRef}>
                <Center noPaddingY>
                    <div className="nav_wrap Comfortaa">
                        <div className="logo_text" onClick={() => {
                            sectionScroll(pageRef, true)
                            setIsMobileMenu(false)
                        }}>Jaya Surya</div>
                        <ul className={`menu_items ${isMobileMenu ? 'active' : ''}`}>
                            <li className="menu_item">
                                <div onClick={() => {
                                    sectionScroll(aboutRef)
                                    setIsMobileMenu(false)
                                }}>About</div>
                            </li>
                            <li className="menu_item">
                                <div onClick={() => {
                                    sectionScroll(projectsRef)
                                    setIsMobileMenu(false)
                                }}>Projects</div>
                            </li>
                            <li className="menu_item">
                                <div onClick={() => {
                                    sectionScroll(footerRef)
                                    setIsMobileMenu(false)
                                }}>Contact</div>
                            </li>
                        </ul>
                        <div className={`mobile_menu ${isMobileMenu ? 'active' : ''}`} onClick={openMenu}>
                            <span className="line"></span>
                        </div>
                    </div>
                </Center >
            </div>
            <Hero headerHeight={headerHeight} ref={pageRef} jobTitle="Front-end Developer" name='Jaya Surya' />
            <About ref={aboutRef} />
            <Projects ref={projectsRef} />
            <Footer ref={footerRef} />
        </>
    );
}

export default NavBar;
