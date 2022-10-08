// ** React Imports
import React from 'react';

// ** Styles Imports
import classNames from "classnames/bind";
import styles from "./Skill.module.scss";

const cx = classNames.bind(styles);

type SkillType = {
    key: number
    img: string
    title: string
    link: string
}


const Skill = (props: SkillType) => {
    const {img, title, link} = props

    return (
        <a className={cx('skill')} href={link} target='_blank'>
            <img className={cx('skill__icon')} src={img} alt="image"/>
            <p className={cx('skill__title')}>{title}</p>
        </a>
    );
};

export default Skill;