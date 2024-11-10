import React from "react"
import "./SectionFrame.css"

const SectionFrame = ({ title, dateRange, description, image }) => (
  <div 
    className="section-frame" 
    style={{ backgroundImage: image ? `url(${image})` : "none" }}
  >
    <div className="section-content">
      <h3>{title}</h3>
      <p className="section-dates">{dateRange}</p>
      <div>{description}</div>
    </div>
  </div>
)

export default SectionFrame
