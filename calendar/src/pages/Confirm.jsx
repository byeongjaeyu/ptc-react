import React from 'react'
import { Link } from 'react-router-dom'

export default function Confirm() {
  return (
    <header className="App-header">
      <p style={{fontWeight:"600"}}> 
        ▪ 고윤찬님 예약 확인
      </p>
      <div style={{fontSize:"20px",backgroundColor:"white",padding:"20px",margin:"0 0 10px 0"}}>
        📆 선택한 날짜: 2022년 5월 12일
      </div>

      <div style={{fontSize:"20px",backgroundColor:"white",padding:"20px", marginBottom:"20px"}}>
        ⏲ 선택한 시간: 14:00 ~ 15:00
      </div>

      <Link 
      to='/complete'
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
        예약하러 가기
      </Link>
          
    </header>
  )
}
