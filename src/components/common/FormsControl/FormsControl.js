import React from "react";
import styles from './formControl.module.css'

export const TextArea =({input, meta, ...rest}) => {
    const flagError = meta.touched && meta.error
    return (
        <div className={`${styles.formControl} ${flagError && styles.error}`}>
            <textarea {...input} {...rest}/>
            {flagError && <span>{meta.error}</span>}
        </div>
    )
}
export const Input =({input, meta, ...rest}) => {
    const flagError = meta.touched && meta.error
    console.log(meta.error);
    return (
        <div className={`${styles.formControl} ${flagError && styles.error}`}>
            <input {...input} {...rest}/>
            {flagError && <div>{meta.error}</div>}
        </div>
    )
}