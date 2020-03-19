import React, { Component } from "react";
import './skills.css'

class Skills extends Component {

    render() {
        return (
          <div className="skillsContainer">

            <h1 className="skillsHeader"> Skills </h1>
            <div className="flexcontainer">

            <div className="skills">
                <div className="html"></div>
                <div className="css"></div>
                <div className="git">GIT</div>
            </div>
            <div className="javaScriptSkills">
              <div className="js"></div>
              <div className="react"></div>
              <div className="node"></div>
            </div>
            <div className="pythonSkills">
                <div className="python"></div>
                <div className="django"></div>
            </div>
            <div className="databaseSkills">
                <div className="sql"></div>
                <div className='oracle'></div>
                <div className="postgres"></div>
                <div className='mongodb'></div>
            </div>
            </div>
          </div>
        )
    }
}

export default Skills