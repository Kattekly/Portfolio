import React from 'react';
import s from './Projects.module.scss'
import styleContainer from '../Common/Styles/Container.module.css';
import {Project} from "./Project/Project";
import Title from '../Common/Components/Title/Title';
import todoImage from './../Assets/Images/Todo.jpg'
import socialImage from './../Assets/Images/Social.jpg'
import cardsImage from './../Assets/Images/Cards.jpg'


const works = [
    {
        title: "Todolist",
        description: "Technology stack: react, redux-toolkit, react-redux, redux-thunk, react-router-dom, react-hook-form, typescript, dayjs, axios, react-bootstrap, react-icons",
        img: todoImage,
        siteLink: 'https://pavelvoitov.github.io/todolist-ts-01/',
        codeLink: 'https://github.com/PavelVoitov/todolist-ts-01.git'
    },
    {
        title: "Social Network",
        description: "Technology stack: react, redux, react-redux, redux-thunk, typescript, react-router-dom, axios, redux-form, reselect, material-UI",
        img: socialImage,
        siteLink: 'https://pavelvoitov.github.io/8-bit/',
        codeLink: 'https://github.com/PavelVoitov/8-bit.git'
    },
    {
        title: "Cards",
        description: "Technology stack: react, redux, react-redux, redux-thunk, react-router-dom, typescript, material-UI",
        img: cardsImage,
        siteLink: 'https://pavelvoitov.github.io/counter/',
        codeLink: 'https://github.com/PavelVoitov/counter.git'
    },

]

export const Projects = () => {
    return (
        <div id={'projects'} className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title title={"projects"}/>
                <div className={s.projects}>
                    {works.map(el => {
                        return <Project key={el.title}
                                        title={el.title}
                                        description={el.description}
                                        img={el.img}
                                        siteLink={el.siteLink}
                                        codeLink={el.codeLink}/>
                    })}
                </div>
            </div>
        </div>
    )
}