import React from 'react';

//css로딩
import './ExpenseItem.css';

const ExpenseItem = ({title, price: propsProps, date}) => {

  // console.log(porps);

  // const expenseDate=date;
  // const expenseTitle = title;
  // const expensePrice = propsProps;

  //한 자리 숫자를 두 자리 숫자로 변환하는 함수 
  const makeTwodigit=(text)=>{
    return text.toString().padStart(2, '0');    
  }

  //날짜 포멧팅 변환함수 정의
  const makeFormattedDate=()=>{
    const year = date.getFullYear(); //년도만 가져와
    const month = date.getMonth(); //년도만 가져와
    const day = date.getDate(); //년도만 가져와

    return `${year}년${makeTwodigit(month)}월${makeTwodigit(day)}일`
  }

  //숫자를 원화표기법으로 바꾸기
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(propsProps);

  return (
    <div className="expense-item">
      <div>{makeFormattedDate()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{formattedPrice}원</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
