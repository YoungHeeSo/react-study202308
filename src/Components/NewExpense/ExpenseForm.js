import React,{useState} from 'react';
import './ExpenseForm.css';


const ExpenseForm = () => {

  let [userInput, setUserInput]=useState({    
    title:'',
    price:'',
    date:''
  });

  // let [title, setTitle]=useState('');
  // let [price, setPrice]=useState('');
  // let [date, setDate]=useState('');

  const titleChangeHandler=(e)=>{
    setUserInput({
      ...userInput,
      title: e.target.value
    });
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
    date: e.target.value
  });
  }

  const formSubmitHandler=(e)=>{
    e.preventDafault(); //submit차단
    console.log('submit버튼 누름');

    // const newExpense = {
    //   title: title,
    //   price: price,
    //   date: date
    // };

    console.log(userInput);

    //입력창 리셋
    setUserInput({
      title:'',
      price:'',
      date:''
    });
    
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
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;