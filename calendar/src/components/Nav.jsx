import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    <nav className='navbar'>
      <ul className='nav-container'>
        <img className="logo" src="캡처.PNG"/>
        <li className='nav-item'>
          직무성향 테스트
        </li>
        <div className='nav-item'>
          |
        </div>
        <li className='nav-item'>
          역검부스 예약
        </li>
        <div className='nav-item'>
          |
        </div>
        <li className='nav-item'>
          스터디룸 예약
        </li>
        <div className='nav-item'>
          |
        </div>
        <li className='nav-item'>
          좌석 예약
        </li>
      </ul>
    </nav>
  )
}