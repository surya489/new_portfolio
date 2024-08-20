import React from "react";

import "./Projects.css";
import Center from "../Center/Center";
import SecTitle from "../SecTitle/SecTitle";
import ProjectCard from "../ProjectCard/ProjectCard";

// Images
import youtubeClone from '../../assets/images/YouTube-Clone.png';
import fitnessGuide from '../../assets/images/Fitness-Guide.png';
import eCommercerCarousel from '../../assets/images/E-commerce-Carousel.png';
import eCommercePage from '../../assets/images/E-Commerce-Page.png';
import toolTip from '../../assets/images/Tooltip.png';
import blogPage from '../../assets/images/Vite-React.png';
import datePicker from '../../assets/images/Date-Picker.png';
import elicap from '../../assets/images/Elicap.png';

const Projects = () => {
    const projects = [
        {
            name: 'Product Layout',
            desc: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
            link: 'https://ecommerce-carousel.netlify.app/',
            src: eCommercerCarousel,
            CreateUsing: [
                "Test",
                "Test"
            ]
        },
        {
            name: 'Youtube Clone',
            desc: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
            link: 'https://surya-youtube-clone.netlify.app/',
            src: youtubeClone
        },
        {
            name: 'Fitness Guide',
            desc: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
            link: '/',
            src: fitnessGuide
        },
        {
            name: 'E-Commerce Site',
            desc: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
            link: 'http://www.customdesign.in/',
            src: eCommercePage
        },
        {
            name: 'Date Picker',
            desc: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
            link: 'https://date-picker-add-reminder.netlify.app/',
            src: datePicker
        },
        {
            name: 'Blog Page',
            desc: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
            link: '/',
            src: blogPage
        },
        {
            name: 'Tool-Tip Layout',
            desc: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
            link: 'https://tooltip-landing-page.netlify.app/',
            src: toolTip
        },
        {
            name: 'Elicap',
            desc: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
            link: 'https://elicap.netlify.app/',
            src: elicap
        },
    ]
    return (
        <Center>
            <div className="pb_30">
                <SecTitle tag="h2">Projects</SecTitle>
            </div>
            <ProjectCard projects={projects} />
        </Center>
    )
}

export default Projects;