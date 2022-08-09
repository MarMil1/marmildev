import React, { useState } from 'react'
import '../styles/projects.css'
import projectData from '../data/projectData.js'
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleProjects = () => setIsOpen(!isOpen);

  const getRenderedProjects = () => {
    if (isOpen) {
      return projectData;
    }
    return projectData.slice(0, 6);
  }

  return (
    <section 
            id="projects" 
            className="projects section is-large is-white has-text-centered padding-adjust"
    >
        <div className="container is-narrow projects-container">
          <div className="work-title">
            Projects
          </div>
          <div className="projects-content">
            <div className="columns is-centered is-multiline is-mobile">
                {getRenderedProjects().map((project) => (
                  <ProjectCard key={project.id} 
                               backgroundColor={project.backgroundColor}
                               description={project.description}
                               image={project.image}
                               siteURL={project.siteURL}
                               sourceURL={project.sourceURL}
                  >
                  </ProjectCard>
                  )
                )}
            </div>
          </div>
          <button 
                  className="button see-btn is-info is-rounded" 
                  onClick={toggleProjects}
          >
            {isOpen ? 'View Less Projects' : 'View More Projects'}
          </button>
        </div>
    </section>
  )
}
