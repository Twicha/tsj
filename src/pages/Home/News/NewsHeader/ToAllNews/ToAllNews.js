import React from 'react';
import classes from './ToAllNews.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { fetchHideSctollTopBtn } from '../../../../../store/actions/scrollTopBtn';
import { scrollTop } from '../../../../../functions';

const ToAllNews = ({scrollTopBtnActive, dispatch}) => {

    const clickHandler = () => {
        scrollTop();

        if (scrollTopBtnActive) {
            dispatch(fetchHideSctollTopBtn());
        }
    }

    return (
        <Link 
            className={classNames(classes.ToAllNews, 'bs-1')} 
            to="/news"
            onClick={clickHandler}
        >
            все новости
        </Link>
    )
}

export default ToAllNews;
