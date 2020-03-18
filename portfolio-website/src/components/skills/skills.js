import React, { Component } from "react";
import './skills.css'

class Skills extends Component {

    render() {
        return (
          <div className="skillsContainer">

            <h1 className="skillsHeader"> Skills </h1>

            <div className="skills">
                <h3>HTML</h3>
                <h3>CSS</h3>
                <h3>Git</h3>
            </div>
            <div className="javaScriptSkills">
              <h3>JavaScript</h3>
              <h3>React</h3>
              <h3>Node</h3>
            </div>
            <div className="pythonSkills">
                <h3>Python</h3>
                <h3>Django</h3>
            </div>
            <div className="databaseSkills">
                <h3>SQL</h3>
                <h3>Postgres</h3>
                <h3>MongoDB</h3>
                <h3>Oracle</h3>
            </div>
          </div>
        )
    }
}

export default Skills