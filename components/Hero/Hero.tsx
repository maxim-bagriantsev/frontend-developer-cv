import React from 'react';
import classNames from 'classnames/bind';
import styles from './Hero.module.scss';
import 'antd/dist/antd.css';
import {Image} from 'antd';
import {useTranslation} from 'react-i18next';
import telegram from '../../public/icons/social_icons/telegram.png'
import email from '../../public/icons/social_icons/email.png'
import {socialItems} from "@components/Hero/constants";
const cx = classNames.bind(styles);


const Hero = () => {
    const {t} = useTranslation();

    return (
        <div className={cx('hero')}>
            <div className={cx('hero__wrapperImage')}>
                <Image
                    width={300}
                    src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                    rootClassName={cx('hero__wrapperImage_image')}
                />
            </div>
            <div className={cx('hero__description')}>
                <h1 className={cx('title')}>{t('fullName')}</h1>
                <div className={cx('subTitle')}>
                    <h3 className={cx('subTitle__directions')}>{t('directions')}</h3>
                    <h3 className={cx('subTitle__stack')}>{t('stack')}</h3>
                </div>

                <div className={cx('contacts')}>
                    {socialItems.map(item => (<div className={cx('contacts__item')}>
                        <img className={cx('contacts__icon')} src={item.icon.src} alt="telegram"/>
                        <a type='m' target={'_blank'} href={item.link} className={cx('contacts__item_link')}>{item.label}</a>
                    </div>) )}
                </div>
            </div>


        </div>
    );
};

export default Hero;