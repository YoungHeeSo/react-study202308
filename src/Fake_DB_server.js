import React from 'react'
import ExpenseList from './Components/Expenses/ExpenseList';

const Fake_DB_server = () => {
    //지출 항목 객체 배열
    const expenses=[
        {
        title: '샤인머스켓',
        price: 12000,
        date: new Date(2023, 3 - 1, 23)
        },
        {
        title: 'BBQ치킨',
        price: 20000,
        date: new Date(2022, 5 - 1, 21)
        },
        {
        title: '도미노피자',
        price: 35000,
        date: new Date(2023, 7 - 1, 14)
        },
    ];
    return (
    <>
      <ExpenseList items={expenses} />
    </>
  );
};

export default Fake_DB_server