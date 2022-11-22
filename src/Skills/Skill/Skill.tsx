import React from 'react';
import s from './Skill.module.css'

type SkillType = {
    title: string
}

const Skill = (props: SkillType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
        </div>
    );
};

export default Skill;