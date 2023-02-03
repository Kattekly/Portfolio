import React from 'react';
import s from './Skills.module.css'
import styleContainer from "../Common/Styles/Container.module.css";
import Skill from "./Skill/Skill";
import Title from "../Common/Components/Title/Title";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={s.skills}>
                    <Skill title={'JS'} description={"Описание скила ла-ла-ла"}/>
                    <Skill title={'CSS'} description={"Еще одно описание скила ла-ла-ла"}/>
                    <Skill title={'React'} description={"И еще одно описание скила ла-ла-ла"}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;