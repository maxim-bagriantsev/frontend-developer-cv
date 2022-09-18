import React, {ReactElement} from 'react';
import {IconProps} from '@lib/types/types';
import classNames from "classnames/bind";
import styles from "./Icon.module.scss";

const cx = classNames.bind(styles);

export default function Icon(props: IconProps): ReactElement {
    const {symbol, className = '', id} = props;

    switch (symbol) {
        case 'telegram':
            return (
                <div className={cx(className)}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         aria-label="Telegram" role="img"
                         viewBox="0 0 512 512">
                        <rect
                            width="512" height="512"
                            rx="15%"
                            fill="#37aee2"/>
                        <path fill="#c8daea" d="M199 404c-11 0-10-4-13-14l-32-105 245-144"/>
                        <path fill="#a9c9dd" d="M199 404c7 0 11-4 16-8l45-43-56-34"/>
                        <path fill="#f6fbfe"
                              d="M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"/>
                    </svg>
                </div>
            );
            break;

        case 'email':
            return (
                <div className={cx(className)}>
                </div>
            );
            break;

        default:
            return <></>;
    }
}
