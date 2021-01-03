import React from 'react'
import style from './followersFind.module.css'
import Person from "../../common/Person/Person";
import IdRandom from "../../../utilities/IdRandom";
import imgUserDefualt_1 from '../../../assets/images/user-defualt.webp'
import imgUserDefualt_2 from '../../../assets/images/user-defualt-2.png'
import {NavLink} from "react-router-dom";

const FollowersFind = ({users, totalUsers, showUsers, onPageChanged, page, follow, unfollow, isDisabledArr}) => {
    let pageCount = Math.ceil(totalUsers / showUsers);
    pageCount = pageCount > 30 ? 30 : pageCount;
    let pagination = []

    for (let i = 1; i <= pageCount; i++) {
        pagination = [...pagination, i];
    }

    return (
        <div>
            {pagination.map(point => (
                <span
                    key={IdRandom(6)}
                    className={`${style.point} ${page === point && style.pointActive}`}
                    onClick={() => onPageChanged(point)}

                >{point}</span>
            ))}
            {users.map(user => (
                <div className={style.wrapper} key={user.id + IdRandom(3)}>
                    <div>
                        <NavLink to={`/profile/overview/${user.id}`}>
                            <Person
                                name={user.name}
                                body={user.status}
                                img={user.photos.small ? user.photos.small : imgUserDefualt_1}
                            />
                        </NavLink>
                        {!user.followed
                            ? <button disabled={isDisabledArr.some(id => id === user.id)}
                                className={`${style.button} ${style.add}`}
                                onClick={() => {
                                    follow(user.id)
                                }}>follow</button>
                            : <button disabled={isDisabledArr.some(id => id === user.id)}
                                className={`${style.button} ${style.remove}`}
                                onClick={() => {
                                    unfollow(user.id)
                                }}>unfollow</button>
                        }
                    </div>

                    <div className={style.location}>
                        <span className={style.locationItem}>user.location.country</span>
                        <span className={style.locationItem}>user.location.city</span>
                    </div>
                </div>
            ))}
        </div>
    )
}



export default FollowersFind