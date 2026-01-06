// 파일명-해당 파일에 작성될 컴포넌트의 이름은 달라도 됨
import { Component } from "react";

// 클래스형 컴포넌트 Exam1 정의하기
// React.Componenet 클래스를 상속받아 클래스형 컴포넌트 정의 (함수형에서는 상속받지 않음)
class Exam1 extends Component {
  // 생성자 정의
  // props : 부모 컴포넌트로부터 전달받은 데이터가 대입됨
  constructor(props){
    super(); // 부모 클래스(컴포넌트)의 생성자를 호출

    // Exam1 컴포넌트에서 사용할 상태(state)를 정의 > this.stae(클래스형 컴포넌트에서 컴포넌트의 상태(state) 객체를 의미)
    this.state = { count : 0 }; // state 중 count의 상태값을 0으로 초기화
    console.log("생성자 호출");
  }

  // 리액트 컴포넌트의 생명주기(lifecycle) : 탄생(Mount) > 성장(사용되는 과정, Update) > 죽음(Unmount)
  // 클래스형 컴포넌트에서는 명시적으로 표현해주어야
  // 탄생 : 컴포넌트가 처음 화면에 나타났을 때(랜더링되었을 때) 수행되는 함수
  componentDidMount() {
    console.log("componentDidMount : 마운트 완료(태어남)");
  }

  // 해당 컴포넌트가 업데이트 될 때(props나 state가 변경된 후)
  // prevProps : (현재 상태가(count))업데이트가 발생하기 전의 부모로부터 전달받은 데이터
  // prevState : 업데이트가 실행되기 전의 컴포넌트 내부 상태 값
  // 무엇이 바뀌었기 때문에 리랜더링해야 하는지를 판단하기 위해 과거 값-현재 값을 비교해야만
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate : 업데이트 완료");
    console.log("이전 state : ", prevState.count);
    console.log("현재 state : ", this.state.count);
  }

  // 컴포넌트가 화면에서 제거될 때
  componentWillUnmount() {
    console.log("componentWillUnmount : 언마운트 완료(제거)");
  }

  // 클래스형 컴포넌트 문법으로 정의된 함수 : 버튼 클릭 시 호출되는 이벤트 핸들러 함수
  handleClick = () => {
    // 상태 업데이트 : count 값을 기존 상태값에서 +1한 상태로 업데이트
    this.setState({count : this.state.count + 1 });
  }

  // 랜더링 함수 .JSX를 반환하여 화면에 UI를 그림(랜더링)
  render() {
    return(
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.handleClick}>증가 버튼</button>

        <h2>
          {/* 부모로부터 전달받은 값은 props라고 부름 */}
          부모로부터 전달받은 값 : {this.props.mihyun} {this.props.test}
        </h2>
      </div>
    )
  }
}

// 파일과 이름이 다른 컴포넌트가 여럿 존재할 때, 기본값으로 지정할 컴포넌트는 default가 붙음
// 다른 파일에서 해당 파일의 컴포넌트를 사용할 수 있도록 내보냄(export)
export default Exam1;