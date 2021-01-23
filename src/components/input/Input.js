import React from 'react';
import Style from './Input.module.css';

function Input({name, type, placeholder }) {
    return (
        <input className={Style.inputBox} name={name} type={type} placeholder={placeholder} />
    )
}

export default Input
