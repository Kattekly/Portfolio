import React from 'react';
import s from './Projects.module.css'
import styleContainer from "../Common/Styles/Container.module.css";
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={s.projectBlock}>
            <div className={`${styleContainer.container} ${s.projectContainer}`}>
                <div className={s.title}>
                    <h2>My projects</h2>
                </div>
                <div className={s.projects}>
                    <Project title={"1 проект"} description={"Описание 1 bvdcvbjsdbkjsncklsmxkldsnk nbdjsbchsdcbh"}/>
                    <Project title={"2 проект"} description={"Описание  ghsvchsdbvchjsbcjshncjnskjdc njdsbncjbdchj"}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;