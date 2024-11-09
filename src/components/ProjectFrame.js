import React from "react"
import { Link } from "gatsby"
import "./ProjectFrame.css"

const ProjectFrame = ({ title, description, image, link }) => (
  <Link to={link} className="project-frame">
    <img src={image} alt={title} className="project-image" />
    <div className="project-info">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </Link>
)

export default ProjectFrame
