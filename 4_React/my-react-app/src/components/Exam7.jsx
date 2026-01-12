// SpringBoot 서버로, React 클라이언트와 서로 요청/응답 주고받기

import { useState } from "react";

const Exam7 = () => {
  const [portMsg, setPortMsg] = useState(null);
  const [userMsg, setUserMsg] = useState("");
  
  // React는 비동기 요청 사용
  const getPortNum = () => {
    fetch("http://localhost/getPortNum") // 요청 보낼 서버 경로
    .then(res => res.json())
    .then(data => {
      setPortMsg(data);
    })
  }
  
  return(
    <div>
      <p>1. 서버로부터 응답받은 값(GET 방식)</p>
      <button onClick={getPortNum}>GET 요청 보내기</button>
      <ul>
        {portMsg?.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
      
      <p>2. 서버로 값 전달 후, 응답받은 값(POST 방식)</p>
      <button>POST 요청 보내기</button>
      <p></p>
    </div>
  )
}

export default Exam7;