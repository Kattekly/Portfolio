import React from 'react';
import s from './Main.module.scss'
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";
import {Particle} from "./Particle";
import Tilt from 'react-parallax-tilt';
import mainPhoto from "../Assets/Images/foto2.jpg"
import styleContainer from './../Common/Styles/Container.module.css'

function Main() {
    return (
        <div id={'main'} className={s.mainBlock}>
            <div className={s.container}>
                <Particle/>
                <div className={s.about}>
                    <Fade cascade>
                        <span>HELLO, MY NAME IS</span>
                        <h1> {'Ekaterina Kozachenko'} </h1>
                        <ReactTypingEffect text={'FRONTEND DEVELOPER'}/>
                    </Fade>
                </div>
                <div className={s.photo}>
                        <div className={s.image}></div>
                </div>

            </div>
        </div>
    );
}


// const Main = () => {
//
//     return (
//         <div id={'main'} >
//             <div className={s.mainContainer}>
//                     <Particle />
//                 <div className={styleContainer.container}>
//                     <div className={s.about}>
//                         <Fade cascade>
//                         <span>HELLO, MY NAME IS</span>
//                         <h1> {'Ekaterina Kozachenko'} </h1>
//                         <ReactTypingEffect text={'FRONTEND DEVELOPER'}/>
//                         </Fade>
//                     </div>
//                     <Tilt>
//                         <img src={mainPhoto} className={s.photo} alt='portfolioMainImg'/>
//                     </Tilt>
//                 </div>
//             </div>
//         </div>
//
//     );
// };

export default Main;