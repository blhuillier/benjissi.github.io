import React from "react"
import "./SummaryFrame.css"

const SummaryFrame = ({ title, summary }) => (
  <div className="summary-frame">
    <h2>{title}</h2>
    <p>{summary}</p>
  </div>
)

export default SummaryFrame
