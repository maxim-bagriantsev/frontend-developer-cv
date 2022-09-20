import React from 'react';
import classNames from 'classnames/bind';
import styles from './Experience.module.scss';
import Card from '@UI/Card/Card';
import { useTranslation } from 'react-i18next';
import MechanicaIcon from '../../public/images/mechanica.png'
import RosneftIcon from '../../public/images/rosneft.jpg'
const cx = classNames.bind(styles);

const Experience = () => {

  const { t } = useTranslation();
  
  return (
    <div className={cx('experience')}>
      <div className={cx('experience__title')}>{t('experience')}</div>
      <div className={cx('experience__wrapper')}>
        <Card image={MechanicaIcon.src} title={'Mechanica'} label={'2022 - now'}/>
        <Card image={RosneftIcon.src} title={'Rosneft'} label={'2010 - 2022'}/>
      </div>
    </div>
  );
};

export default Experience;