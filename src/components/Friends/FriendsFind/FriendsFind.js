import React from 'react'
import style from './friendsFind.module.css'
import Person from "../../common/Person/Person";
import IdRandom from "../../../utilities/IdRandom";
import imgUserDefualt_1 from '../../../assets/images/user-defualt.webp'
import imgUserDefualt_2 from '../../../assets/images/user-defualt-2.png'

const FriendsFind = ({users, totalUsers, showUsers, onPageChanged, page, follow, unfollow}) => {
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
                        <Person
                            name={user.name}
                            body={user.status}
                            img={user.photos.small ? user.photos.small : imgUserDefualt_1}
                        />
                        {user.followed
                            ? <button
                                className={`${style.button} ${style.add}`}
                                onClick={() => {
                                    unfollow(user.id)
                                }}>follow</button>
                            : <button
                                className={`${style.button} ${style.remove}`}
                                onClick={() => {
                                    follow(user.id)
                                }}>unfollow</button>}
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



export default FriendsFind