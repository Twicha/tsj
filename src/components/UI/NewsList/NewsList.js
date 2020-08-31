import React from 'react';
import classes from './NewsList.module.scss';
import classNames from 'classnames';
import NewsCard from './NewsCard/NewsCard';

const NewsList = ({posts, loading}) => {

    const renderNews = () => {
        return posts.map((item, index) => {
            return (
                <NewsCard
                    loading={loading}
                    key={item.postId ? item.postId : index}
                    id={item.postId}
                    title={item.title ? item.title : null}
                    posted={item.posted ? item.posted : null}
                />
            );
        });
    }

    return (
        <ul className={classes.NewsList}>
            {renderNews()}
        </ul>
    )
}

export default NewsList;
