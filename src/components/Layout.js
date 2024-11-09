import React from "react"
import { Link } from "gatsby"
import "./layout.css" // Optional: for styling

const Layout = ({ children }) => (
  <div>
    <header>
      <nav>
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/teaching">Teaching</Link></li>
          <li><Link to="/outreach">Outreach</Link></li>
          <li><Link to="/thegroup">The Group</Link></li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </div>
)

export default Layout
