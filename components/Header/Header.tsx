// ** React Imports
import React, {useState} from 'react';

// ** Imports i18n
import {useTranslation} from 'react-i18next';

// ** Styles
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

// ** Antd
import {ChangeLanguage} from '@components/ChangeLanguage/ChangeLanguage';

// ** Icons
import GitHubIcon from '../../public/icons/social_icons/github.png';
import PdfIcon from '../../public/icons/social_icons/pdf.png';


const cx = classNames.bind(styles);


const Header = () => {
    const [isActiveEn, setIsActiveEn] = useState(true);
    const [isActiveRu, setIsActiveRu] = useState(false);

    const {t, i18n} = useTranslation();

    const changeLanguage = (language: string) => {
        if (language === 'ru') {
            setIsActiveRu(true);
            setIsActiveEn(false);
        }
        if (language === 'en') {
            setIsActiveEn(true);
            setIsActiveRu(false);
        }
        i18n.changeLanguage(language);
    };
    return (
        <header className={cx('header')}>
            <div className={cx('header__wrapper')}>
                <ChangeLanguage changeLanguage={changeLanguage} isActiveEn={isActiveEn} isActiveRu={isActiveRu}/>
                <a href="https://github.com/maxim-bagriantsev/frontend-developer-cv" target="_blank" rel="noreferrer">
                    <img src={PdfIcon.src}
                         alt="pdf"
                         className={cx('icon')}/>
                </a>
                <a href="https://github.com/maxim-bagriantsev/frontend-developer-cv" target="_blank" rel="noreferrer">
                    <img src={GitHubIcon.src}
                         alt="github"
                         className={cx('icon')}/>
                </a>
            </div>

        </header>
    );
};

export default Header;