import React, { forwardRef } from "react";
import "./Projects.css";
import Center from "../Center/Center";
import SecTitle from "../SecTitle/SecTitle";
import ProjectCard from '../ProjectCard/ProjectCard';

// Images
import youtubeClone from '../../assets/images/YouTube-Clone.png';
import fitnessGuide from '../../assets/images/Fitness-Guide.png';
import eCommercerCarousel from '../../assets/images/E-commerce-Carousel.png';
import eCommercePage from '../../assets/images/E-Commerce-Page.png';
import toolTip from '../../assets/images/Tooltip.png';
import blogPage from '../../assets/images/Vite-React.png';
import datePicker from '../../assets/images/Date-Picker.png';
import elicap from '../../assets/images/Elicap.png';
import writo from '../../assets/images/writo.png';
import urbanWolv from '../../assets/images/urbanwolv_home.png';
import parallaxOne from '../../assets/images/parallax_1.png';

const Projects = forwardRef((props, ref) => {
    const projects = [
        {
            name: 'Product Layout',
            desc: 'This project is a sleek and modern e-commerce product layout built using React.js, HTML, and CSS. The website features a clean and user-friendly interface that allows customers to browse through products effortlessly.',
            link: 'https://ecommerce-carousel.netlify.app/',
            src: eCommercerCarousel,
            CreateUsing: [
                "Test",
                "Test"
            ]
        },
        {
            name: 'Youtube Clone',
            desc: 'This YouTube Clone is a web application built using React.js, mimicking the core functionalities and design of YouTube. The project showcases a video streaming platform where users can explore different categories and watch videos, providing an intuitive and seamless browsing experience.',
            link: 'https://surya-youtube-clone.netlify.app/',
            src: youtubeClone
        },
        {
            name: 'Fitness Guide',
            desc: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
            link: 'https://bright-croissant-8a96cd.netlify.app/',
            src: fitnessGuide
        },
        {
            name: 'E-Commerce Site',
            desc: 'This E-Commerce site is a static website designed and developed using HTML, CSS, and JavaScript. The project serves as a showcase of a modern online store, offering users a clean and visually appealing interface for exploring and purchasing products.',
            link: 'https://cara-designs.netlify.app/',
            src: eCommercePage
        },
        {
            name: 'Date Picker',
            desc: 'This site was built using React and features a custom Date Picker component that allows users to set reminders on specific dates. The Date Picker is designed to enhance productivity by enabling users to manage important dates and tasks effectively',
            link: 'https://date-picker-add-reminder.netlify.app/',
            src: datePicker
        },
        {
            name: 'Blog Page',
            desc: 'This blog page is created using React. It serves as a platform for sharing articles, ideas, and insights. The site is designed to be user-friendly, with a focus on readability and smooth navigation.',
            link: '/',
            src: blogPage
        },
        {
            name: 'Tool-Tip Layout',
            desc: 'This is a UI layout for tool-tips, created using React and React components. It enhances user interaction by providing informative hover-over elements in a clean and responsive design.',
            link: 'https://tooltip-landing-page.netlify.app/',
            src: toolTip
        },
        {
            name: 'Elicap',
            desc: 'Elicap is a static website created using only HTML and CSS. It showcases a clean and straightforward design, focusing on delivering content efficiently without the need for dynamic elements.',
            link: 'https://elicap.netlify.app/',
            src: elicap
        },
        {
            name: 'SignUp / SignIn Form',
            desc: 'This project is a full-stack user registration application designed to provide a seamless and secure user authentication experience. The primary functionality of this application is to allow users to register via a signup form and receive a One-Time Password (OTP) for email verification. This project utilizes modern web development technologies, including a backend built with Node.js and Express, a frontend developed with React, and a MongoDB database for data storage. By implementing secure email verification and session management, this project aims to provide a robust foundation for user authentication in web applications.',
            link: 'https://assessment-writo-education-ui.vercel.app/',
            src: writo
        },
        {
            name: 'Urban Wolv',
            desc: "Urban Wolv is a dynamic, fashion-forward online clothing store built using WordPress and Elementor. The website offers a seamless shopping experience, showcasing a wide range of trendy and high-quality apparel for both men and women. With a focus on urban-inspired fashion, Urban Wolv brings the latest clothing styles directly to your wardrobe. From casual streetwear to chic office outfits, this site caters to all your fashion needs. Explore the collections, enjoy easy navigation, and shop with confidence as you find the perfect pieces to elevate your style.",
            link: 'https://urbanwolv.com/',
            src: urbanWolv
        },
        {
            name: 'Parallax Website',
            desc: 'Parallax Website is a visually engaging site built using HTML, CSS, and JavaScript. The hero section features a smooth parallax animation that adds depth and motion, creating an immersive user experience. Below the hero section, the content is filled with placeholder text to demonstrate layout and structure.',
            link: 'https://parallaxone.netlify.app/',
            src: parallaxOne
        }
    ]
    return (
        <Center>
            <div className="pb_30" ref={ref}>
                <SecTitle tag="h2">My Creative Endeavors</SecTitle>
            </div>
            <ProjectCard projects={projects} />
        </Center>
    );
});

export default Projects;