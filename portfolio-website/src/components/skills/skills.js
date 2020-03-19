import React, { Component } from "react";
import './skills.css'

class Skills extends Component {

    render() {
        return (
          <div className="skillsContainer">

            <h1 className="skillsHeader"> Skills </h1>
            <div className="flexcontainer">

            <div className="skills">
                <div className="html">HTML</div>
                <div className="html">CSS</div>
                <div className="html">GIT</div>
            </div>
            <div className="javaScriptSkills">
              <div className="js">JavaScript</div>
              <div className="react">React</div>
              <div className="node">Node</div>
            </div>
            <div className="pythonSkills">
                <div className="python">Python</div>
                <div className="django">Django</div>
            </div>
            <div className="databaseSkills">
                <div className="sql">SQL</div>
                <div className='oracle'>Oracle</div>
                <div className="postgres">Postgres</div>
                <div className='mongodb'>MongoDB</div>
            </div>
            </div>
          </div>
        )
    }
}

export default Skills