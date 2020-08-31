import React from 'react';
import classes from './Logo.module.scss';
import { Link } from 'react-router-dom';

const Logo = ({onClick}) => {

    return (
        <Link
            className={classes.Logo}
            to="/"
            onClick={onClick}
        >
            ТСЖ Книжное
        </Link>
    )
}

export default Logo;
