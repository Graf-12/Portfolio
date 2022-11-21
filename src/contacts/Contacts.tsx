import React from 'react';
import sCase from '../common/styles/Case.module.css'
import s from './Contacts.module.css'


const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sCase.case} ${s.contactsCase}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.form}>
                    <div>
                        <input/>
                    </div>
                    <div>
                        <input/>
                    </div>
                    <textarea rows={4} cols={21}></textarea>
                </form>
                <button className={s.button}>Send</button>
            </div>
        </div>
    );
};

export default Contacts;