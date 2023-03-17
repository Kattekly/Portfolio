import React from 'react';
import styleContainer from "../Common/Styles/Container.module.css";
import s from "./DistantWork.module.scss";
import {Button} from "../Common/Components/Button/Button";
import {animateScroll} from "react-scroll";

export const DistantWork = () => {
    return (
        <div className={s.block}>
            <div className={`${styleContainer.container} ${s.workContainer}`}>
                <h2 className={s.text}>I AM AVAILABLE FOR FREELANCE AND REMOTE WORK</h2>
                <Button title={'Employ'} onClick={() => animateScroll.scrollToBottom()}>
                    default
                </Button>
            </div>
        </div>
    );
};
