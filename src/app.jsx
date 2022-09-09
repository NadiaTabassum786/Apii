import React from 'react'
import Nav from './Components/nav'
import Home from './Components/home'
import Project from './Components/project'
import Services from './Components/services'
export default function app() {
  return (
    <>
     <Nav/>
     <Home/>
     <Project/>
     <Services/>
    </>
  )
}
