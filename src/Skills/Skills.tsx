import React from 'react';
import s from './Skills.module.scss'
import styleContainer from "../Common/Styles/Container.module.css";
import Skill from "./Skill/Skill";
import Title from "../Common/Components/Title/Title";
import react from '../Assets/Images/react_logo.png'
import ts from '../Assets/Images/typescript.png'
import html from '../Assets/Images/html.png'
import css from '../Assets/Images/css.png'
import git from '../Assets/Images/Git.png'
import redux from '../Assets/Images/redux.png'
import restApi from '../Assets/Images/restApi.png'
import bug from '../Assets/Images/bug.png'
import materialUi from '../Assets/Images/materialUi.png'

const skills = [
    {
        title: 'React',
        description: 'Class and functional components, state & props, components life-cycle, routing, conditional rendering, HOC',
        img: react
    },
    {
        title: 'TypeScript',
        description: 'Data types, basic syntax, functions, promises, scope, event loop, async/await',
        img: ts
    },
    {
        title: 'HTML',
        description: 'Fundamentals HTML tags, form and validation, semantic HTML',
        img: html
    },
    {
        title: 'CSS',
        description: 'Positioning, box modal, selectors, flexbox, media queries, transformation & animation',
        img: css
    },
    {
        title: 'Git',
        description: 'Creating new repositories, push- and pull-request, merge, repos cloning',
        img: git
    },
    {
        title: 'Redux',
        description: 'Actions & thunks, reducer, context API, store, FLUX',
        img: redux
    },
    {
        title: 'Rest API',
        description: 'HTTPS requests, URI parameters, Query parameters, status codes, axios library',
        img: restApi
    },
    {
        title: 'Testing and Debugging',
        description: 'TDD, Story book, Unit tests, Snapshot',
        img: bug
    },
    {
        title: 'Material Ui',
        description: 'Material-UI components, Icons, Customizable themes',
        img: materialUi
    },
]


export const Skills = () => {
    return (
        <div id={'skills'} className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={'skills'}/>
                <div className={s.skills}>
                    {skills.map(el => {
                        return <Skill key={el.title} title={el.title} description={el.description} img={el.img}/>
                    })}
                </div>
            </div>
        </div>
    )
}