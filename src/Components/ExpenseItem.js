import React from 'react';

//css로딩
import './ExpenseItem.css';

const ExpenseItem = () => {

  const expenseDate=new Date(2023, 8, 4);
  const expenseTitle = '냠냠치킨';
  const expensePrice = 19000;

  //한 자리 숫자를 두 자리 숫자로 변환하는 함수 
  const makeTwodigit=(text)=>{
    return text.toString().padStart(2, '0');
    
  }

  //날짜 포멧팅 변환함수 정의
  const makeFormattedDate=()=>{
    const year = expenseDate.getFullYear(); //년도만 가져와
    const month = expenseDate.getMonth(); //년도만 가져와
    const date = expenseDate.getDate(); //년도만 가져와

    return `${year}년${makeTwodigit(month)}월${makeTwodigit(date)}일`
    //
  }

  //숫자를 원화표기법으로 바꾸기
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(expensePrice);

  return (
    <div className="expense-item">
      <div>{makeFormattedDate()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{formattedPrice}원</div>
      </div>
    </div>
  );
};

export default ExpenseItem;