import React, {useState} from 'react';
import classNames from 'classnames/bind';
import styles from './Projects.module.scss';
import Card from '@UI/Card/Card';
import {useTranslation} from 'react-i18next';
import PwcIcon from '../../public/icons/projects/pwc.png'
import SurdoIcon from '../../public/icons/projects/surdo.png'
import SkillmapsIcon from '../../public/icons/projects/skillmaps.png'
import CarSharingIcon from '../../public/icons/projects/carSharing.png'
import MechanicaIcon from '../../public/icons/projects/mechanica.png'

import {Modal} from 'antd';

const cx = classNames.bind(styles);

const Projects = () => {
    const [modalPwcOpen, setModalPwcOpen] = useState(false);
    const [modalSurdoclassOpen, setModalSurdoclassOpen] = useState(false);
    const [modalSkillmapsOpen, setModalSkillmapsOpen] = useState(false);
    const [modalCarSharingOpen, setModalCarSharingOpen] = useState(false);
    const [modalMechanicaOpen, setModalMechanicaOpen] = useState(false);

    const {t} = useTranslation();

    return (
        <div className={cx('projects')}>
            <div className={cx('projects__title')}>{t('projects')}</div>
            <div className={cx('projects__wrapper')}>

                <Card image={PwcIcon.src} title={'PWC'} label={t('pwc-title-description')}
                      onClick={() => setModalPwcOpen(true)}/>
                <Card image={SurdoIcon.src} title={'Surdoclass'} label={t('surdoclass-title-description')}
                      onClick={() => setModalSurdoclassOpen(true)}/>

                <Card image={SkillmapsIcon.src} title={'Skillmaps'} label={t('pwc-title-description')}
                      onClick={() => setModalSkillmapsOpen(true)}/>
                <Card image={CarSharingIcon.src} title={'Car-sharing'} label={t('car-sharing-title-description')}
                      onClick={() => setModalCarSharingOpen(true)}/>
                <Card image={MechanicaIcon.src} title={'Mechanica'} label={t('mechanica-title-description')}
                      onClick={() => setModalMechanicaOpen(true)}/>

                <Modal
                    className={cx('modal')}
                    visible={modalPwcOpen}
                    onOk={() => setModalPwcOpen(false)}
                    onCancel={() => setModalPwcOpen(false)}
                >
                    <h3>PWC - project</h3>
                    <div className={cx('experienceModal')}>
                        <img src={PwcIcon.src} alt="" className={cx('experienceModal__image')}/>
                        <div className={cx('experienceModal__wrapper')}>
                            <p>{t('pwc-description')}</p>
                            <p style={{fontWeight: 600}}>{t('pwc-involvement')}</p>
                            <p>{t('pwc-involvement-description')}</p>
                            <p style={{fontWeight: 600}}>{t('pwc-used-technologies')}</p>
                            <p>{t('pwc-technologies')}</p>
                            <p style={{fontWeight: 600}}>{t('pwc-completed-tasks')}</p>
                            <p>{t('pwc-tasks')}</p>
                        </div>
                    </div>

                </Modal>
                <Modal
                    className={cx('modal')}
                    visible={modalSurdoclassOpen}
                    onOk={() => setModalSurdoclassOpen(false)}
                    onCancel={() => setModalSurdoclassOpen(false)}
                >
                    <h3>Surdoclass - project</h3>
                    <div className={cx('experienceModal')}>
                        <img src={SurdoIcon.src} alt="" className={cx('experienceModal__image')}/>
                        <div className={cx('experienceModal__wrapper')}>
                            <p>{t('surdoclass-description')}</p>
                            <p style={{fontWeight: 600}}>{t('surdoclass-involvement')}</p>
                            <p>{t('surdoclass-involvement-description')}</p>
                            <p style={{fontWeight: 600}}>{t('surdoclass-used-technologies')}</p>
                            <p>{t('surdoclass-technologies')}</p>
                            <p style={{fontWeight: 600}}>{t('surdoclass-completed-tasks')}</p>
                            <p>{t('surdoclass-tasks')}</p>
                        </div>
                    </div>
                </Modal>

                <Modal
                    className={cx('modal')}
                    visible={modalSkillmapsOpen}
                    onOk={() => setModalSkillmapsOpen(false)}
                    onCancel={() => setModalSkillmapsOpen(false)}
                >
                    <h3>Skillmaps - project</h3>
                    <div className={cx('experienceModal')}>
                        <img src={SkillmapsIcon.src} alt="" className={cx('experienceModal__image')}/>
                        <div className={cx('experienceModal__wrapper')}>
                            <p>{t('skillmaps-description')}</p>
                            <p style={{fontWeight: 600}}>{t('skillmaps-involvement')}</p>
                            <p>{t('skillmaps-involvement-description')}</p>
                            <p style={{fontWeight: 600}}>{t('skillmaps-used-technologies')}</p>
                            <p>{t('skillmaps-technologies')}</p>
                            <p style={{fontWeight: 600}}>{t('skillmaps-completed-tasks')}</p>
                            <p>{t('skillmaps-tasks')}</p>
                        </div>
                    </div>
                </Modal>

                <Modal
                    className={cx('modal')}
                    visible={modalCarSharingOpen}
                    onOk={() => setModalCarSharingOpen(false)}
                    onCancel={() => setModalCarSharingOpen(false)}
                >
                    <h3>CarSharing - project</h3>
                    <div className={cx('experienceModal')}>
                        <img src={CarSharingIcon.src} alt="" className={cx('experienceModal__image')}/>
                        <div className={cx('experienceModal__wrapper')}>
                            <p>{t('car-sharing-description')}</p>
                            <p style={{fontWeight: 600}}>{t('car-sharing-involvement')}</p>
                            <p>{t('car-sharing-involvement-description')}</p>
                            <p style={{fontWeight: 600}}>{t('car-sharing-used-technologies')}</p>
                            <p>{t('car-sharing-technologies')}</p>
                            <p style={{fontWeight: 600}}>{t('car-sharing-completed-tasks')}</p>
                            <p>{t('car-sharing-tasks')}</p>
                        </div>
                    </div>
                </Modal>

                <Modal
                    className={cx('modal')}
                    visible={modalMechanicaOpen}
                    onOk={() => setModalMechanicaOpen(false)}
                    onCancel={() => setModalMechanicaOpen(false)}
                >
                    <h3>Mechanica - project</h3>
                    <div className={cx('experienceModal')}>
                        <img src={MechanicaIcon.src} alt="" className={cx('experienceModal__image')}/>
                        <div className={cx('experienceModal__wrapper')}>
                            <p>{t('mechanica-description')}</p>
                            <p style={{fontWeight: 600}}>{t('mechanica-involvement')}</p>
                            <p>{t('mechanica-involvement-description')}</p>
                            <p style={{fontWeight: 600}}>{t('mechanica-used-technologies')}</p>
                            <p>{t('mechanica-technologies')}</p>
                            <p style={{fontWeight: 600}}>{t('mechanica-completed-tasks')}</p>
                            <p>{t('mechanica-tasks')}</p>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default Projects;