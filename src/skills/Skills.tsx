import React from 'react';
import s from './Skills.module.css'
import sCase from '../common/styles/Case.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${s.skillsCase} ${sCase.case}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'JS description'}/>
                    <Skill title={'React'} description={'React description'}/>
                    <Skill title={'CSS'} description={'CSS description'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;