// ** React Imports
import React from 'react';

// ** Imports i18n
import {useTranslation} from 'react-i18next';

// ** Styles Imports
import classNames from 'classnames/bind';
import styles from './Skills.module.scss';

// ** Constants Imports
import {arraySkills} from "@components/Skills/constants";

// ** Components Imports
import Skill from "@UI/Skill/Skill";

const cx = classNames.bind(styles);


const Skills = () => {


    const {t} = useTranslation();

    return (
        <div className={cx('skills')}>
            <div className={cx('skills__title')}>{t('skills')}</div>
            <div className={cx('skills__wrapper')}>
                {arraySkills.map((skill, index) => <Skill
                    key={index}
                    img={skill.img.src}
                    title={skill.title}
                    link={skill.link}
                />)}
            </div>
        </div>
    );
};

export default Skills;