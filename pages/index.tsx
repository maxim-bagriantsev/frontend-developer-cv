// ** React Imports
import React from 'react';

// ** Styles
import classNames from 'classnames/bind';
import styles from './index.module.scss';

// ** Sky
import ModuleSky from '@components/sky/ModuleSky';
import Hero from '@components/Hero/Hero';
import Header from '@components/Header/Header';

import backgroundImage from '../public/images/main-background2.jpg';
import Description from '@components/Description/Description';
import Accounts from '@components/Accounts/Accounts';
import Experience from "@components/Experience/Experience";
import Projects from "@components/Projects/Projects";
import Skills from "@components/Skills/Skills";

const cx = classNames.bind(styles);


const MainPage = () => {

    return (
        <main className={cx('main')}>
            <div className={cx('main__background')}/>
            <ModuleSky/>
            <Header/>

            <section>
                <Hero/>
            </section>

            <section className={cx('description')}>
                <Description/>
            </section>
            <section className={cx('accounts')}>
                <Accounts/>
            </section>
            <section className={cx('experience')}>
                <Experience/>
            </section>
            <section className={cx('projects')}>
                <Projects/>
            </section>
            <section className={cx('skills')}>
                <Skills/>
            </section>
            <section className={cx('education')}>
                education
            </section>
            <section className={cx('languages')}>
                languages
            </section>
            <footer>
                footer
            </footer>
        </main>
    );
};
export default MainPage;

