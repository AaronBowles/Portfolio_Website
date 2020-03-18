import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/navBar';
import Intro from './components/intro/intro';
import AboutMe from './components/aboutMe/aboutMe';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Connect from './components/connect/connect';


class App extends Component{
  render () {

    return(
    <div>
      <NavBar />
      <Intro />
      <AboutMe />
      <Skills />
      <Projects />
      <Connect />
    </div>
    )
  }
};


export default App;
