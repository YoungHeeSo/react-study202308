import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = ({date}) => {

  const year = date.getFullYear();
  // const month = date.getMonth();
  const month = date.toLocaleString('ko-KR', {month:'long'});
  const day = date.getDate();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{year}</div>
      <div className="expense-date__year">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
