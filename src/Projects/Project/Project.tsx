import React from 'react';
import s from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}

const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.icon}>Картинка</div>
            <button>Смотреть</button>
            <div className={s.textElement}>
                <h3>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default Project;