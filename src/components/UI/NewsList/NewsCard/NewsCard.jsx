import React from 'react';
import classes from './NewsCard.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { postedTime } from '../../../../functions';

const NewsCard = ({loading, title, posted, id}) => {

    const item = () => {
        if (loading) {
            return (
                <li className={classNames(classes.NewsCard, classes.Loading)} title="Идёт загрузка...">
                    <a>заглушка</a>
                    <p>заглушка</p>
                </li>
            );
        } else {
            return(
                <li className={classes.NewsCard}>
                    <Link 
                        to={`/news/${id}`} 
                        title={title}
                    >
                        {title}
                    </Link>
                    <p>Запись опубликована {posted ? postedTime(posted) : null}</p>
                </li>
            );
        }
    }

    return (
        <React.Fragment>
            {item()}
        </React.Fragment>
    )
}

export default NewsCard;

