import React from "react";
import style from './overview.module.css';
import svgGitHub from '../../../assets/images/social/github-logo.svg'
import svgVK from '../../../assets/images/social/vk.svg'
import svgInst from '../../../assets/images/social/instagram.svg'
import svgTwitter from '../../../assets/images/social/twitter.svg'
import svgFacebook from '../../../assets/images/social/facebook.svg'
import {NavLink} from "react-router-dom";

const Overview = ({profileInfo}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.leftSide}>
                <div className={style.part}>
                    <h3 className={style.title}>MAIN SKILL</h3>
                    <div className={style.block}>
                        <div>
                            {/*<img src="https://cdn.pixabay.com/photo/2019/07/16/18/18/frontend-4342425_960_720.png"/>*/}
                        </div>
                    </div>
                </div>
                <div className={style.part}>
                    <h3 className={style.title}>TECHNOLOGY STACK</h3>
                    <div className={style.block}>
                        <div className={style.wrapperImg}>
                            <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'}/>
                        </div>
                        <div className={style.wrapperImg}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"/>
                        </div>
                        <div className={style.wrapperImg}>
                            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"/>
                        </div>
                        <div className={style.wrapperImg}>
                            <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'}/>
                        </div>
                        <div className={style.wrapperImg}>
                            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"}/>
                        </div>
                        <div className={style.wrapperImg}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"/>
                        </div>
                        <div className={style.wrapperImg}>
                            <img src="https://cdn.iconscout.com/icon/free/png-256/vuejs-1175052.png"/>
                        </div>
                    </div>
                </div>
                <div/>
            </div>
            <div className={style.rightSide}>
                <div className={style.part}>
                    <h3 className={style.title}>ABOUT</h3>
                    <div className={style.block}>
                        <span>{profileInfo.aboutMe}</span>
                    </div>
                </div>
                <div className={style.part}>
                    <h3 className={style.title}>CONTACTS</h3>
                    <div className={style.linkGroup}>
                        <div className={style.link}>
                            <a href={profileInfo.contacts.github}>
                                <img src={svgGitHub} alt="git"/>
                            </a>
                        </div>
                        <div className={style.link}>
                            <a href={profileInfo.contacts.vk}>
                                <img src={svgVK} alt="vk"/>
                            </a>
                        </div>
                        <div className={style.link}>
                            <a href={profileInfo.contacts.instagram}>
                                <img src={svgInst} alt="inst"/>
                            </a>
                        </div>
                        <div className={style.link}>
                            <a href={profileInfo.contacts.twitter}>
                                <img src={svgTwitter} alt="twitter"/>
                            </a>
                        </div>
                        <div className={style.link}>
                            <a href={profileInfo.contacts.facebook}>
                                <img src={svgFacebook} alt="facebook"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Overview