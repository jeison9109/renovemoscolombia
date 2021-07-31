// UncontrolledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../Components/Lotties/list.json'

class UncontrolledLottie3 extends Component {


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
        style={{width:200, height:"auto",   }}/>   
      </div>
    )
  }
}

export default UncontrolledLottie3