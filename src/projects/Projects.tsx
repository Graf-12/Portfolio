import React from 'react';
import s from './Projects.module.css'
import sCase from '../common/styles/Case.module.css'
import Project from "./project/Project";

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sCase.case} ${s.projectsCase}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    <Project title={'Todolist'} description={'Todolist project description'}/>
                    <Project title={'Counter'} description={'Counter project description'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;