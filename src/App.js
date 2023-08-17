
import React, { useState } from 'react';
import CourseInput from './Components/CourseGolas/CourseInput';
import CourseList from './Components/CourseGolas/CourseList';
import './App.css';

const DUMMY_DATA = [
  {id:'g1',
  text: '리액트 컴포넌트 스타일링 마스터하기'},
  {id:'g2',
  text: 'UI 프로그래밍 고수되기'},
];

const App = () => {

  const [goals, setGoals]=useState(DUMMY_DATA);

  //input에게 전달할 함수
  const addGoalHandler=text=>{
    console.log('전달받은 텍스트: ', text);
    const newGoal={
      id:Math.random().toString(),
      text: text
    }

    //상태변수(배열) 수정
    const updateGoals=[...goals, newGoal];
    // setGoals(updateGoals);
    //순서에 상관없이 이전 데이터사용
    setGoals(prevGoals=>[...prevGoals, newGoal]);
  }

  //삭제 이벤트 핸들러 courseitem까지 내려보내야함
  const deleteGoalHandler=(id)=>{
    console.log(id);

    //#1 id랑 일치하지 않는 것만 남겨
    // const updateGoals = goals.filter(goal=>goal.id!==id);
    
    //#2복사본에서 삭제후
    // const updateGoals = [...goals];
    // const index = updateGoals.findIndex(goal=>goal.id===id)
    // updateGoals.splice(index, 1);

    //본사본을 다시 셋팅
    // setGoals(updateGoals);
    // console.log(index);

    //#3
    setGoals((prevGoals)=>prevGoals.filter(goal=>goal.id!==id));
  }

  //courselist 조건부 렌더링
  let listContent = <p style={{
    color: 'red', fontSize: '2em', textAlign: 'center',
  }}>목표를 등록해주세요</p>

  if(goals.length>0){
    listContent=<CourseList items={goals} onDelete={deleteGoalHandler}/>
  }
  

  return (
    <div>
        <section id='goal-form'>
          <CourseInput onAdd={addGoalHandler} />
        </section> 

        <section id="goals">
          {listContent}
        </section>
    </div>
  );
};

export default App;
