// ** React Imports
import React, {useState} from 'react';

// ** Imports i18n
import {useTranslation} from 'react-i18next';

// ** Styles Imports
import classNames from 'classnames/bind';
import styles from './Experience.module.scss';

// ** Antd Imports
import {Modal} from 'antd';

// ** Icons Imports

import MechanicaIcon from '../../public/images/mechanica.png'
import RosneftIcon from '../../public/images/rosneft.jpg'

// ** Components Imports
import Card from '@UI/Card/Card';

const cx = classNames.bind(styles);

const Experience = () => {
    const [modalMechanicaOpen, setModalMechanicaOpen] = useState(false);
    const [modalRosneftOpen, setModalRosneftOpen] = useState(false);

    const {t} = useTranslation();

    return (
        <div className={cx('experience')}>
            <div className={cx('experience__title')}>{t('experience')}</div>
            <div className={cx('experience__wrapper')}>
                <Card image={MechanicaIcon.src} title={'IT-company'} label={'2020 - now'}
                      onClick={() => setModalMechanicaOpen(true)}/>
                <Card image={RosneftIcon.src} title={'Rosneft'} label={'2010 - 2022'}
                      onClick={() => setModalRosneftOpen(true)}/>
                <Modal
                    className={cx('modalMech')}
                    visible={modalMechanicaOpen}
                    onOk={() => setModalMechanicaOpen(false)}
                    onCancel={() => setModalMechanicaOpen(false)}
                >
                    <h3>Mechanica</h3>
                    <div className={cx('experienceModal')}>
                        <img src={MechanicaIcon.src} alt="" className={cx('experienceModal__image')}/>
                        <div className={cx('experienceModal__wrapper')}>
                            <p>{t('mechanica')}</p>
                            <p>{t('mechDescription')}</p>
                        </div>
                    </div>

                </Modal>
                <Modal
                    className={cx('modalMech')}
                    visible={modalRosneftOpen}
                    onOk={() => setModalRosneftOpen(false)}
                    onCancel={() => setModalRosneftOpen(false)}
                >
                    <h3>Rosneft</h3>
                    <div className={cx('experienceModal')}>
                        <img src={RosneftIcon.src} alt="" className={cx('experienceModal__image')}/>
                        <div className={cx('experienceModal__wrapper')}>
                            <p>March 2011 - January 2022</p>
                            <p>{t('rosneftDescription')}</p>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default Experience;