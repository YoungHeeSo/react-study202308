import React, { useContext, useEffect, useReducer, useState } from 'react';

import Card from '../../UI/Card';
import styles from './Login.module.css';
import Button from '../../UI/Button/Button';
import AuthContext from '../../../store/auth-context';
import Input from '../../UI/Input/Input';
// import { act } from 'react-dom/test-utils';

// 리듀서 함수
/*
  이 컴포넌트의 모든 상태와 상태 변경을 중앙제어하는 함수
  컴포넌트 내부 데이터를 사용하지 않고 상태에만 집중하므로
  컴포넌트 바깥쪽에 선언하는게 일반적이다

  param1 - state: 변경 전의 상태값
  param2 - action: dispatch함수(상태 변경등의 행동)가 전달한 상태가 변경 객체
  return : 관리할 상태값들을 반환
*/
const emaliReducer=(state, action)=>{
  // console.log('email reducer call!!');
  // console.log('state:',state);
  // console.log('action:',action);

  // dispatch함수가 전달한 액션의 타입에 따라 다른 상태값을 반환
  if(action.type==='USER_INPUT'){
    return{
      value: action.val,
      isValid: action.val.includes('@')
      // isValid: state.isValid
    };
  }
  else if(action.type==='INPUT_VALIDATE'){
    return{
      value:state.value,
      isValidL: state.value.includes('@')
    }
  }

  return {
    value: '',
    isValid: null
  };
};

const passwordReducer=(state, action)=>{
  if(action.type==='USER_INPUT'){
    return{
      value: action.val,
      isValid: action.val.trim().length > 6
      // isValid: state.isValid
    };
  }
  else if(action.type==='INPUT_VALIDATE'){
    return{
      value:state.value,
      isValidL: state.value.trim().length > 6
    }
  }

  return {
    value: '',
    isValid: null
  };  
}

const Login = () => {

  const {onLogin}=useContext(AuthContext);

  //email reducer사용하기
  /*
    param1 - reducer function: 위에 만든 리듀서 함수
    param2 - inital state: 초기 상태
    return1 - 이메일 관련 상태변수
    return2 - dispatch함수: 상태를 변경할 수 있는 함수
  */
  const[emailState, dispatchEmail] = useReducer(emaliReducer,{
      value: '',
      isValid: null  
  });

  const[passwordState, dispatchPassword] = useReducer(passwordReducer,{
      value: '',
      isValid: null  
  });

   // 이메일, 패스워드가 둘다 동시에 정상적인 상태인지 확인
   const [formIsValid, setFormIsValid] = useState(false);

  //emailState의 isValid가 변경됐을 때만 useEffect를 실행하게 하려면
  //isValid를 디스트럭쳐링 한다
  const { isValid: emailIsValid} = emailState;
  const { isValid: passwordIsValid} = passwordState;

  // 압력란을 모두 체크하여 form의 버튼 disabled를 해제하는 상태변수
  //formIsValid의 사이드 이펙트를 처리하는 영역
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('useEffect call in Login.js');
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 1000);


    // cleanup 함수 - 컴포넌트가 업데이트되거나 없어지기 전에 실행
    return () => {
      console.log('clean up!!');
      clearTimeout(timer);
    };

  }, [emailIsValid, passwordIsValid]); 
  // 최초 한번만 실행하지만 이 배열에 상태변수를 넣어주면 그 상태변수가 바뀔때마다(set으로)
  //useEffect를 재 실행함

  const emailChangeHandler = (e) => {
    //reducer의 상태변경은 dispatch함수를 통해 처리
    /*
      param1 - action객체(리듀서 함수의 2번째 파라미터)
    */
    dispatchEmail({
      type: 'USER_INPUT',
      val: e.target.value
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: 'INPUT_VALIDATE'
    });
  };

  const passwordChangeHandler = (e) => {
    dispatchPassword({
      type: 'USER_INPUT',
      val: e.target.value,
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: 'INPUT_VALIDATE'
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>

        <Input 
          id='email'
          label='E-Mail' 
          type='email'
          value={emailState.value}
          isValid={emailIsValid}
          // ...rest 
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Input 
        id='password'
        label='Password' 
        type='email'
        value={passwordState.value}
        isValid={passwordIsValid} 
        onChange={passwordChangeHandler}
        onBlur={validatePasswordHandler}
        />

        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
