import React, { useEffect,useState } from 'react';
import classes from './SingleNews.module.scss';
import classNames from 'classnames';
import { getPost } from '../../posts';
import { postedTime } from '../../functions';

const SingleNews = (props) => {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(props);

        getPost(props.match.params.id).then(res => {
            setPost(res);
            setLoading(false);
        })
    }, []);

    const loader = (
        <div className={classNames('container', classes.SingleNews, classes.Loader)}>
            <h1 className={classNames(classes.SingleNews__Title)}>заглушка</h1>

            <div className={classNames(classes.SingleNews__Text)}>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
                <p>заглушка</p>
            </div>

            <small className={classNames(classes.SingleNews__Posted)}>заглушка</small>
        </div>
    )

    const content = (
        <div className={classNames('container', classes.SingleNews)}>
            <h1 className={classNames(classes.SingleNews__Title)}>
                {post.title ? post.title : null}
            </h1>

            <div className={classNames("ql-editor", classes.SingleNews__Text)} dangerouslySetInnerHTML={{__html: post.text ? post.text : null}}></div>

            <small className={classNames(classes.SingleNews__Posted)}>
                Запись опубликована&nbsp;
                {post.posted ? postedTime(post.posted) : null}
            </small>
        </div>
    );
    

    return (
        <React.Fragment>
            {loading ? loader : content}
        </React.Fragment>
    )
}

export default SingleNews;
