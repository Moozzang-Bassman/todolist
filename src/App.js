import './App.css';

function App() {
  return (
    <div>
      <div className='input-box'>
        <h4>제목 <input type='text'></input></h4>
        <h4>내용 <input type='text'></input></h4>
        <button className='add-btn'>추가하기</button>
      </div>
      <div className='wrap'>

        <h2>Working..🔥</h2>
        <div className='todo-container'>
          <div className='inner-contents'>
            <h2>
              리액트 공부하기
            </h2>
            <p>
              리액트 기초를 공부해봅시다
            </p>
            <div className='done-btn'>
              <button className='btn1'>삭제하기</button>
              <button className='btn2'>완료</button>
            </div>
          </div>


        </div>
      </div>



      <div className='wrap'>

        <h2>Done..!🎊</h2>
        <div className='todo-container'>
          <div className='inner-contents'>
            <h2>
              리액트 공부하기
            </h2>
            <p>
              리액트 기초를 공부해봅시다
            </p>
            <div className='done-btn'>
              <button className='btn1'>삭제하기</button>
              <button className='btn2'>완료</button>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
