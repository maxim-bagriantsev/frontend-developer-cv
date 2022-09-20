import React from 'react';
import classNames from "classnames/bind";
import styles from "./Accounts.module.scss";
import GitHub from '../../public/icons/social_icons/github_logo.png'
import Habr from '../../public/icons/social_icons/habr_logo.png'

const cx = classNames.bind(styles);

const Accounts = () => {
    return (
        <div className={cx('accounts')}>
            <a className={cx('accounts__item')} href={'https://github.com/maxim-bagriantsev'} target={"_blank"}>
                <img src={GitHub.src} alt="github" className={cx('accounts__item_image')}/>
                <p>GitHub account</p>
            </a>
            <a className={cx('accounts__item')} href={'https://habr.com/ru/users/bagryancevm/posts/'} target={"_blank"}>
                <img src={Habr.src} alt="github" className={cx('accounts__item_image')}/>
                <p>Hubr account</p>
            </a>

        </div>
    );
};

export default Accounts;