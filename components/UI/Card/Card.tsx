import React from 'react';
import classNames from 'classnames/bind';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);
type Card = {
  link?: string
  image?: string | undefined
  label?: string
  title?: string
}

const Card = (props: Card) => {

  const { link, image, label, title } = props;

  return (
    <a className={cx('card')} href={link} target={'_blank'} rel="noreferrer">
      <img src={image} alt="github" className={cx('card__image')} />
      <div>
        {title && <h3>{title}</h3>}
        <p>{label}</p>
      </div>

    </a>
  );
};

export default Card;