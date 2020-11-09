import style from "./followersAll.module.css";
import React from "react";
import Person from "../../common/Person/Person";

const FollowersAll = () => {
    return (
        <div className={style.frindsList}>
            <div className={style.friendItem}>
                <Person
                    name={'Mishka'}
                    body={'123'}
                    img={'https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg'}/>

                <button>
                    Send message
                </button>
            </div>
            <div className={style.friendItem}>
                    <Person
                        name={'Mishka'}
                        body={'World is wondeful'}
                        img={'https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg'}/>
                <button>
                    Send message
                </button>
            </div>
        </div>
    )
}
export default FollowersAll