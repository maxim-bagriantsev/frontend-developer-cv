import React, {ReactElement} from 'react';
import {IconProps} from '@lib/types/types';

export default function Icon(props: IconProps): ReactElement {
    const {symbol, className = '', id} = props;

    switch (symbol) {
        case 'telegram':
            return (
                <div className={className}>
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
                <div className={className}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><title>email</title>
                        <g id="email">
                            <g id="email-2" data-name="email">
                                <rect x="2" y="20" width="48" height="26" fill="#1aa6b8"/>
                                <polygon points="50 20.06 2 20.06 26 2 50 20.06" fill="#24b9cc"/>
                                <polygon points="39.12 6.09 5.71 6.09 5.71 38.02 46.29 38.02 46.29 13.83 39.12 6.09"
                                         fill="#eae8e8"/>
                                <polygon points="39.12 6.09 39.12 13.83 46.29 13.83 39.12 6.09" fill="#d7d4d4"/>
                                <polygon points="50 20 50 50 26 34 50 20" fill="#80deea"/>
                                <polygon points="26 34 2 50 2 20 26 34" fill="#80deea"/>
                                <polygon points="50 50 2 50 26 34 50 50" fill="#5cd4e3"/>
                                <path
                                    d="M26,12a8,8,0,1,0,5.19,14.08l-1-1.22A6.4,6.4,0,1,1,32.4,20v1.2a1.2,1.2,0,0,1-2.4,0V16H28.4v.82A4,4,0,0,0,26,16a4,4,0,1,0,2.88,6.76A2.79,2.79,0,0,0,34,21.6h0V20A8,8,0,0,0,26,12ZM26,22.4A2.4,2.4,0,1,1,28.4,20,2.4,2.4,0,0,1,26,22.4Z"
                                    fill="#ff6e40"/>
                            </g>
                        </g>
                    </svg>
                </div>
            );
            break;

        default:
            return <></>;
    }
}
