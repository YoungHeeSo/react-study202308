import React from 'react'
import styles from './Input.module.css'

const Input = ({id, label, type, value, isValid, ...rest}) => {
  return (
    <div
        className={`${styles.control} ${
        isValid === false ? styles.invalid : ''
        }`}
    >
        <label htmlFor={id}>{label}</label>
        <input
        type={type}
        id={id}
        value={value}
        { ...rest} //props의 기타 등등...
        />
    </div>
  );
}

export default Input