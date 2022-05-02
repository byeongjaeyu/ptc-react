import React from 'react'
import { Link } from 'react-router-dom'

export default function Reservation2() {
  return (
    <header className="App-header">
      <p style={{fontWeight:"600"}}> 
        ▪ 2022년 5월 12일 예약 가능좌석 조회
      </p>
      <div style={{display:"flex",justifyContent:"space-around"}}>
        <Link to='/reservation23'>
          <img src='seat.PNG' style={{cursor:"pointer"}} width="90%" height="auto"/>
        </Link>
      </div>
    </header>
  )
}
