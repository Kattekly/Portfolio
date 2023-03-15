import React, {useEffect, useState} from 'react';
import s from './Header.module.scss'
import {Nav} from "../Nav/Nav";
import styleContainer from '../Common/Styles/Container.module.css'

const Header = () => {
   /* const [position, setPosition] = useState(window.scrollY)
    const [visible, setVisible] = useState(true)
    useEffect(() => {
        const handleScroll = () => {
            let moving = window.scrollY
            setVisible(position > moving);
            setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })

    const cls = visible ? s.visible : s.hidden;*/

    return (
        <div className={`${s.headerBlock}`}>
            <div className={`${styleContainer.container} ${s.header}`}>
                <div className={s.container}>
                    <Nav/>
                </div>
            </div>
        </div>

    )
};

export default Header;