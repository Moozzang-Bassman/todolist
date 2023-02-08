import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다",
      isDone: false,
    },
  ]);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const onChangeTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const onChangeDescHandler = (event) => {
    setDesc(event.target.value);
  };
  const addGoalHandler = () => {
    const newGoal = { id: state.length, title, body: desc, isDone: false };
    setState([...state, newGoal]);
    setTitle("");
    setDesc("");
  };
  const clickRemoveHandler = (id) => {
    const newState = state.filter((item) => item.id !== id);
    setState(newState);
  };
  const clickIsDoneHandler = (i) => {
    let copy = [...state];
    const temp = copy.map((item) => {
      if (item.id === i) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      }
      return item;
    });
    setState(temp);
  };
  return (
    <div>
      <div className="input-box">
        <h4>
          제목{" "}
          <input
            type="text"
            value={title}
            onChange={onChangeTitleHandler}
          ></input>
        </h4>
        <h4>
          내용{" "}
          <input
            type="text"
            value={desc}
            onChange={onChangeDescHandler}
          ></input>
        </h4>
        <button onClick={addGoalHandler} className="add-btn">
          추가하기
        </button>
        {/* {title}{desc}이거물려줘야함 */}
        {/* 어디로? work 컴포넌트로 */}
      </div>

      <h2>Working..🔥</h2>
      <div className="wrap">
        {state
          .filter((item) => !item.isDone)
          .map((item) => {
            return (
              <Test
                state={item}
                clickRemoveHandler={clickRemoveHandler}
                clickIsDoneHandler={clickIsDoneHandler}
              ></Test>
            );
          })}
      </div>

      <div>
        <h2>Done..!🎊</h2>


        <div className="wrap">
          {state
            .filter((item) => item.isDone)
            .map((item) => {
              return (
                <Test
                  state={item}
                  clickRemoveHandler={clickRemoveHandler}
                  clickIsDoneHandler={clickIsDoneHandler}
                ></Test>
              );
            })}
        </div>
      </div>
    </div>
  );
}
function Test(props) {
  const state = props.state;
  const clickRemoveHandler = props.clickRemoveHandler;
  const clickIsDoneHandler = props.clickIsDoneHandler;
  return (
    <>
      <div key={state.id} className="todo-container">
        <div className="inner-contents">
          <div>{`id : ${state.id}`}</div>
          <h2>{state.title}</h2>
          <p>{state.body}</p>
          <div className="done-btn">
            <button
              className="btn1"
              onClick={() => clickRemoveHandler(state.id)}
            >
              삭제하기
            </button>
            <button
              className="btn2"
              onClick={() => clickIsDoneHandler(state.id)}
            >
              {!state.isDone ? "완료" : "취소"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
