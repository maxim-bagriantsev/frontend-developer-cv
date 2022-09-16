import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const MainPage = () => {

  return (
    <main className={cx('main')}>
      <section className={cx('hero')}>
        Hero
      </section>
      <section className={cx('description')}>
        description
      </section>
      <section className={cx('accounts')}>
        accounts
      </section>
      <section className={cx('experience')}>
        experience
      </section>
      <section className={cx('projects')}>
        projects
      </section>
      <section className={cx('skills')}>
        skills
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

