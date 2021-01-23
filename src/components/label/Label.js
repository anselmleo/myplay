import React from 'react';
import Style from './Label.module.css';

function Label({label}) {
    return (
        <label className={Style.label}>{label}</label>
    )
}

export default Label
