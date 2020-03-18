import React, { Component } from "react";
import './aboutMe.css';

class AboutMe extends Component {

    render() {
        return (
          <div className="aboutMeContainer">

            <h1 className="aboutTitle"> About Me </h1>
            <div className="aboutImg"></div>
            <div className="aboutInfo">
                <p>This will be an introduction paragaph </p>
                <p>This will be additional info </p>
            </div>
          </div>
        )
    }
}

export default AboutMe