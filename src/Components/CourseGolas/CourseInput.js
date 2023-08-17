import React, { useState } from 'react'
import './CourseInput.css'
import Button from '../UI/Button/Button';

const CourseInput = ({onAdd}) => {

    const [enteredText, setEnteredText] =useState('');
    
    //입력값 검증 상태변수
    const [isValid, setIsValid]=useState(true);

    const textChangeHandler=e=>{
        if(e.target.value.trim().length > 0){
            setIsValid(true);
        }

        // console.log(e.target.value);
        setEnteredText(e.target.value);
    }

    const formSubmitHandler=e=>{
        e.preventDefault();
        // console.log(enteredText);
        // console.log('폼 제출');

        if(enteredText.trim().length===0){
            setIsValid(false);
            return;
        }

        onAdd(enteredText);
        setEnteredText('');
    }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>나의 목표</label>
        <input 
        //동적 인라인 스타일 설정하기
        style={{
            background: isValid ? 'transparent':'salmon', 
            borderColor: isValid ? 'black':'red'
        }}
        type="text" onChange={textChangeHandler} value={enteredText}/>
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
}

export default CourseInput