import React from 'react';
import classes from './NewsHeader.module.scss';
import classNames from 'classnames';
import ToAllNews from './ToAllNews/ToAllNews';

const NewsHeader = ({length}) => {
    return (
        
        <div className={classes.NewsHeader}>
            <div className={classes.NewsHeader_Title}>
                Последние {length} новостей
            </div>
            <ToAllNews />
        </div>
    )
}

export default NewsHeader;
