import React from 'react';
import classNames from 'classnames/bind';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);
type Card = {
    link?: string
    image?: string | undefined
    label?: string
    title?: string
    onClick?: () => void
}

const Card = (props: Card) => {

    const {link, image, label, title, onClick} = props;

    return (
        <a
            className={cx('card')}
            onClick={onClick}
            href={link} target={'_blank'}
            rel="noreferrer"
        >
            <img src={image} alt="github" className={cx('card__image')}/>
            <div className={cx('card__description')}>
                {title && <h3>{title}</h3>}
                <p>{label}</p>
            </div>

        </a>
    );
};

export default Card;