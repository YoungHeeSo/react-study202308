
import React from 'react';
import './App.css';

function App() {

  // const $h2=React.createElement('h2', null, '반가워요!~');
  const $h2=<h2>방가방가</h2>;
  
  return (
    // <React.Fragment>
      <>
      <div className="App">
        <h1>메롱멜오</h1>
        {$h2}
      </div>

      <div className='noname'>
        <input type='text' />
        <p>
          오늘은 태풍이 와서 비바람이 불었다 <br /> 
          졸리다
        </p>
      </div>
      </>
    // </React.Fragment>
  );
}

export default App;

//닫는 태그가 없다면 < />으로 써
