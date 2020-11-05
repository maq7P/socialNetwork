import React from 'react';
import style from './preloader.module.css'
import gifPreloader from '../../../assets/images/preloader.gif'

const Preloader = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <img src={gifPreloader} style={{width: '100px'}}/>
            </div>
        </div>
    )
}
export default Preloader