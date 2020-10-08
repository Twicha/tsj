import React from 'react';
import classes from './ToAllNews.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { scrollTop } from '../../../../functions';

const ToAllNews = () => {

    return (
        <Link 
            className={classNames(classes.ToAllNews, 'bs-1')} 
            to="/news"
            onClick={scrollTop}
        >
            все новости
        </Link>
    )
}

export default ToAllNews;
