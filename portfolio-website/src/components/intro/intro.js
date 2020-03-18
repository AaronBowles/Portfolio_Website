import React, { Component } from "react";
import './intro.css';

class Intro extends Component {

    render() {
        return (
          <div className='introContainer'>

            <h1 className='greeting'> Greetings! </h1>
            <h3 className='introduction'> My name is Aaron and I am a full stack developer</h3>

          </div>
        )
    }
}

export default Intro