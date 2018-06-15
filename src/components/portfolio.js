import React from 'react'
import {Link} from 'react-router-dom'

const Portfolio=()=>(
  <div>
  <h1>Profile</h1>
  <p>A bit about yourself</p>
  <Link to="/portfolio/career">Career</Link>
  <Link to="/portfolio/projects">Pet Projects</Link>
  </div>
)

export default Portfolio
