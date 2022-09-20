import React from 'react';
import classNames from 'classnames/bind';
import styles from './Description.module.scss';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

const Description = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('description')}>
      <p>{t('description1')}</p>
      <p>{t('description2')}</p>
      <p>{t('description3')}</p>
    </div>
  );
};

export default Description;
