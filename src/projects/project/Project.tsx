import React from 'react';
import s from './Project.module.css'

type ProjectsPropsType = {
    title: string
    description: string
}


const Project = (props:ProjectsPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.pic}>
                <a className={s.button}>Browse</a>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};

export default Project;