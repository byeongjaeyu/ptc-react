import React from 'react'
import Lottie from '../components/Lottie'
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
export default function Complete() {
  return (
    <header className="App-header">
    <p style={{fontWeight:"600"}}> 
      ▪ 고윤찬 님의 예약이 완료되었습니다.
    </p>
    <div style={{fontSize:"20px",backgroundColor:"white",padding:"20px",margin:"0 0 10px 0"}}>
        📆 2022년 5월 12일 14:00 ~ 15:00 스터디룸4 (4인실)
    </div>
    
    <CompleteLottie
      loop={false}
      css={css`
      width: 80px;
      height: 80px;
      `}
    />

    <Link 
      to='/'
      style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "25%",
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
        홈으로
      </Link>
        
  </header>
  )
}

const CompleteLottie = props => (
  <Lottie {...props} data-testid="completeLottie" src="https://static.toss.im/lotties/general/check.json" />
);

