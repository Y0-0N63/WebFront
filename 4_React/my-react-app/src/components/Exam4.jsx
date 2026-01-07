// 상태 끌어올리기(State lifting up) : 자식 컴포넌트의 상태를 부모에게 끌어올려 부모에게 이용 가능하도록 해주는 것

import { useState } from "react"

// 부모 컴포넌트
const Exam4 = () => {
  // 자식 컴포넌트의 상태인 id, pw를 부모로 끌어올려 작성
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  
  // 자식 컴포넌트의 상태를 변경해주는 함수 또한 부모로 끌어올려 작성
  // id 상태값을 업데이트해주는 함수
  const onChangeId = (e) => {
    setId(e.target.value);
  }

  // pw 상태값을 업데이트해주는 함수
  const onChangePw = (e) => {
    setPw(e.target.value);
  }

  return(
    <div>
      {/* 자식 컴포넌트에게 사용중인 함수들을 props를 통해 전달해야 */}
      <Id onChangeId={onChangeId} />
      <Pw onChangePw={onChangePw} />
      <div>
        {/* 자식의 상태에 따라 수행 여부를 설정
          기존 : 자식이 가진 id, pw라는 상태값을 부모 컴포넌트가 알 방법이 없었으나
            부모 컴포넌트로 자식의 상태, 함수를 끌어올려 사용할 수 있도록 만들어주었다! (상태 끌어올리기) */}
        <button disabled={id.length === 0 || pw.length === 0}>Login</button>
      </div>
    </div>
  )
}

// 자식 컴포넌트 ID
const Id = (props) => {
  return (
    <div>
      <label>ID : </label>
      <input onChange={props.onChangeId} />
    </div>
  )
}

// 자식 컴포넌트 Pw
const Pw = ({onChangePw}) => {
  return (
    <div>
      <label>PW : </label>
      <input type="password" onChange={onChangePw} />
    </div>
  )
}

export default Exam4;