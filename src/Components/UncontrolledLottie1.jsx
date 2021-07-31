// UncontrolledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../Components/Lotties/socialtwiiter.json'

class UncontrolledLottie1 extends Component {


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
        style={{width:300,height:'auto', display:'flex', justifyContent:'center'}}/>   
      </div>
    )
  }
}

export default UncontrolledLottie1