import React from 'react';

//css로딩
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';

const ExpenseItem = ({title, price: propsPrice, date}) => { //props => {title, price, date}

  // console.log(porps);

  // const expenseDate=date;
  // const expenseTitle = title;
  // const expensePrice = propsProps;

  //한 자리 숫자를 두 자리 숫자로 변환하는 함수 
  const makeTwodigit=(text)=>{
    return text.toString().padStart(2, '0');    
  }

  //날짜 포멧팅 변환함수 정의
  // eslint-disable-next-line no-unused-vars
  const makeFormattedDate=()=>{
    const year = date.getFullYear(); //년도만 가져와
    const month = date.getMonth(); //년도만 가져와
    const day = date.getDate(); //년도만 가져와

    return `${year}년${makeTwodigit(month)}월${makeTwodigit(day)}일`
  }

  //숫자를 원화표기법으로 바꾸기
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(propsPrice);

  const clickHandler=e=>{
    console.log('버튼 클릭함');
    console.log(e.target);
  ;}

  return (    
      <Card className="expense-item">
        <ExpenseDate date={date}/>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{formattedPrice}원</div>
        </div>
        <button id='btn' onMouseOver={clickHandler}>수정</button>
        <button id='btn' onMouseOver={e=>{console.log('삭제');}}>삭제</button>
      </Card>
  );
};

export default ExpenseItem;
