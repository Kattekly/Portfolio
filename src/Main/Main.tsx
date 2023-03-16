import React from 'react';
import s from './Main.module.scss'
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";
import {Particle} from "./Particle";
import Tilt from 'react-parallax-tilt';
import mainPhoto from "../Assets/Images/foto2.jpg"
import styleContainer from './../Common/Styles/Container.module.css'

const Main = () => {

    return (

        <div id={'main'} >
            <Particle />
            <div className={s.mainBlock}>
                <div className={styleContainer.container}>
                    <div className={s.about}>
                        <Fade cascade>
                        <span>HELLO, MY NAME IS</span>
                        <h1> {'Ekaterina Kozachenko'} </h1>
                        <ReactTypingEffect text={'FRONTEND DEVELOPER'}/>
                        </Fade>
                    </div>
                    <Tilt>
                        <img src={mainPhoto} className={s.photo} alt='portfolioMainImg'/>
                    </Tilt>
                </div>
            </div>
           {/* <section className={`${s.mainContainer} ${styleContainer.container}`}>
                <Particle/>
                <div className={s.about}>
                    <Fade cascade>
                        <span> HELLO, MY NAME IS </span>
                        <h1> {'Ekaterina Kozachenko'} </h1>
                        <ReactTypingEffect text={'FRONTEND DEVELOPER'}/>
                    </Fade>
                </div>
                <Tilt>
                    <img src={mainPhoto} className={s.photo} alt='portfolioMainImg'/>
                </Tilt>

            </section>*/}
        </div>

    );
};

export default Main;