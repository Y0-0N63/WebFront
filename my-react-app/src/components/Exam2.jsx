// 함수형 컴포넌트 예제

// Hook module : useState(초기값), useEffect(콜백함수)...
import { useEffect, useState } from "react";

// function Exam2() {}, const Exam2 = () => {} 형태 모두 가능
// const Exam2 = ({boyun, test}) => {  의 방식과 같이 중괄호로 해체하여 key로 가져올 수 있음 > {boyun} {test}과 같은 방식으로 사용 가능
const Exam2 = (props) => {
  // 상태 정의(count, count 값을 새로 update하여 set)
  const [count, setCount] = useState(0);

  // 함수형 컴포넌트에서 랜더링 이후 실행되는 코드(부수효과, side effect)를 작성할 때 사용하는 Hook
  // 클래스형 컴포넌트의 componentDidMount, componentDidUpdate, componentWillUnmount 기능을 함축적으로 사용 가능
  useEffect(() => {
    // 내부 코드 : 컴포넌트가 랜더링된 후 실행됨(부수 효과 == side effect)

    // componentDidMount(처음 랜더링하자마자 console 창에 출력됨) or componentDidUpdate의 기능이 끝난 후
    console.log("마운트 완료 또는 업데이트됨");

    // clean-up 코드 : 언마운트 시 실행(componentWillUnmount 기능)
    return () => {
      console.log("언마운트 됨")
    }
  }, [count]); // 의존성 배열 > update 발생 : 이전 effect 정리(언마운트) > 그 다음 새로운 effect 발생(mount)

  const handleClick = () => {
    setCount(count + 1);
  }

  // 랜더링
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>증가 버튼</button>

      {/* {showExam && <Exam2 boyun={showExam} test="world" />} */}
      <h2>부모가 준 것 : {props.boyun} {props.test}</h2>
    </div>
  )
}

export default Exam2;