import React from 'react';
import s from './Skill.module.scss'

type SkillType = {
    title: string
    description: string
    img: string
}

const Skill = ({title, img, description}: SkillType) => {
    return (
        <div className={s.skill}>
            <div>
                <img src={img} alt="skill-icon"/>
            </div>
            <h3>{title}</h3>
            <div className={s.description}>
                {description}
            </div>
        </div>
    );
};

export default Skill;