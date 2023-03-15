import React from 'react';
import s from './Project.module.scss'
import {Button} from "../../Common/Components/Button/Button";

type WorkPropsType = {
    title: string
    description: string
    img: string
    siteLink: string
    codeLink: string
}

export const Project = ({title, description, img, siteLink, codeLink}: WorkPropsType) => {
    const backgroundImage = {
        backgroundImage: `url(${img})`
    }
    return (
        <>
            <div className={s.project}>
                <div className={s.projectImage} style={backgroundImage}>
                    <Button title={'Site'} onClick={() => {
                        window.location.href = `${siteLink}`
                    }}>
                        projects
                    </Button>
                    <Button title={'Code'} onClick={() => {
                        window.location.href = `${codeLink}`
                    }}>
                        projects
                    </Button>
                </div>
                <div className={s.textBlock}>
                    <h3>{title}</h3>
                    <div className={s.description}>
                        {description}
                    </div>
                </div>
            </div>
        </>
    )
}