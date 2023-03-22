import React from 'react';
import s from './Main.module.scss'
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";
import {Particle} from "./Particle";
import {Button} from "../Common/Components/Button/Button";

export const Main = () => {
    return (
        <div id={'main'} className={s.mainBlock}>
            <Particle/>
            <div className={s.container}>
                <div className={s.about}>
                    <Fade cascade>
                        <span>HELLO, MY NAME IS</span>
                        <h1> {'Ekaterina Kozachenko'} </h1>
                        <ReactTypingEffect text={'I AM FRONTEND DEVELOPER'}/>
                    </Fade>
                    <div className={s.button}>
                        <Button title={'Download CV'}/>
                    </div>

                </div>
                <div className={s.photo}>
                    <div className={s.image}></div>
                </div>
            </div>
        </div>
    );
}