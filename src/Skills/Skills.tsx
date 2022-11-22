import React from 'react';
import s from './Skills.module.css'
import styleContainer from "../Common/Styles/Container.module.css";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}></div>

            </div>
        </div>
    );
};

export default Skills;