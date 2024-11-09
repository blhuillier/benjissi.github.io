import React from "react"
import "./GroupMember.css"
import placeholderImage from "../images/placeholder.jpeg" // Placeholder image for members without a photo

const GroupMember = ({ name, role, startDate, description, photo }) => (
  <div className="group-member">
    <img src={photo || placeholderImage} alt={`${name}'s photo`} className="member-photo" />
    <div className="member-info">
      <h3>{name}</h3>
      <p>{role} ({startDate})</p>
      {description && <p>{description}</p>}
    </div>
  </div>
)

export default GroupMember
