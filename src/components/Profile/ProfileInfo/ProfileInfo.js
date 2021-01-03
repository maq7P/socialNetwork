import React from 'react';
import style from './profileInfo.module.css';
import imgNoName from '../../../assets/images/user-defualt.webp';
import bgProfile from '../../../assets/images/bgProfile.png'
import Status from "./Status";

const ProfileInfo = (props) => {
    return (<div>
        <div className={style.bg}>
            <img src={bgProfile}/>
            <div className={style.avatarBlock}>
                <img src={props.profileInfo.photos.large ? props.profileInfo.photos.large : imgNoName}/>
                <div className={style.info}>
                    <div className={style.profileHeader}>
                        <h3>{props.profileInfo.fullName}</h3>
                        <Status 
                            status={props.status}
                            put_profile_status={props.put_profile_status}
                            id={props.id} />
                    </div>
                    <div className={style.detailedInfo}>
                        <span className={style.position}>Country:  </span>
                        <span className={style.argument}>Russsia</span>
                    </div>
                    <div className={style.detailedInfo}>
                        <span className={style.position}>City:  </span>
                        <span className={style.argument}>Keytown</span>
                    </div>
                    <div className={style.detailedInfo}>
                        <span className={style.position}>Work:  </span>
                        <span className={style.position}>
                            {props.profileInfo.lookingForAJob ? 'Looking for a job' : ''}
                        </span>
                    </div>
                    <div className={style.detailedInfo}>
                        <span className={style.position}>Job wish:  </span>
                        <span className={style.position}>
                            {props.profileInfo.lookingForAJobDescription ? props.profileInfo.lookingForAJobDescription : ''}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default ProfileInfo;