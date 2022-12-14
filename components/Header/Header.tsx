// ** React Imports
import React, {useState} from 'react';

// ** Imports i18n
import {useTranslation} from 'react-i18next';

// ** Styles Imports
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

// ** Antd Imports
import {ChangeLanguage} from '@components/ChangeLanguage/ChangeLanguage';

// ** Icons Imports
import GitHubIcon from '../../public/icons/social_icons/github.png';
import PdfIcon from '../../public/icons/social_icons/pdf.png';

const cx = classNames.bind(styles);


const Header = () => {

    const [isActiveEn, setIsActiveEn] = useState(false);
    const [isActiveRu, setIsActiveRu] = useState(true);

    const {i18n} = useTranslation();

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
        <header className={cx('header')} id={'header'}>
            <div className={cx('header__wrapper')}>
                <ChangeLanguage changeLanguage={changeLanguage} isActiveEn={isActiveEn} isActiveRu={isActiveRu}/>
                <a
                    href='/Bagryancev_Maxim_VC.pdf'
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={PdfIcon.src}
                         alt="pdf"
                         className={cx('icon')}/>
                </a>
                <a
                    className={cx('github')}
                    href="https://github.com/maxim-bagriantsev/frontend-developer-cv"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={GitHubIcon.src}
                         alt="github"
                         className={cx('icon')}/>
                </a>
            </div>
        </header>
    );
};

export default Header;