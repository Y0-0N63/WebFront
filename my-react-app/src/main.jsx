// type="module"을 통해 import 사용 가능
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// index.html의 <div id="root"></div>에 App이라는 컴포넌트를 넣어 화면을 그려나가기
createRoot(document.getElementById('root')).render(
  // React 개발 모드에서만 동작하는 래퍼 컴포넌트 > 실사용(프로덕션)에는 영향을 주지 않음
  // 1. 잠재적 문제 탐지
  // 2. 일부 함수 두 번 실행 (개발자에게 경고)
  // 3. 오래된 API 사용 탐지
  // <StrictMode>
    <App />
  // </StrictMode>
)
