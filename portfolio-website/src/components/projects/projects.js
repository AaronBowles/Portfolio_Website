import React, { Component } from "react";
import './projects.css'

class Projects extends Component {

    render() {
        return (
          <div className='projectsContainer'>
            
            <h1> projects</h1>

            <div className='carousel-container'>
              <div className='carousel-prev'>
                <button>prev</button>
              </div>
        

            <div className="carousel-projects">

            </div>

              <div className='carousel-next'>
                <button>next</button>
              </div>
            </div>
            
          </div>
        )
    }
}

export default Projects