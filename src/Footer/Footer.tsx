import React from 'react';
import s from './Footer.module.scss'
import styleContainer from "../Common/Styles/Container.module.css";
import Title from "../Common/Components/Title/Title";
import vk from "../Assets/Images/icons8-vk-circled-96.png"

const Footer = () => {
    return (
        // <div className={s.footerBlock}>
        //     <div className={`${styleContainer.container} ${s.footerContainer}`}>
        <div className={s.footer}>
            <div className={s.container}>
                <Title title={"My name"}/>
                <div className={s.iconsContainer}>
                    <a href="https://vk.com/kattekly"><img src={vk} alt="VK"/></a>
                    <a href=""><img src={''} alt="facebook"/></a>
                    <a href=""><img src={''} alt="instagram"/></a>
                    <a href=""><img src={''} alt="linkedin"/></a>
                </div>
                <div className={s.span}>&copy; 2023 Все права защищены</div>
            </div>
        </div>
    );
};

export default Footer;