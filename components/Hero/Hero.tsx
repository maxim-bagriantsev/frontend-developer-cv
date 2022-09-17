import React from 'react';
import classNames from 'classnames/bind';
import styles from './Hero.module.scss';
import 'antd/dist/antd.css';
import {Image} from 'antd';
import {useTranslation} from 'react-i18next';
import Icon from "@UI/Icon/Icon";
import {SocialLink} from "@components/SocialLink/SocialLink";

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
                    <SocialLink />
                    {/*<div className={cx('contacts__item')}>*/}
                    {/*    <div className={cx('icon')}><Icon symbol={'telegram'}/></div>*/}
                    {/*    Telegram*/}
                    {/*</div>*/}
                    <div>
                        Telegram
                    </div>
                    <div>
                        Telegram
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Hero;