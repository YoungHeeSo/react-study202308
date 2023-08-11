import React from 'react';
import './App.css';
import ExpenseItem from './Components/ExpenseItem';

const App = () => {

  //지출 항목 객체 배열
  const expense=[
    {
      title: '바나나',
      price: 2000,
      date: new Date(2023, 7, 7)
    },
    {
      title:"샤인머스켓",
      price:15000, 
      date:new Date(2023, 8, 9)
    },
    {
      title: '도미노피자',
      price: 35000,
      date: new Date(2023, 7, 14)
    }

  ];

  return (
    <>
      <ExpenseItem 
      title={expense[0].title} 
      price={expense[0].price} 
      date={expense[0].date} />

      <ExpenseItem 
      title={expense[1].title} 
      price={expense[1].price} 
      date={expense[1].date} />

      <ExpenseItem 
      title={expense[2].title} 
      price={expense[2].price} 
      date={expense[2].date} />

    </>
  );
};

// props 타입, 개수 상관없이 넣을 수 있다

export default App;
