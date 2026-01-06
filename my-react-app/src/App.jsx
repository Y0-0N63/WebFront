import { useState } from 'react'
import reactLogo from './assets/react.svg'
// public은 root 자체를 의미 > 경로가 public/vite.svg인 것을 /vite.svg라고 작성 가능
import viteLogo from '/vite.svg'
import './App.css'
import Exam1 from './components/Exam1'
import Exam2 from './components/Exam2'

function App() {
  // [변수, 함수] = 상태(state, 반드시 존재하는 것은 아니며 해당 컴포넌트의 현재 값을 담는 변수) >> App에서 사용할 유동적인 값을 담는 변수
  // useState : hook의 종류 중 하나로 react 모듈에서 import 받아 사용
  // const [count, setCount] = useState(0)
  const[showExam, setShowExam] = useState(true);

  // jsx의 규칙으로 하나 이상의 태그(<></>)가 존재해야 함!
  // 또한, 가장 바깥쪽에 형제가 두 개 이상 존재할 수 없음 (하나의 부모로 하나 이상의 형제를 감싸줘야)
  return (
    // <> : fragment(html의 역할을 수행하지는 X, 감쌀 태그가 마땅히 존재하지 않는다면 사용)
    <>
      {/* jsx : html을 이용한 js 문법(ex_src={변수명}, className=""...) */}
      {/* <h1>안녕하세요!</h1> */}

      <button onClick={() => setShowExam(!showExam)}>클릭</button>
      {/* 조건부 랜더링 : 조건에 따라 랜더링되는 방법, showExam이 True면 Exam1이 랜더링됨 */}
      {showExam && <Exam2 boyun={showExam} test="world" />}
      {/* App : 부모 컴포넌트, Exam1 : 자식 컴포넌트 */}
    </>
  )
}

// App()을 export하면, main.jsx에서 import받아 사용 (+파일명 != 함수명도 가능)
export default App