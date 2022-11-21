import React from 'react';
import s from './Main.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>Name</h1>
                    <p>Frontend-разработчик</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

export default Main;