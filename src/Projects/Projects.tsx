import React from 'react';
import s from './Projects.module.scss'
import styleContainer from '../Common/Styles/Container.module.css';
import {Project} from "./Project/Project";
import Title from '../Common/Components/Title/Title';
import todoImage from './../Assets/Images/Todo.jpg'
import socialImage from './../Assets/Images/Social.jpg'
import cardsImage from './../Assets/Images/Cards.jpg'
import counterImage from './../Assets/Images/2023-03-15_19-37-39.png'


const works = [
    {
        title: "Todolist",
        description: "Technology stack: react, redux-toolkit, react-redux, redux-thunk, react-router-dom, react-hook-form, typescript, dayjs, axios, react-bootstrap, react-icons",
        img: todoImage,
        siteLink: '',
        codeLink: ''
    },
    {
        title: "Social Network",
        description: "Technology stack: react, redux, react-redux, redux-thunk, typescript, react-router-dom, axios, redux-form, reselect, material-UI",
        img: socialImage,
        siteLink: 'https://Kattekly.github.io/samurai-way-main',
        codeLink: 'https://github.com/Kattekly/samurai-way-main'
    },
    {
        title: "Cards",
        description: "Technology stack: react, redux, react-redux, redux-thunk, react-router-dom, typescript, material-UI",
        img: cardsImage,
        siteLink: 'https://Kattekly.github.io/Cards',
        codeLink: 'https://github.com/Kattekly/Cards'
    },
   /* {
        title: "Counter",
        description: "Technology stack: react, redux, react-redux, redux-thunk, react-router-dom, typescript",
        img: counterImage,
        siteLink: '',
        codeLink: ''
    },*/
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