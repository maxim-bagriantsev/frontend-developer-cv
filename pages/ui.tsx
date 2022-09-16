import React, {ReactElement, useState} from 'react';
import styles from './ui.module.scss';
import Input from '../components/UI/Input/Input';
import Button from '../components/UI/Button/Button';
import Icon from '../components/UI/Icon/Icon';
import classNames from 'classnames/bind';
import Switcher from '../components/UI/Switcher/Switcher';
import Checkbox from '../components/UI/Checkbox/Checkbox';
import Select from '../components/UI/Select/Select';
import DifficultyLevel from '../components/UI/DifficultyLevel/DifficultyLevel';
import Progress from '../components/UI/Progress/Progress';

const cx = classNames.bind(styles);
export const typeSearch = [
    {
        label: 'Школа №75',
    },
    {
        label: 'Школа №76',
    },
    {
        label: 'Школа №42',
    },
]

export default function Test(): ReactElement {
    const [typeFiltered, setTypeFiltered] = useState(typeSearch[0].label) //Добавляем в select тип к фильтру
    const setSearchType = (event: any) => {
        setTypeFiltered(event)
    }


    return (
        <>
            <div className={styles.container}>
                <div className={cx('bg_black', 'p-20')}>
                    <div className={'text-header-logo'}>Text Header Logo</div>
                </div>
                <div className={'text-title'}>Text Title</div>
                <div className={'text-subtitle'}>Text Subtitle</div>
                <div className={'text-error'}>Text Error</div>
                <div className={'text-button'}>Text Button</div>
                <div className={'text-breadcrumbs'}>Text Breadcrumbs</div>
                <div className={'text-input-label'}>Text Input Label</div>
                <div className={'text-input'}>Text Input</div>
                <div>Text Normal</div>
                <Input label="Input без ошибки" name="" value="" onChange={() => {
                }}/>
                <Input
                    label="Input c ошибкой"
                    name=""
                    error="Упс, ошибка"
                    onChange={() => {
                    }}
                />
                <Input
                    label="Input-Textarea"
                    type="textArea"
                    name=""
                    value=""
                    onChange={() => {
                    }}
                />
                <Select
                    label="Select"
                    name="Select"
                    options={['Школа №75', 'Школа №76', 'Школа №42']}
                />
                <Button label="Базовый JS" size="full"/>
                <a href="#">Зарегистрироваться</a>
                <div className={styles.icons}>
                    <Icon symbol="cross"/>
                    <Icon symbol="user"/>
                    <div className={cx('icon')}>
                        <Icon symbol="link-badge"/>
                    </div>
                    <div className={cx('icon')}>
                        <Icon symbol="telegram-badge"/>
                    </div>
                    <div className={cx('icon')}>
                        <Icon symbol="user-badge"/>
                    </div>
                    <div className={cx('icon', 'icon_active')}>
                        <Icon symbol="link-badge"/>
                    </div>
                    <div className={cx('icon', 'icon_active')}>
                        <Icon symbol="telegram-badge"/>
                    </div>
                    <div className={cx('icon', 'icon_active')}>
                        <Icon symbol="user-badge"/>
                    </div>
                    <Icon symbol="telegram"/>
                    <Icon symbol="delete"/>
                    <Icon symbol="education"/>
                    <Icon symbol="article"/>
                    <Icon symbol="video"/>
                    <Icon symbol="copy"/>
                    <div className={styles.checkboxDone_gray}>
                        <Icon symbol="checkbox-done"/>
                    </div>
                    <div className={styles.checkboxDone_green}>
                        <Icon symbol="checkbox-done"/>
                    </div>

                    <Icon symbol="checkbox-cross"/>
                </div>
                <Switcher/>
                <Switcher active={true}/>
                <Checkbox
                    label="Базовый JavaScript"
                    active={true}
                    onChangeStatus={() => {
                    }}
                />
                <Checkbox label="Продвинутый JavaScript" onChangeStatus={() => {
                }}/>
                <DifficultyLevel level={2}/>
            </div>
            <Progress value={50} width={'100vw'}/>
            <br/>
        </>
    );
}
