// ** React Imports
import React from 'react';

// ** Imports i18n
import {useTranslation} from "react-i18next";

// ** Styles Imports
import classNames from 'classnames/bind';
import styles from './Accounts.module.scss';

// ** Icons Imports
import GitHub from '../../public/icons/social_icons/github.png';
import Habr from '../../public/icons/social_icons/habr_logo.png';

// ** Components Imports
import Card from '@UI/Card/Card';

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