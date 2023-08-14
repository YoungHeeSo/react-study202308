/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
import React from 'react';
import ExpenseList from './Components/Expenses/ExpenseList';
import NewExpense from './Components/NewExpense/NewExpense';
import Fake_DB_server from './Fake_DB_server';


const App = () => {

  console.log('app실행');

  // ExpenseForm에게 내려보낼 함수
  const addExpenseHandler=(newExpense)=>{
    console.log('App컴포넌트에서 응답함');
    console.log(newExpense);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Fake_DB_server />
    </>
  );
};

export default App;
