import React, { useState } from "react";
import './ProjectCard.css';
import Button from "../Button/Button";
import Popup from "../Popup/Popup";

const ProjectCard = ({ projects }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [ProjectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');

    const openPopup = (imageSrc, name, desc, link) => {
        setSelectedImage(imageSrc);
        setProjectName(name);
        setDescription(desc);
        setLink(link);
        setIsPopupOpen(true);
        document.querySelector('.App').classList.add('stopScroll');
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedImage('');
        setProjectName('');
        setDescription('');
        setLink('');
        document.querySelector('.App').classList.remove('stopScroll');
    };

    return (
        <div className="card_wrap">
            {projects.map((project, index) => (
                <div className="project_card" key={index}>
                    {/* <div className="create_using">
                        {project.CreateUsing && project.CreateUsing.map((item, itemIndex) => (
                            <span key={itemIndex} className={`tech-item-${itemIndex}`}>{item}</span>
                        ))}
                    </div> */}
                    <Button hasOverlay>
                        <div className="bg_overlay"></div>
                        <div className="project_details">
                            <div className="project_content">
                                <div className="project_name Comfortaa">{project.name}</div>
                                <p className="project_desc Nunito">{project.desc}</p>
                                <Button
                                    isPrimary
                                    isPopup
                                    openPopup={() => openPopup(project.src, project.name, project.desc, project.link)}
                                >
                                    View
                                </Button>
                            </div>
                        </div>
                        <div className="image_wrap">
                            <div className="sizer"></div>
                            <div
                                className="bg_image"
                                style={{ backgroundImage: `url(${project.src})` }}
                            ></div>
                        </div>
                    </Button>
                </div>
            ))}
            <Popup src={selectedImage} projectName={ProjectName} projectdesc={description} projectLink={link} className={`${isPopupOpen ? 'open' : 'close'}`} closePopup={closePopup} />
        </div>
    );
};

export default ProjectCard;
