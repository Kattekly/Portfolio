import React from 'react';
import s from './Contacts.module.scss'
import styleContainer from "../Common/Styles/Container.module.css";
import Title from "../Common/Components/Title/Title";
import {ContactForm} from "./ContactForm";


export const Contact: React.FC = () => {
    return (
        <div id={'contactForm'} className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title title={"contacts"}/>
                <div className={s.formBlock}>
                <ContactForm/>
                </div>
            </div>
        </div>
    )
}