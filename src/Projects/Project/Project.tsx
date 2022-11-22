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

                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>

        </div>
    );
};

export default Project;