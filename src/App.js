
import React, { useState } from 'react';
import CourseInput from './Components/CourseGolas/CourseInput';
import CourseList from './Components/CourseGolas/CourseList';
import './App.css';


const App = () => {
  return (
    <div>
        <section id='goal-form'>
          <CourseInput />
        </section> 

        <section id="goals">
          <CourseList />
        </section>
    </div>
  );
};

export default App;
