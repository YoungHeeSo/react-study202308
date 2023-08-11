import React, {useState} from 'react';

//css로딩
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({title, price: propsPrice, date}) => { //props => {title, price, date}

  // console.log(porps);

  // const expenseDate=date;
  // const expenseTitle = title;
  // const expensePrice = propsProps;

  // let itemTitle=title;

  //값이 변경되어 화면에 반영되어야 하는 값들은
  //useState훅을 통해 상태변수로 관리함.

  //useState는 배열을 리턴하는데
  //첫번째 요소는 관리할 상태값
  //두번째 요소는 상태값을 변경하는 setter함수
  let [itemTitle, setItemTitle] = useState(title);
  // console.log(stateItem);

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
    // title='안녕';
    // console.log(itemTitle);
    
    //state변수는 반드시 setter를 통해서만 변경해야함
    // setItemTitle((snapshot)=>{
    //   console.log(`snapshot: ${snapshot}`);
    //   return '메롱'; 

    //   //반환 값이 새로운 값이 되며, 기존 스냅샷과 다를경우
    //   //화면을 리렌더링하고 같을경우 리렌더링하지 않아
    // });
    setItemTitle('안녕');
  }

  return (    
      <Card className="expense-item">
        <ExpenseDate date={date}/>
        <div className="expense-item__description">
          <h2>{itemTitle}</h2>
          <div className="expense-item__price">{formattedPrice}원</div>
        </div>
        <button id='btn' onMouseOver={clickHandler}>수정</button>
        <button id='btn' onMouseOver={e=>{console.log('삭제');}}>삭제</button>
      </Card>
  );
};

export default ExpenseItem;
