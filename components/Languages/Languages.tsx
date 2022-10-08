// ** React Imports
import React from 'react';

// ** Imports i18n
import {useTranslation} from 'react-i18next';

// ** Styles Imports
import classNames from 'classnames/bind';
import styles from './Languages.module.scss';

const cx = classNames.bind(styles);


const Languages = () => {

    const {t} = useTranslation();

    return (
        <div className={cx('languages')}>
            <div className={cx('languages__title')}>{t('languages')}</div>
            <p><span>{t('languages-russia')}</span>{t('languages-russia-des')}</p>
            <p><span>{t('languages-english')}</span>{t('languages-english-des')}</p>
        </div>
    );
};

export default Languages;