import React from 'react';
import s from './Projects.module.scss'
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
                <Title text={"Projects"}/>
                <div className={s.projects}>
                    <Project style={social} title={"Social Network"} description={"Описание 1 bvdcvbjsdbkjsncklsmxkldsnk nbdjsbchsdcbh bhbhbhb njnjnjn bhbhb njnjnjn gggg"}/>
                    <Project style={todo} title={"Todolist"} description={"Описание  ghsvchsdbvchjsbcjshncjnskjdc njdsbncjbdchj njnjbvgvcfcf bhbbhhbhb sj"}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;