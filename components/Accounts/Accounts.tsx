import React from 'react';
import classNames from 'classnames/bind';
import styles from './Accounts.module.scss';
import GitHub from '../../public/icons/social_icons/github_logo.png';
import Habr from '../../public/icons/social_icons/habr_logo.png';
import Card from '@UI/Card/Card';
import {useTranslation} from "react-i18next";

const cx = classNames.bind(styles);

const Accounts = () => {
    const {t} = useTranslation();
    return (
        <div className={cx('accounts')}>
            <div className={cx('accounts__title')}>{t('accounts')}</div>
            <div className={cx('accounts__wrapper')}>
                <Card link={'https://github.com/maxim-bagriantsev'} image={GitHub.src} label={'GitHub account'}/>
                <Card link={'https://habr.com/ru/users/bagryancevm/posts/'} image={Habr.src} label={'Habr account'}/>
            </div>
        </div>
    );
};

export default Accounts;