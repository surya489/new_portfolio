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
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);  // Track window width
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

    // Update the window width on resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const updateFooterWrapHeight = () => {
            if (navbarRef.current) {
                setHeaderHeight(navbarRef.current.offsetHeight);
            }
        };
        updateFooterWrapHeight();
        window.addEventListener('resize', updateFooterWrapHeight);

        return () => {
            window.removeEventListener('resize', updateFooterWrapHeight);
        };
    }, [navbarRef]);

    // Update body class when isMobileMenu changes
    useEffect(() => {
        if (isMobileMenu) {
            document.body.classList.add('open');
        } else {
            document.body.classList.remove('open');
        }

        // Cleanup to remove class on component unmount
        return () => {
            document.body.classList.remove('open');
        };
    }, [isMobileMenu]);

    const sectionScroll = (ref, isHome = false) => {
        const navbar = document.querySelector('.navbar .nav_wrap');
        const navbarHeight = navbar.offsetHeight;

        const top = isHome ? 0 : ref.current.getBoundingClientRect().top + window.scrollY - navbarHeight;
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
                            sectionScroll(pageRef, true);
                            setIsMobileMenu(false);
                        }}>
                            Jaya Surya
                        </div>
                        {windowWidth > 900 ? (
                            <ul className="menu_items">
                                <li className="menu_item">
                                    <div onClick={() => {
                                        sectionScroll(aboutRef);
                                        setIsMobileMenu(false);
                                    }}>About</div>
                                </li>
                                <li className="menu_item">
                                    <div onClick={() => {
                                        sectionScroll(projectsRef);
                                        setIsMobileMenu(false);
                                    }}>Projects</div>
                                </li>
                                <li className="menu_item">
                                    <div onClick={() => {
                                        sectionScroll(footerRef);
                                        setIsMobileMenu(false);
                                    }}>Contact</div>
                                </li>
                            </ul>
                        ) : (
                            <div className={`menu_items ${isMobileMenu ? 'active' : ''}`}>
                                <ul className="menu_items_wrap">
                                    <li className="menu_item">
                                        <div onClick={() => {
                                            sectionScroll(aboutRef);
                                            setIsMobileMenu(false);
                                        }}>About</div>
                                    </li>
                                    <li className="menu_item">
                                        <div onClick={() => {
                                            sectionScroll(projectsRef);
                                            setIsMobileMenu(false);
                                        }}>Projects</div>
                                    </li>
                                    <li className="menu_item">
                                        <div onClick={() => {
                                            sectionScroll(footerRef);
                                            setIsMobileMenu(false);
                                        }}>Contact</div>
                                    </li>
                                </ul>
                            </div>
                        )}
                        <div className={`mobile_menu ${isMobileMenu ? 'active' : ''}`} onClick={openMenu}>
                            <span className="line"></span>
                        </div>
                    </div>
                </Center>
            </div>
            <Hero headerHeight={headerHeight} ref={pageRef} jobTitle="Front-end Developer" name="Jaya Surya" />
            <About ref={aboutRef} />
            <Projects ref={projectsRef} />
            <Footer ref={footerRef} />
        </>
    );
};

export default NavBar;
