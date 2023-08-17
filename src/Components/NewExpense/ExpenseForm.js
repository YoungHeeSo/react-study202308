import React,{useState} from 'react';
import './ExpenseForm.css';


const ExpenseForm = ({onSaveExpense, onToggle}) => {

  let [userInput, setUserInput]=useState({    
    title:'',
    price:'',
    date:''
  });

  // let [title, setTitle]=useState('');
  // let [price, setPrice]=useState('');
  // let [date, setDate]=useState('');

  const titleChangeHandler=(e)=>{

    // const foo =()=>({}); //빈 객체 리턴하기

    setUserInput((preveUserInput)=>({
      ...preveUserInput,
      title: e.target.value
    })
  );
    
    //리액트의 변화 값의 감지는
    //새로운 값을 가져와야 감지할 수 있어
    // setUserInput({
    //   ...userInput,
    //   title: e.target.value
    // });

  }

  const priceChangeHandler=(e)=>{
    // setPrice(e.target.value);
    setUserInput({
      ...userInput,
      price: e.target.value
    });

  }

  const dateChangeHandler=(e)=>{
  //  setDate(e.target.value);
  setUserInput({
    ...userInput,
    date: e.target.value //new Date(userInput.date)
  });
  }

  //
  const formSubmitHandler = (e) => {
    e.preventDefault(); // submit 차단

    const newExpense={
      id: Math.random(),
      title: userInput.title,
      price: +userInput.price,
      date: new Date(userInput.date)
    };

    console.log('submit 버튼을 누름!');
    onSaveExpense(newExpense);

    // 입력창 리셋
    setUserInput({
      title: '',
      price: '',
      date: ''
    });

    onToggle();
  };

  const cancelInsertHandler=()=>{
    console.log('최소버튼누름');
    onToggle();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={userInput.title}/>
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" min="100" step="100" onChange={priceChangeHandler} value={userInput.price}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2025-12-31" onChange={dateChangeHandler} value={userInput.date}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='button' onClick={cancelInsertHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );

};

export default ExpenseForm;