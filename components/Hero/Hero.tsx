import React from 'react';
import classNames from 'classnames/bind';
import styles from './Hero.module.scss';
import 'antd/dist/antd.css';
import { Image } from 'antd';
import { useTranslation } from 'react-i18next';
import telegram from '../../public/icons/social_icons/telegram.png';
import email from '../../public/icons/social_icons/email.png';
import phone from '../../public/icons/social_icons/phone.png';
import location from '../../public/icons/social_icons/location.png';

const cx = classNames.bind(styles);
import Avatar from '../../public/images/avatar.jpg'

const Hero = () => {

  const { t } = useTranslation();

  return (
    <div className={cx('hero')}>
      <div className={cx('hero__wrapperImage')}>
        <Image
          width={300}
          src={Avatar.src}
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
          <div  className={cx('contacts__item')}>
            <img className={cx('contacts__icon')} src={telegram.src} alt="telegram" />
            <a type="m" target={'_blank'} href={'https://t.me/MaximBagriantsev'} className={cx('contacts__item_link')}
               rel="noreferrer">{t('contactByTelegram')}</a>
          </div>
          <div  className={cx('contacts__item')}>
            <img className={cx('contacts__icon')} src={email.src} alt="email" />
            <a type="m" target={'_blank'} href={'bagryancevm@gmail.com'} className={cx('contacts__item_link')}
               rel="noreferrer">{t('sendEmail')}</a>
          </div>
          <div  className={cx('contacts__item')}>
            <img className={cx('contacts__icon')} src={phone.src} alt="phone" />
            <a type="m" target={'_blank'} href={'tel:+79639152131'} className={cx('contacts__item_link')}
               rel="noreferrer">{t('contactByPhone')}</a>
          </div>
          <div  className={cx('contacts__item')}>
            <img className={cx('contacts__icon')} src={location.src} alt="telegram" />
            <a type="m" target={'_blank'} href={'#'} className={cx('contacts__item_link')}
               rel="noreferrer">{t('location')}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;