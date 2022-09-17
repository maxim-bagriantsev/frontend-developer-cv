import React from 'react';
import Icon from "@UI/Icon/Icon";
import classNames from "classnames/bind";
import styles from "./SocialLink.module.scss";

const cx = classNames.bind(styles);
type SocialLink={
    link: string
}
export const SocialLink = (props: SocialLink) => {
    return (
        <div className={cx('socialLink')}>
            <Icon symbol={'telegram'} className={cx('icon')}/>
            Telegram
        </div>
    );
};

