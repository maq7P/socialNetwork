import React from 'react'
import style from './friendsFind.module.css'
import Person from "../../Person/Person";
import IdRandom from "../../../utilities/IdRandom";
import * as axios from 'axios';

class FriendsFind extends React.Component {
    constructor(props) {
        super(props)
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
                this.props.set_users(response.data.items)
            })
        }
    }

    render() {
        return (
            this.props.users.map(user => (
                <div className={style.wrapper} key={user.id + IdRandom(3)}>
                    <div>
                        <Person
                            name={user.name}
                            body={user.status}
                            img={user.photos.small ? user.photos.small : 'https://seek-team-prod.s3.fr-par.scw.cloud/users/5f5f165654577674874172.jpg'}
                        />
                        {user.followed
                            ? <button
                                className={`${style.button} ${style.add}`}
                                onClick={() => {
                                    this.props.unfollow(user.id)
                                }}>follow</button>
                            : <button
                                className={`${style.button} ${style.remove}`}
                                onClick={() => {
                                    this.props.follow(user.id)
                                }}>unfollow</button>}
                    </div>
                    <div className={style.location}>
                        <span className={style.locationItem}>user.location.country</span>
                        <span className={style.locationItem}>user.location.city</span>
                    </div>
                </div>
            ))
        )
    }
}

export default FriendsFind