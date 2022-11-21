import React from 'react';
import s from './Main.module.css'
import sCase  from '../common/styles/Case.module.css'

const Main = () => {
    return (
        <div className={s.main}>
            <div className={sCase.case}>
                <div className={s.greeting}>
                    <span>Hi There</span>
                    <h1>I am Fedar Zhdanko</h1>
                    <p>Frontend Developer.</p>
                </div>

                <div className={s.photo}>
                    Photo
                </div>
            </div>
        </div>
    );
};

export default Main;