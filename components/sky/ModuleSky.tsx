import React from 'react';
import classNames from 'classnames/bind';
import styles from './ModuleSky.module.scss';
import ReactIcon from '../../public/icons/skills/react.png'
import JsIcon from '../../public/icons/skills/js.png'
import NodeIcon from '../../public/icons/skills/node.png'
import NextIcon from '../../public/icons/skills/next.png'
import HtmlIcon from '../../public/icons/skills/html.png'
import CssIcon from '../../public/icons/skills/css.png'

// @ts-ignore
import Sky from 'react-sky';

const cx = classNames.bind(styles);

const ModuleSky = () => {

  return (
      <div className={cx('moduleSky')}>
          <Sky
              images={{
                  0: ReactIcon.src,
                  1: JsIcon.src,
                  2: NodeIcon.src,
                  3: NodeIcon.src,
                  4: NextIcon.src,
                  5: HtmlIcon.src,
                  6: CssIcon.src,
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

