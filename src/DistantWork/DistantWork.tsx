import React from 'react';
import styleContainer from "../Common/Styles/Container.module.css";
import s from "./DistantWork.module.css";

const DistantWork = () => {
    return (
        <div className={s.block}>
        <div className={`${styleContainer.container} ${s.workContainer}`}>
            <h2>Рассматриваю только удаленную работу</h2>
            <button className={s.button}>Нанять меня</button>
        </div>
        </div>
    );
};

export default DistantWork;