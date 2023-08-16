import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({onAddExpense}) => {

  const [expenseToggle, setExpenseToggle]= useState(false);

  const startInertModeHandler=()=>setExpenseToggle(true);
  const stopInsertModeHandler=()=>setExpenseToggle(false);

  let newExpenseContent = <button onClick={startInertModeHandler}>새로운 지출 추가하기</button>;
  
  if(expenseToggle){
    newExpenseContent = <ExpenseForm onSaveExpense={onAddExpense} onToggle={stopInsertModeHandler} />;
  }

  return (
  <div className='new-expense'>
    {newExpenseContent}
    {/* <ExpenseForm onSaveExpense={onAddExpense}/> */}
  </div>
  )
};

export default NewExpense;
