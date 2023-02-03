import React from 'react';
import s from './Projects.module.css'
import styleContainer from "../Common/Styles/Container.module.css";
import Project from "./Project/Project";
import Title from "../Common/Components/Title/Title";

const Projects = () => {
    return (
        <div className={s.projectBlock}>
            <div className={`${styleContainer.container} ${s.projectContainer}`}>
                <Title text={"Проекты"}/>
                <div className={s.projects}>
                    <Project title={"1 проект"} description={"Описание 1 bvdcvbjsdbkjsncklsmxkldsnk nbdjsbchsdcbh"}/>
                    <Project title={"2 проект"} description={"Описание  ghsvchsdbvchjsbcjshncjnskjdc njdsbncjbdchj"}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;