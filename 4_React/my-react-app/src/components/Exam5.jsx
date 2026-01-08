// JSX 예제
import test1 from "../assets/img.jpg";

const Exam5 = () => {
  return <Exam5_5 />  
}

// JSX 예제 1 : 자바스크립트 변수로 사용하기
const Exam5_1 = () => {
  // 상태값이 변경되면 상태를 다루고 있는 컴포넌트가 리랜더링되지만
  // 일반적인 JS 변수는 리랜더링되지 않음! (그냥 일반 변수)
  const name = "React";
  // JS 변수에 jsx 구문을 담아두고 > 조건에 따라 return할 변수를 결정할 수 있음
  const element = <h1>Hello, {name}</h1>;

  return element;
}

// JSX 예제 2 : img 태그에 이미지 사용
const Exam5_2 = () => {
  return <img src={test1}/>
}

// JSX 예제 3 : 로그인 여부에 따라 화면 다르게 보이기 (if-else 문)
const Exam5_3 = () => {
  if(true) {
    return <h1>환영합니다!</h1>
  } else {
    return <h1>로그인해주세요</h1>
  }
}

// JSX 예제 4 : 로그인 여부에 따라 화면 다르게 보이기 (삼항 연산자)
const Exam5_4 = () => {

  // JS 영역 > if-else 구문 사용 가능
  
  // return 구문부터는 JSX 구문 > if-else 구문 사용 불가능 > 삼항 연산자 사용!
  return <h1>{false ? '환영합니다!' : '로그인해주세요'}</h1>
}

// JSX 예제 5 : **배열을 이용한 화면 랜더링 방법**
// 클라이언트(React) <-> 서버(SpringBoot) : CSR
// 서버에서 응답받은 데이터는 대부분 배열(List) 형태
const Exam5_5 = () => {
  // 서버에서 아래 배열을 응답받았다고 가 정
  const members = ["짱구", "유리", "철수", "훈이", "맹구"];

  // JS 내장 함수(map, filter, reduce...) 중 배열의 요소에 하나씩 순차 접근 > 콜백 함수 내부의 내용을 수행한 후
  //  > 새로운 배열로 만들어서 반환 >> map
  // **return할 구문이 한 줄이면, 중괄호와 return 생략 가능** : 잘못 작성 시, 화면에 랜더링되지 않음
  const listItem = members.map((member, index) => <li key={index}>{member}</li>);
  
  // Each child in a list should have a unique "key" prop
  // : React에서 동적으로 list를 랜더링할 때, 각 자식 컴포넌트가 고유한 key 속성을 가져야 한다는 규칙 위배 시 발생하는 경고
  // 고유한 key 값을 작성함으로써 경고 해결 가능((member, index) => <li key={index}>  )
  return <ul>{listItem}</ul>
}

export default Exam5;