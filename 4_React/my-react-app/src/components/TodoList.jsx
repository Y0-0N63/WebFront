import { useState } from "react";

// React만을 이용한 TodoList 예제
const TodoList = () => {
  // 작성한 Todo를 기억할 List(배열) 상태 만들기  (초기값을 넣어둔 상태)
  const [todoList, setTodoList] = useState([ {title : '123', isDone : false}, {title : '44444', isDone : false}]);

  // 새로운 할 일 제목 작성 input의 value 상태
  const [inputValue, setInputValue] = useState("");
  
  
  // Add Todo 버튼 클릭 시, todoList 상태에 새로운 할 일을 업데이트하는 이벤트 핸들러 함수
  const handleAddTodo = () => {
     // Javascript spread(전개) 연산자 (..,) : 배열이나 객체 같이 여러 데이터가 모여있는 형태를 낱개로 뿌려주는 기능
    setTodoList([...todoList, {title : inputValue, isDone : false}]);
    // 기존 todoList가 가진 배열의 요소를 낱개로 펼치고 뒤에 새로운 요소 추가
    // 새로운 배열이 생성됨 > 이 새 배열을 상태인 todoList 전달하여 셋팅 > React 불변성의 접칙 지키기 위해

    setInputValue(""); // input 창 값 비우기
  }

  // 완료/미완료 상태 업데이트 이벤트 핸들러 함수
  const handleToggleTodo = (index) => {
    const newTodoList = todoList.map((todo, i) => 
    i=== index ? {...todo, isDone : !todo.isDone} : todo);
    // 현재 배열의 i와 매개변수 index가 같으면 isDone값을 반대값으로 변경한 내용으로 사용,
    // 같지 않으면 기존 todo를 그대로 적용하여 새로운 배열을 만들어 반환(map 사용)

    setTodoList(newTodoList);
  }

  const handleDeleteTodo = (index) => {
    // filter : 배열의 요소 중 특정 조건을 만족하는 요소들만 걸러내 새로운 배열을 반환하는 함수
    // -> filter는 원본을 유지함 = 불변성을 지키는 함수
    // const newTodoList = todoList.filter((_, i) => i !== index); 로도 작성 가능!
    const newTodoList = todoList.filter((todo, i) => i !== index);
    // i와 index값이 일치하지 않는 요소들만 모아 새로운 배열로 반환함
    //  == 현재 클릭한 todo를 제외한 요소가 모인 새 배열이 생성됨(삭제 기능처럼 작동)
    setTodoList(newTodoList); // 새로 생성된 배열을 상태에 세팅하였기 때문에 불변성을 지킴
  }

  return (
    <div>
      <h1>나의 TodoList</h1>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>

        {/* 여러 줄일 때/한 줄일 때 */}
        {/* {todoList.map((todo, index) => {
          return (
            <></>
          )
        })}

        {todoList.map((todo, index) => <></>)}
        */}
        <ul>
          {todoList.map((todo, index) => (
            <li key={index}> 
              <span style={{textDecoration : todo.isDone ? "line-through" : "none"}}>{todo.title}</span>
              <button onClick={() => handleToggleTodo(index)}>{todo.isDone ? '미완료' : '완료'}</button>
              <button onClick={() => handleDeleteTodo(index)}>삭제</button>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TodoList;