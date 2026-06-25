import React from 'react'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Certificates from '../Certificates/Certificates'
import Resume from '../Resume/Resume'
import AboutMe from '../About/About'
import Contact from '../Contact/Contact'

export default function Main() {
  return (
    <div>
        <Home/>
        <Projects/>
        <Skills/>
        <Certificates/>
        <Resume/>
        <AboutMe/>
        <Contact/>
    </div>
  )
}
