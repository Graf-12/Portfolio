import React from 'react';
import s from './Footer.module.css'
import sCase from '../common/styles/Case.module.css'
import Block from "./block/Block";



const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${s.footerCase} ${sCase.case}`}>
                <h2 className={s.title}>Fedar Zhdanko</h2>
                <div className={s.blocks}>
                    <Block class={'grey'}/>
                    <Block class={'white'}/>
                    <Block class={'grey'}/>
                    <Block class={'white'}/>
                    <Block class={'grey'}/>
                    <Block class={'white'}/>
                    <Block class={'grey'}/>
                </div>

                <span className={s.copyright}>© 2022 All rights reserved</span>

            </div>
        </div>
    );
};

export default Footer;