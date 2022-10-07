// ** React Imports
import React from 'react';

// ** Styles Imports
import classNames from 'classnames/bind';
import styles from './index.module.scss';

// ** Sky Imports
import ModuleSky from '@components/sky/ModuleSky';

// ** Components Imports
import Hero from '@components/Hero/Hero';
import Header from '@components/Header/Header';
import Description from '@components/Description/Description';
import Accounts from '@components/Accounts/Accounts';
import Experience from "@components/Experience/Experience";
import Projects from "@components/Projects/Projects";
import Skills from "@components/Skills/Skills";
import Education from "@components/Education/Education";
import Languages from "@components/Languages/Languages";
import Footer from "@components/Footer/Footer";

const cx = classNames.bind(styles);


const MainPage = () => {
    const [scroll, setScroll] = React.useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };
    console.log(scroll)
    const handleUpButton = () => {
        window.scrollTo(0, 0);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
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
                <Education/>
            </section>
            <section className={cx('languages')}>
                <Languages/>
            </section>
            <footer>
                <Footer/>
            </footer>
        </main>
    );
};
export default MainPage;

