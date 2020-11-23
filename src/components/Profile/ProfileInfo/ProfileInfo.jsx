import React from 'react'
import s from './ProfileInfo.module.css'



const ProfileInfo = () => {
    return (
    <div>
        <div>
            <img src='https://wallbox.ru/resize/2560x1440/wallpapers/main2/201725/1498307643594e5c3baa5f68.33820439.jpg'
                 height='150x' width='1000px'/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>

    </div>
    )
}

export default ProfileInfo