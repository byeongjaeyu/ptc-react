import React from 'react'
import { Link } from 'react-router-dom'

export default function Reservation2() {
  return (
    <header className="App-header">
      <p style={{fontWeight:"600"}}> 
        ▪ 2022년 5월 12일 예약 가능시간 조회
      </p>

        <div style={{backgroundColor:"white",marginTop:"30px",padding:"10px 20px 10px 20px",textAlign:"center",width:"40%"}}>
        <hr style={{marginTop:"5px",marginBottom:"5px"}}/>
          <div style={{backgroundColor:"#f0a4a4"}}>
            <div style={{fontSize:"18px",fontWeight:"500"}}>
              ⏰09:00 ~ 10:00
            </div>
          </div>
        <hr style={{marginTop:"5px",marginBottom:"5px"}}/>
          <div>
            <div style={{fontSize:"18px",fontWeight:"500"}}>
              ⏰10:00 ~ 11:00
            </div>
          </div>
        <hr style={{marginTop:"5px",marginBottom:"5px"}}/>
          <div style={{backgroundColor:"#f0a4a4"}}>
            <div style={{fontSize:"18px",fontWeight:"500"}}>
              ⏰11:00 ~ 12:00
            </div>
          </div>
        <hr style={{marginTop:"5px",marginBottom:"5px"}}/>
          <div>
            <div style={{fontSize:"18px",fontWeight:"500"}}>
              ⏰13:00 ~ 14:00
            </div>
          </div>
        <hr style={{marginTop:"5px",marginBottom:"5px"}}/>
          <div>
            <div style={{fontSize:"18px",fontWeight:"500"}}>
              <Link style={{textDecoration:"none",color:"black"}} to='/confirm'>
                ⏰14:00 ~ 15:00
              </Link>
            </div>
          </div>
        <hr style={{marginTop:"5px",marginBottom:"5px"}}/>
          <div style={{backgroundColor:"#f0a4a4"}}>
            <div style={{fontSize:"18px",fontWeight:"500"}}>
              ⏰15:00 ~ 16:00
            </div>
          </div>
        <hr style={{marginTop:"5px",marginBottom:"5px"}}/>
          <div style={{backgroundColor:"#f0a4a4"}}>
            <div style={{fontSize:"18px",fontWeight:"500"}}>
              ⏰16:00 ~ 17:00
            </div>
          </div>
        <hr style={{marginTop:"5px",marginBottom:"5px"}}/>
        </div>

    </header>
  )
}
