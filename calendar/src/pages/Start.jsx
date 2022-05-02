import React from 'react'
import {Link} from 'react-router-dom'

export default function Start() {
  return (
    <header className="App-header">
    <div style={{borderRadius:'40%',overflow:'hidden',margin:"10px"}}>
      <video
        src="videoJoy.mp4"
        preload="auto"
        autoPlay
        loop
        height="200vmin"
      />
    </div>
    <p style={{fontWeight:"bold"}}>
      잡다카페 예약 시작하기
    </p>
    <Link 
      to='/reservation'
      style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40%",
            height:"50px",
            border:"0 solid transparent",
            borderRadius:"16px",
            backgroundColor:"#25282b",
            fontSize:"18px",
            fontWeight:"600",
            color:"white",
            textDecoration:"none",
            marginBottom:"15px"
          }}
    >
        역검부스 예약
    </Link>
    <Link 
      to='/reservation21'
      style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40%",
            height:"50px",
            border:"0 solid transparent",
            borderRadius:"16px",
            backgroundColor:"#25282b",
            fontSize:"18px",
            fontWeight:"600",
            color:"white",
            textDecoration:"none"
          }}
    >
       스터디룸 예약
    </Link>
  </header>
  )
}
