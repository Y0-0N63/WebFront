import { createContext, useState } from "react";
import { axiosApi } from "../api/axiosAPI";

export const AuthContext = createContext();

// Context는 Provider(제공자)와 Consumer(소비자)가 존재

// 전역 상태 제공자(Provider) 정의
export const AuthProvider = ({ children }) => {  
  // 상태값, 함수 : 전역적으로 현재 로그인한 회원의 정보를 기억할 상태 정의
  const [user, setUser] = useState(() => {
    const storeUser = localStorage.getItem("userData"); // key
    return storeUser ? JSON.parse(storeUser) : null;
  });
  
  // 이메일 입력 이벤트 핸들러 : Login.jsx의 input type="email"... 의 onChange와 연결
  const [email, setEmail] = useState("");
  const changeInputEmail = (e) => {
    setEmail(e.target.value);
  }
  
  // 비밀번호 입력 이벤트 핸들러
  const [password, setPassword] = useState("");
  const changeInputPw = () => {
    setPassword(e.target.value);
  }

  // 로그인 처리 함수(비동기)
  const handleLogin = async(e) => {
    // form 태그로 작성됨 > 동기식 요청이 발생 > 그러나 비동기로 처리하고자 함 > 동기식 요청 막아주기!
    e.preventDefault();

    // 비동기 로그인 요청 -> 서버로 전달
    const response = await axiosApi.post("/admin/login",
      { memberEmail : email, memberPw : password } // DTO를 고려
    );

    console.log(response);
    // response JS OBJ 형태로 저장됨
    // response.status : 200
    // response.data : 응답 데이터

    const adminInfo = response.data;

    if(adminInfo.length === 0) {
      alert("이메일 혹은 비밀번호 불일치")
      return;
    }

    // 상태에 세팅
    setUser(adminInfo);

    // 데이터를 localStroage에 저장
    localStorage.setItem("userData", JSON.stringify(adminInfo));

    // 추가! 만료 시간 지정 (1시간 뒤에 로그아웃될 수 있도록 타이머 설정)
    setTimeout(() => {
      localStorage.removeItem("userData");
      setUser(null);
      alert("다시 로그인해주세요.")
      window.location.href = "/";
    }, 60 * 60 * 1000) // 1시간 후
  }

  // 로그아웃 처리 함수
  const handleLogout = async() => {
    try {
      const resp = await axiosApi.get("/admin/logout");

      if(resp.status === 200) {
        localStorage.removeItem("userData");
        setUser(null);
      }
    } catch (error) {
      console.log("로그아웃 중 문제 발생 : ", error)
    }
  }

  // 자식(하위) 컴포넌트에게 전달할 데이터를 하나로 묶기
  const globalState = {
    // key : value > user : user(state) > key 이름과 state 값이 동일할 때 > 한 번만 작성 가능!
    user,
    email,
    password,
    changeInputEmail,
    changeInputPw,
    handleLogin,
    handleLogout
  }

  return (
  <AuthContext.Provider value={globalState}>
    {children}
  </AuthContext.Provider>
  )
}