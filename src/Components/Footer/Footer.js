import React, { forwardRef, useState, useRef, useEffect } from "react";
import './Footer.css';
import {
    AiFillGithub,
    AiFillInstagram,
    AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "../Button/Button";
import Center from "../Center/Center";
import Contact from "../Contact/Contact";
import vector from '../../assets/images/footerVector.png';

const Footer = forwardRef((props, ref) => {

    const [footerWrapHeight, setFooterWrapHeight] = useState('0');
    const footerWrapRef = useRef(null);

    useEffect(() => {
        const updateFooterWrapHwight = () => {
            if (footerWrapRef.current) {
                setFooterWrapHeight(footerWrapRef.current.offsetHeight);
            }
        }
        updateFooterWrapHwight();
        window.addEventListener('resize', updateFooterWrapHwight);

        return () => {
            window.addEventListener('resize', updateFooterWrapHwight);
        };
    }, [footerWrapRef]);

    return (
        <Center>
            <div ref={ref}>
                <Contact />
            </div>
            <div className="footer_wrap" ref={footerWrapRef}>
                <div className="icons">
                    <span>
                        <Button isIcon link='https://www.linkedin.com/in/jayasurya4899/'>
                            <FaLinkedinIn className='icon' />
                        </Button>
                    </span>
                    <span>
                        <Button isIcon link='https://github.com/surya489'>
                            <AiFillGithub className='icon' />
                        </Button>
                    </span>
                    <span>
                        <Button isIcon link='https://www.instagram.com/mr_inocnt/'>
                            <AiFillInstagram className='icon' />
                        </Button>
                    </span>
                    <span>
                        <Button isIcon link='mailto:suryajaya4899@gmail.com'>
                            <AiOutlineMail className='icon' />
                        </Button>
                    </span>
                </div>
                <div className="copy_rights_wrap">
                    <p className='copyright'>
                        <span className="Nunito f_14">Designed & Built by jayasurya © Copyright {new Date().getFullYear()}</span>
                    </p>
                </div>
            </div>
            <div className="footer_img" style={{ bottom: -(footerWrapHeight + 20) }}>
                <img src={vector} alt="" />
            </div>
        </Center>
    );
});

export default Footer;