import React, { Component } from "react";
import './aboutMe.css';

class AboutMe extends Component {

    render() {
        return (
          <div className="aboutMeContainer">

            <h1 className="aboutTitle"> About Me </h1>
            <div className="aboutImg"></div>
            <div className="aboutInfo">
                <p>My name is Aaron Bowles, I am a full-stack developer originally from Fairfax, Virginia. My intense passion for technology, science, progress and the environment have shaped my world view and motivated me to become a software developer. The endless possibilities of software developing have opened my eyes to an abundance of opportunities doing what I love. Helping others while growing as an individual is a rewarding and fulfilling pursuit that continues each and everyday.  </p>
                <p>This will be additional info </p>
            </div>
          </div>
        )
    }
}

export default AboutMe