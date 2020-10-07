import React from 'react';
import classes from './NewsHeader.module.scss';
import classNames from 'classnames';
import ToAllNews from './ToAllNews/ToAllNews';

const NewsHeader = ({length, scrollTopBtnActive, dispatch}) => {
    return (
        
        <div className={classes.NewsHeader}>
            <div className={classes.NewsHeader_Title}>
                Последние {length} новостей
            </div>
            <ToAllNews scrollTopBtnActive={scrollTopBtnActive} dispatch={dispatch} />
        </div>
    )
}

export default NewsHeader;
