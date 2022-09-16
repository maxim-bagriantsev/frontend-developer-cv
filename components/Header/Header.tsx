// ** React Imports
import React, { useState } from 'react';

// ** Imports i18n
import { useTranslation } from 'react-i18next';

// ** Styles
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

// ** Antd
import { Button } from 'antd';

const cx = classNames.bind(styles);


const Header = () => {
  const [isActive, setIsActive] = useState();

  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <header className={cx('header')}>
      <div className={cx('header__wrapper')}>
        <div className={cx('changeLanguage')}>
          <Button type='primary' onClick={() => changeLanguage('en')} className={cx('button')}>
            EN
          </Button>
          <Button type='primary' onClick={() => changeLanguage('ru')}>
            RU
          </Button>
        </div>
      </div>

    </header>
  );
};

export default Header;