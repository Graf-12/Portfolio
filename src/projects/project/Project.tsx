import React from 'react';
import s from './Project.module.css'

type ProjectsPropsType = {
    title: string
    description: string
}


const Project = (props:ProjectsPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.pic}>Pic</div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
};

export default Project;