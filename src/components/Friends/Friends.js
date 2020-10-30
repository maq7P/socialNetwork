import React from 'react';
import style from './friends.module.css';
import ChangeHeader from '../ChangeHeader/ChangeHeader';


const Friends = ({friendsData, dataLinks}) => {
    return (
    <>
        <ChangeHeader dataLinks={dataLinks}/>
        <div className={style.frindsList}>
            <div className={style.friendItem}>
                <div className={style.person}>
                    <div className={style.personAvatar}>
                        <img src='https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg'/>
                    </div>
                    <div>
                        <div className={style.personName}>Li li</div>
                        <div className={style.personLastContact}>Kek</div>
                    </div>
                </div>

                <button>
                    Send message
                </button>
            </div>
            <div className={style.friendItem}>
                <div className={style.person}>
                    <div className={style.personAvatar}>
                        <img src='https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg'/>
                    </div>
                    <div>
                        <div className={style.personName}>Li li</div>
                        <div className={style.personLastContact}>Kek</div>
                    </div>
                </div>

                <button>
                    Send message
                </button>
            </div>
        </div>
    </>
)}
export default Friends;