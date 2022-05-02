import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import './Reservation.css'
export default function Reservation() {
  const [sel,setSel] = useState(null);
  useEffect(()=>{
    var date = new Date();
    var utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
    var kstGap = 9 * 60 * 60 * 1000;
    var today = new Date(utc + kstGap);
    var endDay = new Date(2022, 5 + 1, 0); 
    var nextDate = endDay.getDate(); 
    var nextDay = endDay.getDay();
    let calendar = document.querySelector('.dates');
    calendar.innerHTML = '';
    for (var i = 1; i <= nextDate; i++) {
      if(i==6||i==7||i==13||i==14||i==20||i==21||i==27||i==28||i==8||i==10){
        calendar.innerHTML = calendar.innerHTML + '<div class="day current" style="text-decoration:none;background-color:#f0a4a4;">' + i + '</div>' 
      }else if(i==4){
        calendar.innerHTML = calendar.innerHTML + '<div class="day current" style="text-decoration:none;border:1px solid black;margin:-1px;">' + i + '</div>' 
      }else{
        calendar.innerHTML = calendar.innerHTML + '<div class="day current" style="text-decoration:none;">' + i + '</div>' 
      }
    }
  },[])
  return (
    <header className="App-header">
      <p style={{fontWeight:"600"}}> 
        ▪ 고윤찬님의 이용현황
      </p>
      <div style={{fontSize:"20px",backgroundColor:"white",padding:"20px",margin:"0 5px 10px 5px"}}>
        ⏲ 5월 총 누적 사용 시간: 1시간 30분
      </div>

      <div style={{fontSize:"20px",backgroundColor:"white",padding:"20px",margin:"0 5px 10px 5px"}}>
        ⏲ 전월 누적 사용 시간: 3시간 30분
      </div>

      <p style={{fontWeight:"600"}}> 
        ▪ 5월 이용가능한 일자
      </p>

      <div class="sec_cal">
        <div class="cal_wrap">
          <div class="days">
            <div class="day">MON</div>
            <div class="day">TUE</div>
            <div class="day">WED</div>
            <div class="day">THU</div>
            <div class="day">FRI</div>
            <div class="day">SAT</div>
            <div class="day">SUN</div>
          </div>
          <Link to='/Reservation2' style={{textDecoration:"none"}}>
            <div class="dates">
            </div>
          </Link>
        </div>
      </div>
          
    </header>
  )
}
