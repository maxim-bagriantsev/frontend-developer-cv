// ** React Imports
import React from 'react';

// ** Styles Imports
import styles from './Footer.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);


const Footer = () => {
  
    return (
        <div className={cx('footer')}>BagryancevM CV, 2022</div>
    );
};

export default Footer;