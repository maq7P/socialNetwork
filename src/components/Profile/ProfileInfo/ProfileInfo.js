import React from 'react';
import style from './profileInfo.module.css';
import imgNoName from '../../../assets/images/user-defualt.webp';
import bgProfile from '../../../assets/images/bgProfile.png'
import camera from '../../../assets/images/camera.png'
import Status from "./Status";
import load from '../../../assets/images/45.gif'

const ProfileInfo = (props) => {
    console.log(props.profileInfo.photos, 'tyt1')
    return (
        <div>
        <div className={style.bg}>
            <img src={bgProfile}/>
            <div className={style.avatarBlock}>
                <div>
                    <div className={style.blockImg}>
                        <img src={props.profileInfo.photos.large ? props.profileInfo.photos.large : imgNoName}/>
                        {props.loadingPhoto ? <div><img className={style.miniload} src={load}/></div> : null}
                    </div>
                    {props.id ? null :
                        <label
                            className={style.label}
                            style={
                                {
                                    backgroundImage: `url(${camera})`
                                }
                            }
                        >
                            <input
                                disabled={props.loadingPhoto ? true : false}
                                type="file" className={style.input}
                                onChange={(e) => {
                                    if(e.target.files.length){
                                        props.set_photo(e.target.files[0])
                                    }
                                }}
                                //onChange={e => console.log(e.target.files[0])}
                            />
                        </label>
                    }
                    {props.error
                        ? <div className={style.err}>
                            <span>{props.error}</span>
                        </div>
                        : null}
                </div>
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