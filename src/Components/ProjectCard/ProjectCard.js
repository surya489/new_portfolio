import React, { useState } from "react";
import './ProjectCard.css';
import Button from "../Button/Button";
import Popup from "../Popup/Popup";

const ProjectCard = ({ projects }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openPopup = (imageSrc) => {
        setSelectedImage(imageSrc);
        setIsPopupOpen(true);
        window.scrollTo(0, 0);
        document.querySelector('.App').classList.add('stopScroll');
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedImage('');
        document.querySelector('.App').classList.remove('stopScroll');
    };

    return (
        <div className="card_wrap gap_20">
            {projects.map((project, index) => (
                <div className="project_card" key={index}>
                    <Button hasOverlay>
                        <div className="bg_overlay"></div>
                        <div className="project_details">
                            <div className="project_content">
                                <div className="project_name Comfortaa">{project.name}</div>
                                <p className="project_desc Nunito">{project.desc}</p>
                                <Button
                                    isPrimary
                                    isPopup
                                    openPopup={() => openPopup(project.src)}
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
            <Popup src={selectedImage} className={`${isPopupOpen ? 'open' : 'close'}`} closePopup={closePopup} />
        </div>
    );
};

export default ProjectCard;
