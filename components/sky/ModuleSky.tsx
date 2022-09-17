import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ModuleSky.module.scss';

// @ts-ignore
import Sky from 'react-sky';

const cx = classNames.bind(styles);

const ModuleSky = () => {

  return (
      <div className={cx('moduleSky')}>
          <Sky
              images={{
                  0: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png',
                  1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png',
                  2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png',
              }}
              how={20} /* You have to pass a number so Sky will render that amount of images chosen randomly from the object you passed in the previous step */
              time={100} /* time of the animation. Dfaults at 20s */
              size={'100px'} /* size of the rendered images. Defaults at 150px */
              background={'none'} /* color of background. Defaults to none */
          />
      </div>

  );
};
export default ModuleSky;

