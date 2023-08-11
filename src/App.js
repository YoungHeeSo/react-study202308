import React from 'react';
import ExpenseList from './Components/ExpenseList';
import Hello from './Hello';

const App = () => {

  //지출 항목 객체 배열
  const expenses=[

    {
      title: '바나나',
      price: 2000,
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
    }

  ];

  return (
    <>
    <ExpenseList items={expenses} />
    <Hello>
      <ul>
        <li>사과</li>
        <li>포도</li>
        <li>블베</li>
      </ul>
    </Hello>
    </>
  );
};

// props 타입, 개수 상관없이 넣을 수 있다

export default App;
