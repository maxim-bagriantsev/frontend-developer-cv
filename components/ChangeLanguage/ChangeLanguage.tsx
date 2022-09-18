import React from 'react';
import {Button} from "antd";
import classNames from "classnames/bind";
import styles from "./ChangeLanguage.module.scss";

const cx = classNames.bind(styles);

type ChangeLanguage = {
    changeLanguage: (e: string) => void
    isActiveEn: boolean
    isActiveRu: boolean
}

export const ChangeLanguage = (props: ChangeLanguage) => {
    const {changeLanguage, isActiveEn, isActiveRu} = props
    return (
        <div className={cx('changeLanguage')}>
            <Button type='primary' onClick={() => changeLanguage('en')}
                    className={cx('button', {['button__active']: isActiveEn})}>
                <p>EN</p>
            </Button>
            <Button type='primary' onClick={() => changeLanguage('ru')}
                    className={cx('button', {['button__active']: isActiveRu})}>
                <p>RU</p>
            </Button>
        </div>
    );
};

