import React from 'react';
import s from './Title.module.scss'

type TitleType = {
    text: string
}

const Title: React.FC<TitleType> = ({text}) => {
    return (
        <div className={s.title}>
            <h2>{text}</h2>
        </div>
    );
};

export default Title;