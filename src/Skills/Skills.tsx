import React from 'react';
import s from './Skills.module.css'
import styleContainer from "../Common/Styles/Container.module.css";
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}></div>
                <Skill title={'JS'} description={"Описание скилаб ла-ла-ла"}/>
                <Skill title={'CSS'} description={"Описание скилаб ла-ла-ла"}/>
                <Skill title={'React'} description={"Описание скилаб ла-ла-ла"}/>
            </div>
        </div>
    );
};

export default Skills;