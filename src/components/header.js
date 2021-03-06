import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
  <div className="HeaderGroup">
    <Link to="/"><img width="30" src={require('../images/alphabet.svg')} /></Link>
    <Link to="/courses">Courses</Link>
    <Link to="/downloads">Resume</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact"><button>Contact</button></Link>
  </div>
</div>
)

export default Header
