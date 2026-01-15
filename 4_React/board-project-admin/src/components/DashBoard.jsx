import React, { useContext } from 'react';
import '../css/DashBoard.css';
import Restore from './Restore.jsx';
import Manager from './Manager.jsx';
import Statistics from './Statistics.jsx';
import Chart from './Chart.jsx';
import { AuthContext } from './AuthContext.jsx';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.jpg";

// react-router-dom : React 애플리케이션에서 라우팅을 구현하기 위해 사용하는 라이브러리
// 라우팅(Routing) : 사용자가 요청한 URL 경로에 따라 적절한 페이지나 자원을 제공하는 과정
export default function DashBoard() {
  const globalState = useContext(AuthContext);

  const navigate = useNavigate();
  const goDashBoardMain = () => {
    // location.href: 사용은 가능하나 권장되지 않음(브라우저의 기본 동작을 이용해 "새로고침하며 이동"하는 방식)
    // > 전체 페이지를 리랜더링(리로드) > 리액트의 SPA 철학을 위배함
    navigate("/"); // location.href="/"와 같음
  }

  return (
      <div className='dash-board-container'>
        <div className='dash-board-header'>
          <button id='logo-btn' onClick={goDashBoardMain}>
            <img src={logo} />
          </button>
        </div>

        <div className='admin-info'>
          <p>현재 접속 관리자 : {globalState.user.memberNickname}</p>
          <button onClick={globalState.handleLogout}>로그아웃</button>
        </div>

        {/* NavLink : 현재 URL이 to 속성과 일치하면 active 상태로 인식하게 해줌
              : 해당 컴포넌트를 클릭하면 to="경로" : 작성된 경로로 이동
              : Link와 달리 '현재 URL 주소 = NavLink의 to 속성'이라면, active 속성을 추가해줌 */}
        <div className='router-tab-box'>
          <NavLink to="/restore">복구</NavLink>
          <NavLink to="/statistics">통계</NavLink>
          <NavLink to="/manager">관리자 메뉴</NavLink>
        </div>

        {/* Route를 이용해 각 URL에 맞는 컴포넌트를 연결 */}
        <Routes>
          <Route path='/' element={<Chart />}></Route>
          <Route path='/statistics' element={<Statistics />}></Route>
          <Route path='/restore' element={<Restore />}></Route>
          <Route path='/manager' element={<Manager />}></Route>
        </Routes>
      </div>
  )
}