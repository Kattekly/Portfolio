import React from 'react';
import s from './Contacts.module.css'
import styleContainer from "../Common/Styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={s.contactBlock}>
            <div className={`${styleContainer.container} ${s.contactContainer}`}>
                <h2>Контакты</h2>
                <form className={s.form}>
                    <input placeholder={'name'} className={s.input}/>
                    <input placeholder={'email'} className={s.input}/>
                    <textarea className={s.text}/>
                </form>
                <button>Отправить</button>
            </div>
        </div>

    );
};

export default Contacts;