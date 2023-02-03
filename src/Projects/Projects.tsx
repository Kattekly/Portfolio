import React from 'react';
import s from './Projects.module.css'
import styleContainer from '../Common/Styles/Container.module.css';
import Project from './Project/Project';
import Title from '../Common/Components/Title/Title';
import todoImage from './../Assets/Images/Todo.jpg'
import socialImage from './../Assets/Images/Social.jpg'

const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`
    }

    const todo = {
        backgroundImage: `url(${todoImage})`
    }

    return (
        <div className={s.projectBlock}>
            <div className={`${styleContainer.container} ${s.projectContainer}`}>
                <Title text={"Проекты"}/>
                <div className={s.projects}>
                    <Project style={social} title={"Социальная сеть"} description={"Описание 1 bvdcvbjsdbkjsncklsmxkldsnk nbdjsbchsdcbh bhbhbhb njnjnjn"}/>
                    <Project style={todo} title={"Тодолист"} description={"Описание  ghsvchsdbvchjsbcjshncjnskjdc njdsbncjbdchj njnjbvgvcfcf bhbbhhbhb sj"}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;