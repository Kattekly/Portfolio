import React from 'react';
import s from './Footer.module.scss'
import styleContainer from "../Common/Styles/Container.module.css";
import Title from "../Common/Components/Title/Title";
import vk from "../Assets/Images/icons8-vk-circled-96.png"
import telegram from "../Assets/Images/icons8-telegram-app-96.png"
import github from "../Assets/Images/github.png"
import codewars from "../Assets/Images/codewars.png"

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <Title title={'Ekaterina Kozachenko'}/>
                <div className={s.iconsContainer}>
                    <a href="https://vk.com/kattekly"><img src={vk} className={s.pictures} alt="VK"/></a>
                    <a href="https://t.me/K_t_r_n_k"><img src={telegram} alt="telegram"/></a>
                    <a href="https://github.com/Kattekly"><img src={github} alt="github"/></a>
                    <a href="https://www.codewars.com/users/Kattekly"><img src={codewars} alt="codewars"/></a>
                </div>
                <div className={s.span}>&copy; 2023 All Rights Reserved</div>
            </div>
        </div>
    );
};

export default Footer;