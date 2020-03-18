import React, { Component } from "react";
import './intro.css';

class Intro extends Component {

    render() {
        return (
          <div className='introContainer'>
            <div className='introGreeting'>

            <h1> Greetings! </h1>
            <h3> My name is Aaron and I am a full stack developer</h3>
            </div>
          </div>
        )
    }
}

export default Intro