import React, { useState } from 'react'
import '../styles/projectCard.css'

export const ProjectCard = ({ backgroundColor, description, image, siteURL, sourceURL}) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <div 
        className="column is-centered project-container is-12-mobile is-half-tablet is-half-desktop" 
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        style={{backgroundColor}}>
        <figure className={hovered ? 'image figure-container logo-height' : 'image figure-container'}>
            <img 
                className={hovered ? 'project-img blur-filter' : 'project-img'} 
                src={image} 
                alt="Project logo"
            />
        </figure>
        {hovered ? 
        <div className="project-description-container">
        <div 
            id="project-description" 
            className="project-description"
        >
            {description}
        </div>
            <div className="project-links">
            {siteURL ? <div className="project-link button is-small is-rounded is-info">
                    <a href={siteURL} 
                       target="blank"
                    >
                        SITE
                    </a> 
                </div> : ''}
                <div className="project-link button is-small is-rounded is-info">
                    <a 
                        href={sourceURL} 
                        target="blank"
                    >
                        SOURCE
                    </a>
                </div>
            </div>
        </div> 
        : ''}
    </div>   
  )
}
