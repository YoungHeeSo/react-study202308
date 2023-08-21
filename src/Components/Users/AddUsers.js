import React, { useRef, useState } from 'react';
import styles from './AddUsers.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button/Button';
import ErrorModal from '../UI/Modal/ErrorModal';

const AddUsers = ({onAddUser}) => {

    //에러 상태 관리
    const [error, setError] = useState(null);

    //input 가져오기
    const nameInput = useRef();
    const ageInput = useRef();
    
    const userSubmitHandler=(e)=>{        
        e.preventDefault();    
        
        const username =nameInput.current.value;
        const age =ageInput.current.value;
        
        console.log(nameInput.current);

        //입력값
        if(username.trim()===''|| age.trim===''){
            setError({
                title:'유효하지 않는 입력값',
                message:'입력값이 공백으로 작성되면 안됩니다'
            });
            return;
        }

        if( +age < 1) {
            setError({
                title:'유효하지 않는 나이의 범위 값',
                message:'나이는 1이상의 숫자로 작성해주세요'
            });
            return;
        }
    
        onAddUser({username, age});

        nameInput.current.value='';
        ageInput.current.value='';

    }
    
  return (

    //React.Fragment
    <>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={() => setError(null)} />}
        <Card className={styles.input}>
            <form onSubmit={userSubmitHandler}>
                <label htmlFor="username">이름</label>
                <input
                    id="username"
                    type="text" 
                    ref={nameInput}                   
                />

                <label htmlFor="age">나이</label>
                <input
                    id="age"
                    type="number"                    
                    ref={ageInput}
                />
                <Button type="submit" >가입하기</Button>
            </form>
        </Card>
    </>
  );
};

export default AddUsers;