import React, { Component } from "react";
import './intro.css';

class Intro extends Component {

    render() {
        return (
          <div className='introContainer'>

            <h1 className='greeting'> Greetings! </h1>
            <h3 className='introduction'>Hope you enjoy this background picture I took!</h3>

          </div>
        )
    }
}

export default Intro