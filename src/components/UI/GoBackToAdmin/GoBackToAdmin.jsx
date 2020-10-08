import React from 'react';
import classes from './GoBackToAdmin.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const GoBackToAdmin = () => {
    return (
        <Link to="/admin" className={classNames('btn', classes.GoBackToAdmin)}>Назад</Link>
    )
}

export default GoBackToAdmin;
