import React from 'react';
import s from './Project.module.scss'

type ProjectPropsType = {
    title: string
    description: string
    style: {}
}

const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer} style={props.style}>
                <button className={s.button}>Посмотреть</button>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default Project;