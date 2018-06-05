import React from 'react'
import {Link} from 'react-router-dom'

const Portfolio=()=>(
  <div>
  <h1>Profile</h1>
  <p>As a professional, I help stakeholders materialize their requirements working with them through various phases of SDLC. I have lead projects and helped my team in achieving the target following the agile methodology. As a techno-functional consultant, I contributed to the development and implementation of an SAP add-on product and have worked as a customer support consultant resolving issues within the time stipulated in the SLA.</p>
  <Link to="/portfolio/career">Career</Link>
  <Link to="/portfolio/projects">Pet Projects</Link>
  </div>
)

export default Portfolio
