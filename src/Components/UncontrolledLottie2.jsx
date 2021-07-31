// UncontrolledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../Components/Lotties/social-media.json'

class UncontrolledLottie2 extends Component {


  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }   
    };

    return(
      <div>
        <Lottie options={defaultOptions}
        style={{width:100,   float: 'left'}}/>   
      </div>
    )
  }
}

export default UncontrolledLottie2