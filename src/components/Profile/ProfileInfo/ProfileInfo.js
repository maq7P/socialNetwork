import React from 'react';
import style from './profileInfo.module.css';

const ProfileInfo = () => (
    <div>
        <div className={style.bg}>
            <img src="https://robo-hunter.com/uploads/images/16844/news/80_990_455_news_5caf3dc18cfb7.png"/>
            <div className={style.avatarBlock}>
                <img src="https://sun9-64.userapi.com/gN79EhxURENQ4f55w6rPGIFdl0Hr_Q4X0BXS_Q/lJZxeSC7TGc.jpg"/>
                <div className={style.info}>
                    <h3>Max Pet</h3>
                    <div className={style.detailedInfo}>
                        <span className={style.position}>Country:</span>
                        <span className={style.argument}>Russsia</span>
                    </div>
                    <div className={style.detailedInfo}>
                        <span className={style.position}>City:</span>
                        <span className={style.argument}>Keytown</span>
                    </div>
                    <div className={style.detailedInfo}>
                        <span className={style.position}>Age:</span>
                        <span className={style.argument}>20</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default ProfileInfo;