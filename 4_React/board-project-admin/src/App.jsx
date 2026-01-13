import './css/App.css'
import './components/DashBoard'
import Login from './components/Login'
import { AuthContext, AuthProvider } from './components/AuthContext'
import { useContext } from 'react'

// 컴포넌트를 분리하여 하위 컴포넌트에서 useContext 사용하기
function App() {
  return (
    <AuthProvider>
      <AppComponent />
    </AuthProvider>
  )
}

function AppComponent() {
  
  // 로그인을 했다면 > DashBoard 랜더링
  // 로그인하지 않았다면 > Login 랜더링
  // 조건 : 로그인 여부(로그인을 했는지, 하지 않았는지를 기억해줄 상태값(user))
  // > user에는 로그인한 사람에 대한 정보가 세팅되어 있고, user는 AuthContext 안에 작성되어 있음!
  //  > ContextAPI를 이용하여 랜더링 조건 처리 해야
  
  // useContext > AuthContext를 통해 전역으로 설정해둔 globalState(value 값) 사용(소비)
  // 그 중 user만 사용하고 싶을 때 > {user}와 같이 사용
  // 만약) const test = useContext(AuthContext);라고 작성 > test.user 방식으로 적어줘야
  const {user} = useContext(AuthContext);

  return (
    <>
      {user?(
          // React에서는 class가 아니라 className을 사용
          <div className='body-container'>
            <DashBoard />
          </div>
        )
        :(
          <div className='login-section'>
            <Login />
          </div>
        )
      }
    </>
  )
}

export default App