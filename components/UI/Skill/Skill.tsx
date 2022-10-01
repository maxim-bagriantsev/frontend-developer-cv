import React from 'react';
import classNames from "classnames/bind";
import styles from "./Skill.module.scss";
import JsIcon from '../../../public/icons/skills/js.png'

const cx = classNames.bind(styles);

type SkillType = {
    key: number
    img: string
    title: string
}

const Skill = (props: SkillType) => {
    const {img, title} = props

    return (
        <a className={cx('skill')}>
            <img className={cx('skill__icon')} src={img} alt=""/>
            <p className={cx('skill__title')}>{title}</p>
        </a>
    );
};

export default Skill;