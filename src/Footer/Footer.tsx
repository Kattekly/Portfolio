import React from 'react';
import s from './Footer.module.css'
import styleContainer from "../Common/Styles/Container.module.css";

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>My name</h2>
                <div className={s.allIcon}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                <div>&copy; 2023 Все права защищены</div>
            </div>
        </div>
    );
};

export default Footer;