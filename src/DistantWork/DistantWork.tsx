import React from 'react';
import styleContainer from "../Common/Styles/Container.module.css";
import s from "./DistantWork.module.scss";
import {Button} from "../Common/Components/Button/Button";
import { Link} from "react-scroll";

export const DistantWork = () => {
    return (
        <div className={s.block}>
            <div className={`${styleContainer.container} ${s.workContainer}`}>
                <h2 className={s.text}>I AM AVAILABLE FOR FREELANCE AND REMOTE WORK</h2>
                <Link to="contactForm"
                      activeClass={s.active}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={1000}
                      className={s.link}>
                    <Button title={'Hire'}>
                        default
                    </Button>
                </Link>
            </div>
        </div>
    );
};
