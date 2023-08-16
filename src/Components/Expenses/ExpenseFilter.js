import React from 'react'
import './ExpenseFilter.css'

const ExpenseFilter = ({selected, onChangeFilter}) => {
    const dropdownChangeHandler=e=>{
        console.log(e.target.value);
        const selectedYear=e.target.value;

        //seletedYear가 ExpenseList에서 사용할 수 있도록 올리기
        onChangeFilter(selectedYear)
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter