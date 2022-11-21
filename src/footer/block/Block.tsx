import React from 'react';
import s from './Block.module.css'

type BlockPropsType = {
    class: string
}

const Block = (props:BlockPropsType) => {
    return (
        <div className={`${s.block} ${props.class === 'white' ? s.blockWhite : s.blockGrey}`}>

        </div>
    );
};

export default Block;