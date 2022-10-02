import React from 'react';
import classNames from 'classnames/bind';
import styles from './Education.module.scss';
import {useTranslation} from 'react-i18next';

const cx = classNames.bind(styles);

const Education = () => {

    const {t} = useTranslation();

    return (
        <div className={cx('education')}>
            <div className={cx('education__title')}>{t('education')}</div>
            <div className={cx('education__item')}>
                <p className={cx('education__item_title')}>{t('year')}</p>
                <p className={cx('education__item_institution')}>
                    <span>{t('institution')}</span>{t('institution_description')}</p>
                <p className={cx('education__item_faculty')}><span>{t('faculty')}</span>{t('faculty__description')}</p>
            </div>

            <div className={cx('education__item')}>
                <p className={cx('education__item_title')}>{t('year-higher')}</p>
                <p className={cx('education__item_institution')}>
                    <span>{t('institution-higher')}</span>{t('institution_description-higher')}</p>
                <p className={cx('education__item_faculty')}>
                    <span>{t('faculty-higher')}</span>{t('faculty__description-higher')}</p>
            </div>
        </div>
    );
};

export default Education;