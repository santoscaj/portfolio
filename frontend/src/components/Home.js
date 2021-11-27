import React from 'react'
import Header from './Header'
import About from './About'
import Career from './Career'
import Education from './Education'
import Project from './Project'

const Home = ()=>(
  <>
    <Header />
    <div id="intro">
      <About />
    <Education />
    </div>
    <Project /> 
    <Career />
  </>
)

export default Home
