import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://img2.freepng.ru/20180920/iiu/kisspng-google-chrome-portable-network-graphics-computer-i-chrome-svg-png-icon-free-download-295963-onli-5ba442ac7399b0.4332403515374916284735.jpg" width="20px"/>

            <div className={s.loginBlock}>
                { props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
        

    )
}

export default Header