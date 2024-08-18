import React from "react";

import './ProjectCard.css';

import Button from "../Button/Button";

const ProjectCard = ({ projects }) => {
    return (
        <div className="card_wrap gap_20">
            {projects.map((project, index) => {
                return (
                    <div className="project_card">
                        <Button hasOverlay>
                            <div className="bg_overlay"></div>
                            <div className="project_details">
                                <div className="project_content">
                                    <div className="project_name Comfortaa">{project.name}</div>
                                    <p className="project_desc Nunito">{project.desc}</p>
                                    <Button isPrimary isLink link={project.link}>View Project</Button>
                                </div>
                            </div>
                            <div className="image_wrap">
                                {/* <img src={project.src} alt="project" /> */}
                                <div className="sizer"></div>
                                <div
                                    className="bg_image"
                                    style={{ backgroundImage: `url(${project.src})` }}
                                ></div>
                            </div>
                        </Button>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectCard;