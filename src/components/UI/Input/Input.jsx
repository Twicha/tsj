import React from 'react';
import classes from './Input.module.scss';
import classNames from 'classnames';

const Input = ({title, type = 'text', name, className, placeholder, value, onChange, invalid}) => {
    return (
        <div className={classNames(classes.FormControl, className, invalid ? classes.Invalid : null)}>
            <label htmlFor={name}>
                {title}:
            </label>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={classNames('input')}
            />
            {invalid ? <span>Длинна строки не должны быть меньше 6 символов...</span> : null}
        </div>
    )
}

export default Input;
